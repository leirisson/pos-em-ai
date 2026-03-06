import 'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.22.0/dist/tf.min.js';
import { workerEvents } from '../events/constants.js';

//contexto global
let _globalCtx = {}

// definindo os pesos



// 🔢 Normalize continuous values (price, age) to 0–1 range
// Why? Keeps all features balanced so no one dominates training
// Formula: (val - min) / (max - min)
// Example: price=129.99, minPrice=39.99, maxPrice=199.99 → 0.56
const normalize = (value, min, max) => (value - min) / ((max - min) || 1)

function makeContext(catalog, users) {
    // primeiro pegar todas as idades
    const ages = users.map(u => u.age);
    const prices = catalog.map(p => p.price)

    // pegando a maior idade e a menor idade
    const minAge = Math.min(...ages)
    const maxAge = Math.max(...ages)

    const minPrice = Math.min(...prices)
    const maxPrice = Math.max(...prices)

    const colors = [...new Set(catalog.map(p => p.color))]
    const caterogires = [...new Set(catalog.map(p => p.category))]

    const colorIndex = Object.fromEntries(
        colors.map((color, index) => {
            return [color, index]
        })
    )

    const categoriesIndex = Object.fromEntries(
        caterogires.map((category, index) => {
            return [category, index]
        })
    )

    // computar a media de idade dos compradores por produto
    // ajuda personalizar
    const midAge = (minAge + maxAge) / 2 // divide por dois pois são dois pesos: menorIdade + MaiorIdade / 2
    const ageSums = {} // soma das idades
    const ageCounts = {}

    users.forEach(user => {
        user.purchases.forEach(product => {
            ageSums[product.name] = (ageSums[product.name] || 0) + user.age
            ageCounts[product.name] = (ageCounts[product.name] || 0) + 1
        })
    });

    const productAvgAgeNorm = Object.fromEntries(
        catalog.map(product => {
            const avg = ageCounts[product.name] ? ageSums[product.name] / ageCounts[product.name] : midAge
            return [product.name, normalize(avg, minAge, maxAge)]
        })
    )


    return {
        catalog,
        users,
        colorIndex,
        categoriesIndex,
        minAge, 
        maxAge,
        minPrice,
        maxPrice,
        numcategories: caterogires.length,
        numColors: colors.length,
        dimentions: 2 + caterogires.length + colors.length // numero de dimenções 
    }



}


async function trainModel({ users }) {
    console.log('Training model with users:', users);
    postMessage({ type: workerEvents.progressUpdate, progress: { progress: 1 } });

    // =======================
    // começa aqui
    const catalog = await (await fetch('../../data/products.json')).json()


    // criando o contexto
    const context =  makeContext(catalog, users)

    // adicionando no contexto global
    _globalCtx = context

    // =============================
    postMessage({ type: workerEvents.progressUpdate, progress: { progress: 100 } });
    postMessage({ type: workerEvents.trainingComplete });
}

function recommend({ user }) {

    // postMessage({
    //     type: workerEvents.recommend,
    //     user,
    //     recommendations: sortedItems
    // });

}

const handlers = {
    [workerEvents.trainModel]: trainModel,
    [workerEvents.recommend]: recommend,
};

self.onmessage = e => {
    const { action, ...data } = e.data;
    if (handlers[action]) handlers[action](data);
};
