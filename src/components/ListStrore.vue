<template>
  <div v-if="product.deletado_em === null" class="list">
    <div class="list__container">
      <div class="list__user-data">
        <div class="list__image">
          <img src="../assets/icons/shop.svg" alt="">
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
    </div>
    <button v-if="!edit" @click="buyItem()" class="button-buy">Comprar</button>
    <div v-else>
      <button @click="editProduct()" class="button button__edit">
        <img src="../assets/icons/edit.svg" width="24px" height="24px" alt="">
      </button>
      <button @click="deleteProduct()" class="button button__delete">
        <img src="../assets/icons/delete.svg" width="24px" height="24px" alt="">
      </button>
    </div>
    <DialogEdit @confirmEdit="confirmEdit" @close="showDialogProduct= false" v-if="showDialogProduct" :data="product" title="Editar Produto" type="product"/>
    <ConfirmDialog :product="product" @close="showModal = false" v-if="showModal"/>
  </div>
</template>
<script>
import ConfirmDialog from '../components/ConfirmDialog.vue'
import DialogEdit from '../components/DialogEdit.vue'
import api from '../api'
export default {
  name: 'ListStore',
  components: {
    ConfirmDialog,
    DialogEdit
  },
  data() {
    return {
      showModal: false,
      showDialogProduct: false
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
    },
    edit: {
      default: false,
      type: Boolean
    }
  },

  methods: {
    buyItem() {
      this.showModal = true;
    },
    deleteProduct() {
      const id = this.product.id
      return api.put("https://back-coin.herokuapp.com/delete/product", {id})
        .then((res) => {
          if (res.data.success) {
            this.$emit('getProducts');
            console.log(res.data.message);
          } else {
            console.log('Não foi possível deletar');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editProduct(){
      this.showDialogProduct = true
    },
    confirmEdit() {
      this.$emit('getProducts');
    }
  }
}
</script>

<style lang="scss" scoped>
  .list {
    display: flex;
    align-items: center;
    width: 100vw;
    height: 80px;
    border-top: solid 10px #f5f5f5;
    cursor: pointer;

    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: calc(100% - 110px);
    }

    &__user-data {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__image {
      background-color: #aaa;
      border-radius: 50%;
      height: 50px;
      margin-bottom: 0.5vh;
      width: 50px;
      margin: 0 10px;
      overflow: hidden;
      position: relative;
      display: flex;
      align-content: center;
      align-items: center;
      img {
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

  .button-buy{
    background-color: #06bf06;
    color: white;
    border: 1px solid #06bf06;
    border-radius: 5px;
    margin-right: 10px;
    cursor: pointer;
  }

  .button {
    margin: 5px;
    border-radius: 50%;
    &__edit {
      border: 1px solid #f3c011;
      background-color: #f3c011;
    }

    &__delete {
      border: 1px solid #f3c011;
      background-color: #FFFFFF;
    }
  }
</style>