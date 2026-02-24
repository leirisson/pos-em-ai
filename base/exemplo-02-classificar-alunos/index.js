import tf from '@tensorflow/tfjs-node'

const dados = [
  [0.097, 0, 0, 1, 0, 1, 0],
  [0.516, 1, 0, 0, 1, 0, 0],
  [0.258, 0, 1, 0, 0, 0, 1],
  [1.000, 0, 0, 1, 1, 0, 0],
  [0.000, 1, 0, 0, 0, 1, 0],
  [0.452, 0, 1, 0, 0, 0, 1]
]

const labels = [
  [0, 1, 0],
  [1, 0, 0],
  [0, 0, 1],
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0]
]

async function treinar(xs, ys) {
  const model = tf.sequential()
  model.add(tf.layers.dense({ inputShape: [7], units: 80, activation: 'relu' }))
  model.add(tf.layers.dense({ units: 3, activation: 'softmax' }))
  model.compile({ optimizer: 'adam', loss: 'categoricalCrossentropy', metrics: ['accuracy'] })
  await model.fit(xs, ys, { epochs: 100, shuffle: true, verbose: 0 })
  return model
}

const xs = tf.tensor2d(dados)
const ys = tf.tensor2d(labels)
const nomes = ['premium', 'medium', 'basic']

async function main() {
  const model = await treinar(xs, ys)
  const amostra = tf.tensor2d([[0.323, 1, 0, 0, 0, 0, 1]])
  const pred = model.predict(amostra)
  const arr = await pred.array()
  arr[0].forEach((p, i) => console.log(`${nomes[i]}: ${(p * 100).toFixed(1)}%`))
}

main()
