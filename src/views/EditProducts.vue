<template>
  <div>
    <Header/>
    <div class="body-container">
      <div class="input-container">
        <div>
          <input class="input" type="text" placeholder="Nome do Produto" v-model="name">
          <input class="input" type="number" placeholder="Valor do Produto" v-model="value">
        </div>
        <div>
          <input class="input input__description" type="text" placeholder="Descrição do Produto" v-model="description">
        </div>
      </div>
      <div class="button-container">
        <button @click="registerNewProduct()" class="button">Cadastrar</button>
      </div>
      <div class="list-products">
        <ListStore 
          :edit="true"
          v-for="(product, index) in products"
          :key="index"
          :product="product"
          @getProducts="getListProducts()"
        />
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import api from '../api';
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ListStore from '../components/ListStrore.vue'
export default {
  components: {
    Header,
    Footer,
    ListStore
  },
  data() {
    return {
      name: '',
      value: '',
      description: '',
      products: {}
    }
  },
  mounted() {
    this.getListProducts();
  },
  methods: {
    getListProducts() {
      return api.get("https://back-coin.herokuapp.com/adm/product")
        .then((res) => {
          if (res.status === 200) {
            this.products = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    registerNewProduct() {
      return api.post("https://back-coin.herokuapp.com/adm/product", {nome: this.name, valor: this.value, descricao: this.description})
        .then((res) => {
          if (res.data.success) {
            this.getListProducts()
            console.log(res.data.message);
            this.description = '';
            this.value = '';
            this.name = '';
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
  .body-container {
    height: calc(100vh - 90px);
    overflow: hidden;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 11%;
  }

  .list-products {
    height: 84%;
    overflow: auto;
  }

  .input {
    border: 1px solid rgba(0, 0, 0, 0.425);
    height: 20px;
    padding: 5px;
    border-radius: 5px;
    margin: 5px;
    width: calc(50% - 22px);
    &__description {
      width: calc(100% - 22px);
    }
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
  }

  .button {
    background-color: #f3c011;
    color: white;
    border: 1px solid #f3c011;
    border-radius: 10px;
    height: 30px;
    width: 100px;
    margin: 5px;
  }
</style>