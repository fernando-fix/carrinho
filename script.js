
// Também funciona, é a forma que é mostrada no site do vue

// const { createApp, ref } = Vue
// createApp({
//     setup() {
//         const message = ref('Hello vue!')
//         return {
//             message
//         }
//     }
// }).mount('#app')

// Forma mostrada no curso
const app = Vue.createApp({
    data() {
        return {
            message: 'Hello vue!'
        }
    }
}).mount('#app')