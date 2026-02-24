estou estudando criação de modelos e CRIANDO E TREINANDO MINHA PRIMEIRA REDE NEURAL PARA DETERMINAR A CATEGORIA DE ALUNOS:
"premium", "medium", "basic"

preciso de exercícios fundamentar os meu conhecimentos nos primeiros tópicos vou fornecer o codigo de exemplo da primeira aula para que crie exercicios com mini cenarios e dados para treino e test, crie 2 exemplos com os dados não normalizados e normalizados, depois crie os exercicios passando os dados não normalizados para serem normalizados. 
#REGRAS
==> ENSINE POR ETAPAS
==> ENSINE PASSO A PASSO 
==> SEMPRE EXPLIQUE OS CONCEITOS ENVOLVIDOS DE FORMA DIDATICA E SIMPLES
==> CRIE UM README COM A LISTA DE TAREFAS A SEREM FEITAS, TODOS OS EXERCICIOS DEVEM RESULTAR EM UM MODELO TREINADO POR COMPLETO 
==> NÃO PRECISA DE GBARITOS

#DEMANDAS
1. CRIE UMA PASTA COM 5 EXERCICIOS, CADA UM COM UMA DESCRIÇÃO, LISTA DE TAREFAS COM DEMANDAS SIMULANDO UMA APLICAÇÃO REAL.
2. CADA EXERCICIO DEVE TER UM ARQUIVO JS COM O CODIGO DO EXERCICIO, UM ARQUIVO JSON COM OS DADOS DE TREINO E TESTE, E UM ARQUIVO README COM A LISTA DE TAREFAS A SEREM FEITAS.
3. CADA EXERCICIO DEVE TER UMA DESCRIÇÃO CLARA, INCLUINDO OS DADOS DE ENTRADA, SAÍDA E AS TAREFAS A SEREM FEITAS.
4. CADA EXERCICIO DEVE TER UM ARQUIVO README COM A EXPLICAÇÃO DOS CONCEITOS APLICADOS NO EXERCICIO
5. NÃO PRECISA DE GBARITOS E NEM DE EXEMPLOS DE CÓDIGO, APENAS A DESCRIÇÃO CLARA.

#EXEMPLO
import tf, { train } from '@tensorflow/tfjs-node';

async function trainModel(inputXs, outputYs){
    const model = tf.sequential()
    // primeira camada da rede neural
    // entrada de 7 posições (idade_normalizada, 3 cores, 3 localizações)

    model.add(tf.layers.dense({
        inputShape: [7],
        units: 80, // neuronios
        activation: 'relu'
    }))

    // saia: 2 neuronios
    // /um para cada categforia 
    model.add(tf.layers.dense({
        units: 3,
        activation: 'softmax'
    }))

    // etapda de compilção 
    // compilando o modelo
    // optimazer Adam (adaptive Moment Estimation)
    // é um treinador pessoal moderno para rede neurais
    // ajusta os pesos de forma eficiante e eficiente
    // vai aprender com o historico de erros e acertos
    model.compile({
        optimizer: 'adam',
        loss: 'categoricalCrossentropy',
        metrics: ['accuracy']
    })

    //treinamento do modelo
    await model.fit(
        inputXs,
        outputYs,
        {
            verbose: 0,
            epochs: 100,
            shuffle: true,
            callbacks: {
                onEpochEnd: (epoch, log) => console.log(`Epoch: ${epoch} | loss: ${log.loss}`)
            }
        }
    )

    return model
}

// Usamos apenas os dados numéricos, como a rede neural só entende números.
// tensorPessoasNormalizado corresponde ao dataset de entrada do modelo.
const tensorPessoasNormalizado = [
    [0.33, 1, 0, 0, 1, 0, 0], // Erick
    [0, 0, 1, 0, 0, 1, 0],    // Ana
    [1, 0, 0, 1, 0, 0, 1]     // Carlos
]

// Labels das categorias a serem previstas (one-hot encoded)
// [premium, medium, basic]
const labelsNomes = ["premium", "medium", "basic"]; // Ordem dos labels
const tensorLabels = [
    [1, 0, 0], // premium - Erick
    [0, 1, 0], // medium - Ana
    [0, 0, 1]  // basic - Carlos
];

// Criamos tensores de entrada (xs) e saída (ys) para treinar o modelo
const inputXs = tf.tensor2d(tensorPessoasNormalizado)
const outputYs = tf.tensor2d(tensorLabels)

// etapa de treinamento
// quanto amsi dados melhor 
const model = trainModel(inputXs, outputYs)
