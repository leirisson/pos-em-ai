/* eslint-disable @typescript-eslint/no-unused-vars */
import * as tf from "@tensorflow/tfjs";
import { useEffect, useState } from "react";

import "./App.css";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  color: string;
}

interface User {
  id: number;
  name: string;
  age: number;
  purchases: Product[];
}

function App() {
  const [catalog, setCatalog] = useState<Product[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState<
    { product: Product; score: number }[]
  >([]);

  const normalize = (value: number, min: number, max: number) =>
    (value - min) / (max - min || 1);

  // Passo 1 — A assinatura da função
  function makeContext(catalog: Product[], users: User[]) {
    // extrai todos os valores em arrays separados
    const ages = users.map((user) => user.age);
    const prices = catalog.map((product) => product.price);

    // Passo 2 — Extrair min/max de idades e preços
    // encontrar os limites
    // **Por que precisamos disso?**
    // minAge=18, maxAge=60
    // → normalize(25) = (25-18)/(60-18) = 0.16
    // → normalize(60) = (60-18)/(60-18) = 1.00
    // Sem min/max não conseguimos normalizar nada.
    const minAge = Math.min(...ages);
    const maxAge = Math.max(...ages);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    // Passo 3 — Índices de cores e categorias
    // coleta valores únicos
    const colors = [...new Set(catalog.map((product) => product.color))];
    const categories = [...new Set(catalog.map((product) => product.category))];

    // transforma em { valor: índice }
    // **O que isso gera?**
    // colors     = ["red", "blue", "green"]
    // colorIndex = { red: 0, blue: 1, green: 2 }
    // → usado na Etapa 2 para montar o vetor one-hot
    const colorIndex = Object.fromEntries(
      colors.map((color, index) => [color, index]),
    );
    const categoriesIndex = Object.fromEntries(
      categories.map((category, index) => [category, index]),
    );

    // Passo 4 — Média de idade por produto
    const midAge = (minAge + maxAge) / 2;
    const ageSum = {} as Record<string, number>;
    const ageConuts = {} as Record<string, number>;

    users.forEach((user) => {
      user.purchases.forEach((product) => {
        ageSum[product.name] = (ageSum[product.name] || 0) + user.age;
        ageConuts[product.name] = (ageConuts[product.name] || 0) + 1;
      });
    });

    const productAvgAgeNorm = Object.fromEntries(
      catalog.map((product) => {
        const avg = ageConuts[product.name]
          ? ageSum[product.name] / ageConuts[product.name]
          : midAge;

        return [product.name, normalize(avg, minAge, maxAge)];
      }),
    );

    return {
      catalog,
      users,
      colorIndex,
      categoriesIndex,
      categories,
      colors,
      minAge,
      maxAge,
      minPrice,
      maxPrice,
      numCategories: categories.length,
      numColors: colors.length,
      productAvgAgeNorm,
      dimensions: 2 + categories.length + colors.length,
      //          ↑
      //     [preçoNorm, idadeNorm, ...categorias, ...cores]
    };
  }

  // Passo 2 — Montar os vetores de features (X)
  // **Exemplo concreto:**
  // produto: { price: 129.99, category: "esporte", color: "red" }
  // usuário: { age: 25 }
  // [0.56,  0.16,  1, 0,  1, 0, 0]
  // preço  idade  cats   cores
  function makeFeturesVector(
    user: User,
    product: Product,
    context: ReturnType<typeof makeContext>,
  ): number[] {
    const {
      minAge,
      maxAge,
      minPrice,
      maxPrice,
      colorIndex,
      numCategories,
      categoriesIndex,
      numColors,
    } = context;

    // feature 1 — preço normalizado
    const priceNorm = normalize(product.price, minPrice, maxPrice);

    // feature 2 — idade normalizada
    const ageNorm = normalize(user.age, minAge, maxAge);

    // feature 3 — one-hot de categoria
    // ex: categoryIndex = { esporte:0, acessorio:1 }
    // "esporte" → [1, 0]
    // "acessorio" → [0, 1]

    const categoryVector = Array(numCategories).fill(0);
    categoryVector[categoriesIndex[product.category]] = 1;

    // feature 4 — one-hot de cor
    // ex: colorIndex = { red:0, blue:1, green:2 }
    // "red" → [1, 0, 0]
    const colorVector = Array(numColors).fill(0);
    colorVector[colorIndex[product.color]] = 1;

    //junta tudo em um unico vetor
    return [priceNorm, ageNorm, ...categoryVector, ...colorVector];
  }

  // Passo 3 — Montar os labels (Y)
  // para cada par [usuário, produto]
  // label = 1 se o usuário comprou o produto
  // label = 0 se não comprou
  function makeLabel(user: User, product: Product) {
    return user.purchases.some((p) => p.name === product.name) ? 1 : 0;
  }

  // Passo 4 — Montar o dataset completo
  // **Visualizando o dataset:**
  //         preço  idade  cat0 cat1  cor0 cor1 cor2   comprou?
  // X[0] = [0.56,  0.16,   1,   0,   1,   0,   0  ]  Y[0] = 1  ✅
  // X[1] = [0.30,  0.16,   0,   1,   0,   1,   0  ]  Y[1] = 0  ❌
  // X[2] = [0.56,  0.80,   1,   0,   1,   0,   0  ]  Y[2] = 1  ✅

  function makeDataset(context: ReturnType<typeof makeContext>) {
    const { catalog, users } = context;
    const X: number[][] = []; // fetures
    const Y: number[] = []; // labels

    users.forEach((user) => {
      catalog.forEach((product) => {
        X.push(makeFeturesVector(user, product, context));
        Y.push(makeLabel(user, product));
      });
    });

    return { X, Y };
  }

  // Passo 5 — Definir a arquitetura da rede
  // **Por que essas escolhas?**
  // relu     → ativa só o que importa, aprende mais rápido
  // sigmoid  → perfeito para "qual a chance?" (0 a 1)
  // adam     → o otimizador mais usado no mercado
  // binary   → nossa resposta é binária: comprou ou não comprou

  function buildModel(dimensions: number): tf.Sequential {
    const model = tf.sequential();

    // camada 1 — entrada + primeira camada oculta
    model.add(
      tf.layers.dense({
        inputShape: [dimensions], // tamanho do vetor de features
        units: 16, // 16 neurônios
        activation: "relu", // relu: ignora valores negativos
      }),
    );

    // camada 2 — segunda camada oculta
    model.add(
      tf.layers.dense({
        units: 8,
        activation: "relu",
      }),
    );

    // camada 3 — saída
    model.add(
      tf.layers.dense({
        units: 1, // um número: a probabilidade
        activation: "sigmoid", //  sigmoid: força saída entre 0 e 1
      }),
    );

    // como o modelo vai aprender
    model.compile({
      optimizer: "adam", // algoritmo que ajusta os pesos
      loss: "binaryCrossentropy", //  mede o erro para 0 ou 1
      metrics: ["accuracy"], //   mostra % de acerto no treino
    });

    return model;
  }

  // Passo 6 — A função trainModel completa
  // **O que você vai ver no console durante o treino:**
  // Epoch  1/50 — loss: 0.6931 — acc: 0.5200
  // Epoch  2/50 — loss: 0.6721 — acc: 0.5800
  // Epoch  3/50 — loss: 0.6401 — acc: 0.6300

  // Epoch 50/50 — loss: 0.2103 — acc: 0.9100
  //                ↑ erro caindo    ↑ acerto subindo ✅
  // ## O fluxo completo da `trainModel`
  // context
  //    │
  //    ├── makeDataset()
  //    │       ├── X = [[0.56, 0.16, 1, 0, 1, 0, 0], ...]
  //    │       └── Y = [1, 0, 1, 0, 0, 1, ...]
  //    │
  //    ├── tf.tensor2d(X) → xs
  //    ├── tf.tensor2d(Y) → ys
  //    │
  //    ├── buildModel(dimensions)
  //    │       └── rede neural com 3 camadas
  //    │
  //    └── model.fit(xs, ys, { epochs: 50 })
  //            └── retorna model treinado ✅

  async function trainModel(context: ReturnType<typeof makeContext>) {
    const { X, Y } = makeDataset(context);

    // transforma arrays em tensores (formato do TensorFlow)]
    const xs = tf.tensor2d(X, [X.length, context.dimensions]); // matriz de features
    const ys = tf.tensor2d(Y, [Y.length, 1]); // coluna de labels

    // montando a rede neural
    const model = buildModel(context.dimensions);

    // treinar o modelo
    await model.fit(xs, ys, {
      epochs: 50,
      batchSize: 8,
      shuffle: true,
      validationSplit: 0.2,
      callbacks: {
        onEpochEnd: (epoch, logs) => {
          // ✅ tenta 'acc' primeiro, depois 'accuracy', depois 0
          const acc = logs?.acc ?? logs?.accuracy ?? 0;
          const loss = logs?.loss ?? 0;

          console.log(
            `Epoch ${epoch + 1}/50 — loss: ${loss.toFixed(4)} — acc: ${acc.toFixed(2)}`,
          );
        },
      },
    });

    // libera memória dos tensores
    xs.dispose();
    ys.dispose();

    return model;
  }


  // '============================================================'
  //  ||                REALIZAR  RECOMENDAÇÕES                 ||
  // '============================================================'

  // async function recommend(
  //   user: User,
  //   context: ReturnType<typeof makeContext>,
  //   model: tf.Sequential,
  // ) {
  //   const { catalog } = context;
  //   const result: { product: Product; score: number }[] = [];

  //   for (const product in catalog) {
  //     // monta o vetor desse par usuário+produto
  //     const vector = makeFeturesVector(user, product, context)
  //   }
  // }
  async function recommend(
    user: User,
    context: ReturnType<typeof makeContext>,
    model: tf.Sequential,
  ): Promise<{ product: Product; score: number }[]> {
    const { catalog } = context;
    const results: { product: Product; score: number }[] = [];

    for (const product of catalog) {
      const vector = makeFeturesVector(user, product, context);
      const input = tf.tensor2d([vector]);

      const prediction = model.predict(input) as tf.Tensor;
      const score = (await prediction.data())[0];

      input.dispose();
      prediction.dispose();

      results.push({ product, score });
    }

    return results.sort((a, b) => b.score - a.score);
  }

  // etapa 1: carregamento e extração de dados
  // ✅ init deve esperar loadData terminar
  useEffect(() => {
    async function run() {
      // carrega dados
      const [catalogRes, usersRes] = await Promise.all([
        fetch("../src/data/products.json"),
        fetch("../src/data/users.json"),
      ]);
      const catalog: Product[] = await catalogRes.json();
      const users: User[] = await usersRes.json();

      setCatalog(catalog);
      setUsers(users);

      // só depois prepara e treina
      const context = makeContext(catalog, users);
      const model = await trainModel(context);
      const results = await recommend(users[0], context, model);

      setRecommendations(results);
      setLoading(false);
    }

    run();
  }, []); // ← [] significa "roda só uma vez, quando o componente monta"

  return (
    <>
      {loading ? (
        <h1>Carregando dados ...</h1>
      ) : (
        <div>
          <h1>Recomendações para {recommendations[0]?.product.name}</h1>
          {recommendations.map(({ product, score }) => (
            <div key={product.id}>
              <span>{product.name}</span>
              <span>{(score * 100).toFixed(0)}%</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
