const app = Vue.createApp({
    data() {
        return {
            cart: [],
            cartClicked: false,
            products:[
                {id:1,name:'Kaos Kaki VUE Biru',img:'./assets/images/socks_blue.jpg',price:75000},
                {id:2,name:'Kaos Kaki VUE Hijau',img:'./assets/images/socks_green.jpg',price:5000},
                {id:3,name:'Kaos Kaki VUE Biru Deluxe',img:'./assets/images/socks_blue.jpg',price:150000},
                {id:4,name:'Kaos Kaki VUE Hijau Deluxe',img:'./assets/images/socks_green.jpg',price:10000},
                {id:5,name:'Kaos Kaki VUE Biru Supreme',img:'./assets/images/socks_blue.jpg',price:300000},
                {id:6,name:'Kaos Kaki VUE Hijau Supreme',img:'./assets/images/socks_green.jpg',price:20000}
            ]
        }
    },
    methods: {
        tambahKeranjang(kode) {
            this.cart.push(kode)
            console.log(this.cart)
        },
        openCart(){
            this.cartClicked = true
        },
        closeCart(){
            this.cartClicked = false
        }
    }
})
