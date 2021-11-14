app.component('produk', {
    props:['products'],
    template: 
    /*html*/
    `
    <div>
        <div class="card card-grid inline-block" style="width: 18rem; float: left; margin: 15px;" v-for="product in products" :key="product.id">
            <img :src="product.img" class="card-img-top" :alt="product.name">
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">Rp. {{formatAngka(product.price)}}</p>
                <a href="#" class="btn btn-warning" v-on:click="tambahKeranjang(product.id)">+Keranjang</a>
                <!--<a class="btn btn-danger" v-on:click="hapus(product.id)">Delete</a>-->
                
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
        tambahKeranjang(kode){
            this.$emit('add-to-cart', kode)
        }   
    },
    computed: {
 
    }
  })