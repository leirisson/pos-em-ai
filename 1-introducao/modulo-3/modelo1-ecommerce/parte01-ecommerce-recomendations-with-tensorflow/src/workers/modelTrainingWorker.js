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

// function makeContext(catalog, users) {
//     // primeiro pegar todas as idades
//     const ages = users.map(u => u.age);
//     const prices = catalog.map(p => p.price)

//     // pegando a maior idade e a menor idade
//     const minAge = Math.min(...ages)
//     const maxAge = Math.max(...ages)

//     const minPrice = Math.min(...prices)
//     const maxPrice = Math.max(...prices)

//     const colors = [...new Set(catalog.map(p => p.color))]
//     const caterogires = [...new Set(catalog.map(p => p.category))]

//     const colorIndex = Object.fromEntries(
//         colors.map((color, index) => {
//             return [color, index]
//         })
//     )

//     const categoriesIndex = Object.fromEntries(
//         caterogires.map((category, index) => {
//             return [category, index]
//         })
//     )

//     // computar a media de idade dos compradores por produto
//     // ajuda personalizar
//     const midAge = (minAge + maxAge) / 2 // ✅ É simplesmente a média entre min e max (ponto médio)
//     const ageSums = {} // soma das idades
//     const ageCounts = {}

//     users.forEach(user => {
//         user.purchases.forEach(product => {
//             ageSums[product.name] = (ageSums[product.name] || 0) + user.age
//             ageCounts[product.name] = (ageCounts[product.name] || 0) + 1
//         })
//     });

//     const productAvgAgeNorm = Object.fromEntries(
//         catalog.map(product => {
//             const avg = ageCounts[product.name] ? ageSums[product.name] / ageCounts[product.name] : midAge
//             return [product.name, normalize(avg, minAge, maxAge)]
//         })
//     )


//     return {
//         catalog,
//         users,
//         colorIndex,
//         categoriesIndex,
//         minAge, 
//         maxAge,
//         minPrice,
//         maxPrice,
//         numcategories: caterogires.length,
//         numColors: colors.length,
//         dimensions: 2 + caterogires.length + colors.length // numero de dimenções 
//     }



// }

// construindo o contexto

// primeira etapada de tudo 
function makeContext(catalog, users) {

    // capturando as idades e preços 
    const ages = users.map(user => user.age)
    const price = catalog.map(product => product.price)

    // capturando a maior idade e a menor idade
    const minAge = Math.min(...ages)
    const maxAge = Math.max(...ages)

    // capturando o maior preço e menor preço
    const minPrice = Math.min(...price)
    const maxPrice = Math.max(...price)

    //cores unicas e categorias unicas sem repetição
    const colors = [...new Set(catalog.map(product => product.color))]
    const categories = [...new Set(catalog.map(product => product.category))]

    // vamos mapear os indicies
    const colorIndex = Object.entries(
        colors.map((color, index) => {
            return [color, index]
        })
    )

    const categoriesIndex = Object.entries(
        categories.map((category, index) => {
            return [category, index]
        })
    )

    // computador a media de compradores de idade pro produto
    //(ajuda a personalizar)

    const midAge = (minAge + maxAge) / 2;
    const ageSum = {}
    const ageConuts = {}


    users.forEach(user => {
        user.purchases.forEach(product => {
            ageSum[product.name] = (ageSum[product.name] || 0) + user.age
            ageConuts[product.name] = (ageConuts[product.name] || 0) + 1
        })
    });

    // media do produto por idade
    const productAvgAgeNorm = Object.fromEntries(
        catalog.map(product => {
            const avg = ageConuts[product.name] ?
                ageSum[product.name] / ageConuts[product.name] :
                midAge

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
        numCategories: categories.length,
        numcolors: colors.length,
        dimension: 2 + categories.length + colors.length
    }

}

async function trainModel({ users }) {
    console.log('Training model with users:', users);
    postMessage({ type: workerEvents.progressUpdate, progress: { progress: 1 } });

    // =======================
    // começa aqui
    const catalog = await (await fetch('../../data/products.json')).json()


    // criando o contexto
    const context = makeContext(catalog, users)
    debugger
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
