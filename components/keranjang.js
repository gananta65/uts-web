app.component('keranjang', {
    props:['products','cart'],
    template: 
    /*html*/
    `
    <div v-for="product in products" :key="product.id">
        <div class="card" style="width: 18rem; float: left; margin: 15px;" v-if="hitungCart(product.id,cart) !==0">
            <img :src="product.img" class="card-img-top" :alt="product.name">
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <h5 class="card-title">Qty : {{hitungCart(product.id,cart)}}</h5>
                <p class="card-text">Total : <br>Rp. {{formatAngka(product.price * hitungCart(product.id,cart))}}</p>
                <button @click="deleteCart(product.id,cart)" class="btn btn-danger">hapus</button>
            </div>
        </div>
    </div>`,
    data() {
      return {
            
      }
    },
    methods: {
        formatAngka(angka){
            let reverse = angka.toString().split('').reverse().join(''),
            hasil = reverse.match(/\d{1,3}/g);
            hasil = hasil.join('.').split('').reverse().join('');
            return hasil
        },
        hapus(kode){
            for (let i =0; i < this.products.length; i++)
                if (this.products[i].id === kode) {
                    this.products.splice(i,1);
                    break;
            }

        },
        hitungCart(key, keranjang){
            let length = 0
            for(let i=0;i<keranjang.length;i++) {
                if(keranjang[i] === key) {
                    length++;
                }
            }
            return length;
        },
        deleteCart(key, keranjang){
            for(let i=0;i<keranjang.length;i++) {
                if(keranjang[i] === key) {
                    keranjang.splice(i, 1)
                }
            }
        }
    },

    computed: {
 
    }
  })