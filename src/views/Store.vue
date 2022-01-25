<template>
  <div>
    <Header/>
    <div class="body-container">
      <div>
        <ListStore v-for="(product, index) in products" :key="index" :product="product" />
      </div>
      <Footer/>
    </div>
  </div>
  
</template>
<script>
import Footer from '../components/Footer.vue'
import ListStore from '../components/ListStrore.vue'
import Header from '../components/Header.vue'
import api from "../api";
export default{
  components: {
    Header,
    ListStore,
    Footer
  },
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.getListProducts()
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .body-container {
    height: calc(100vh - 90px);
    overflow: auto;
  }
</style>