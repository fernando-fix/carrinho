
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
            products: [
                { id: 1, name: 'Product A', amount: 10.22, qty: 1 },
                { id: 2, name: 'Product B', amount: 15.33, qty: 1 },
                { id: 3, name: 'Product C', amount: 25.99, qty: 1 },
                { id: 4, name: 'Product D', amount: 35.89, qty: 1 },
            ],
        }
    },
    methods: {
        deleteProduct(product) {
            this.products = this.products.filter(item => item.id !== product.id)
        }
    },
})
    .component('cart', {
        template: '#cart',
        props: {
            products: {
                type: Array,
                default: () => [],
            },
        },
        computed: {
            total() {
                let amount = 0
                this.products.forEach(product => {
                    amount += product.qty * product.amount
                });
                return amount;
            }
        },
        methods: {
            deleteProduct(product) {
                this.$emit('delete', product);
            }
        }
    })
    .component('product', {
        template: '#product',
        props: {
            product: {
                type: Object,
                default: () => { },
            },
        },
        data() {
            return {
            }
        },
        computed: {
            subtotal() {
                return this.product.amount * this.product.qty;
            },
        },
        methods: {
            increment() {
                this.product.qty++;
            },
            decrement() {
                if (this.product.qty <= 1) {
                    return
                }
                this.product.qty--;
            },
            deleteProduct() {
                this.$emit('delete', this.product);
            }
        }
    })
    .mount('#app')