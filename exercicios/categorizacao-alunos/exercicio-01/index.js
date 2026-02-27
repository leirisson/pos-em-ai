import * as tf  from '@tensorflow/tfjs';

// "dados_brutos": [
//   { "idade": 22, "cor": "azul", "local": "sul", "label": "medium" },
//   { "idade": 35, "cor": "vermelho", "local": "norte", "label": "premium" },
//   { "idade": 27, "cor": "verde", "local": "centro", "label": "basic" },
//   { "idade": 50, "cor": "azul", "local": "norte", "label": "premium" },
//   { "idade": 19, "cor": "vermelho", "local": "sul", "label": "basic" },
//   { "idade": 33, "cor": "verde", "local": "centro", "label": "medium" }
// ]

// ["idade_norm", "cor_vermelho", "cor_verde", "cor_azul", "loc_norte", "loc_sul", "loc_centro"]
const tensorPessoasNormalizado = [
      [0.097, 0, 0, 1, 0, 1, 0],
      [0.516, 1, 0, 0, 1, 0, 0],
      [0.258, 0, 1, 0, 0, 0, 1],
      [1.000, 0, 0, 1, 1, 0, 0],
      [0.000, 1, 0, 0, 0, 1, 0],
      [0.452, 0, 1, 0, 0, 0, 1]
]

const labelsNomes = ["premium", "medium", "basic"]
const tensorLabels = [
      [0, 1, 0], // medium
      [1, 0, 0], // premium
      [0, 0, 1], // basic
      [1, 0, 0], // premium
      [0, 0, 1], // basic
      [0, 1, 0] // medium
]





async function trainModel(inputXs, outputYs) {
      const model = tf.sequential()

      // priemira etapa: primeira camada da rede
      model.add(tf.layers.dense({
            inputShape: [7],
            units: 80,
            activation: "relu",
      }))

      // primeira etapa:  segunda camada e camada de saida
      model.add(tf.layers.dense({
            units: 3,
            activation: 'softmax',
      }))

      // segunda etapa: compilando o modelo
      model.compile({
            optimizer: "adam",
            loss: 'categoricalCrossentropy',
            metrics: ['accuracy']
      })

      // terceira etapa: treinamaneto do modelo
      await model.fit(
            inputXs,
            outputYs,
            {
                  verbose: 0,
                  epochs: 150, // quantidade que o modelo vai passar pelo dados nesse caso foi 150 vezes
                  shuffle: true,
                  callbacks: {
                        onEpochEnd: (epoch, log) => {
                              // return console.log(`Epoch: ${epoch} | Loss: ${log.loss}`)
                        }
                  }
            }
      )

      // quarta etapa: salvar o modelo
      // 🔥 SALVANDO
      await model.save('file://./model');

      console.log('Modelo salvo com sucesso!');

      return model

}

async function main() {
      // Criamos tensores de entrada (xs) e saída (ys) para treinar o modelo
      const inputXs = tf.tensor2d(tensorPessoasNormalizado)
      const outputYs = tf.tensor2d(tensorLabels)
      const model = await trainModel(inputXs, outputYs)
}

main()