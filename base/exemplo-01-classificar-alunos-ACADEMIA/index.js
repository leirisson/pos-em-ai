import tf from '@tensorflow/tfjs'

const dadosNormalizados = [
//  idade  azul  verde  verm  sp   rio  manaus
    [0.00,   1,    0,    0,   1,   0,     0],  // João   - 25 anos
    [0.43,   0,    1,    0,   0,   1,     0],  // Maria  - 40 anos
    [1.00,   0,    0,    1,   0,   0,     1]   // Pedro  - 60 anos
]

const labels = [
    [1, 0, 0], // premium
    [0, 1, 0], // medium
    [0, 0, 1]  // basic
]


async function trainModel(inputXs, outputYs){
    const model = tf.sequential()

    //Camada de entrada 7 caracteriscas por aluno
    model.add(
        tf.layers.dense({
            inputShape: [7],
            units: 80,
            activation: 'relu' // ReLU: "liga" o neurônio só se o valor for positivo
        })
    )

    // Camada de saída: 3 categorias (premium, medium, basic)
    model.add(tf.layers.dense({
        units: 3,
        activation: 'softmax' // Softmax: transforma em probabilidades que somam 100%
    }))

    
    // etapda de compilção do modelo
    model.compile({
        optimizer: 'adam',
        loss: "categoricalCrossentropy",
        metrics: ['accuracy']
    })

    // etapa de treinamento do modelo
    await model.fit(
        inputXs,
        outputYs,
        {
            verbose: 0,
            epochs: 100,
            shuffle: true,
            callbacks: {
                // onEpochEnd: (epoch, logs) => {
                //     console.log(`Época: ${epoch} | Erro: ${logs.loss.toFixed(2)} | Acertos: ${(logs.acc * 100).toFixed(1)}%`)
                // }
            }
        }
    )

    return model
}

const inputXs = tf.tensor2d(dadosNormalizados)
const outputYs = tf.tensor2d(labels)

const labelsNomes = ["premium", "medium", "basic"]

async function main() {
    const model = await trainModel(inputXs, outputYs)

    // Testando com um novo aluno (idade 35, cor azul, cidade SP)
    // idade 35 normalizada: (35-25)/(60-25) = 0.29
    const novoAlunoNormalizado = [
        [0.29, 1, 0, 0, 1, 0, 0]
    ]

    const novoAluno = tf.tensor2d(novoAlunoNormalizado)

    const predicao = model.predict(novoAluno)

    const resultadoPredicao = await predicao.array()

    console.log("\n🎯 Resultado da predição:")

    resultadoPredicao[0].forEach((probabilidade, index) => {
        console.log(`${labelsNomes[index]}: ${(probabilidade * 100).toFixed(1)}%`)
    });

}

main()