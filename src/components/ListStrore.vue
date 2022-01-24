<template>
  <div class="list">
    <div class="list__container">
      <div class="list__image">
        <img src="" alt="">
      </div>
      <div class="items">
        <div>
          {{product.nome}}
          <span class="items__price">{{product.valor}} KC</span>
        </div>
        <div class="items__decription">
          {{product.descricao}}
        </div>
      </div>
    </div>
    <button @click="buyItem()" class="button">Comprar</button>
    <ConfirmDialog :product="product" @close="showModal = false" v-if="showModal"/>
  </div>
</template>
<script>
import ConfirmDialog from '../components/ConfirmDialog.vue'
export default {
  name: 'ListStore',
  components: {
    ConfirmDialog
  },
  data() {
    return {
      showModal: false
    }
  },
  props: {
    product: {
      type: Object,
      default() {
        return {
          name: '',
          description: '',
          price: ''
        }
      },
    }
  },

  methods: {
    buyItem() {
      this.showModal = true;
    }
  }
}
</script>

<style lang="scss" scoped>
  .list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 80px;
    border-top: solid 10px #f5f5f5;
    cursor: pointer;
    margin-right: 10px;

    &__container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    &__image {
      background-color: rgb(89, 89, 89);
      border-radius: 50%;
      height: 50px;
      margin-bottom: 0.5vh;
      width: 50px;
      margin: 0 10px;
      overflow: hidden;
      position: relative;
      img {
        position: absolute;
        bottom: 0;
         width: 100%;
      }
    }
  }

  .items{ 
    display: flex;
    flex-direction: column;
    justify-content: center;
    &__price {
      color: #f3c011;
    }
    &__decription {
      font-size: 11px;
    }
  }
  .button{
    background-color: #06bf06;
    color: white;
    border: 1px solid #06bf06;
    border-radius: 5px;
    margin-right: 10px;
    cursor: pointer;
  }
</style>