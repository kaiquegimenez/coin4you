<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <h3>Comprar Produto</h3>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body"> <span>Deseja trocar <b>{{product.valor}}</b> moedas pelo produto <b>{{product.nome}}</b></span> </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="button button__cancel" @click="$emit('close')">
                Cancelar
              </button>
              <button class="button button__confirm" @click="confirm()">
                Confirmar
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import api from '../api'
export default {
  name:'ConfirmDialog',
  props: {
    product: {},
  },
  data() {
    return {
      idUser: ''
    }
  },
  mounted() {
    this.idUser = JSON.parse(localStorage.getItem('user')).id
  },
  methods: {
    confirm(){
      return api.post("https://back-coin.herokuapp.com/coins/changes", {idProduto: this.product.id, idUsuario: this.idUser })
        .then((res) => {
          if (res.success) {
            console.log(res.data.message);
            this.$emit('close');
          } else {
            console.log(res.data.message);
            this.$emit('close');
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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}


.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  border-top: 1px solid #f3c011;
  border-bottom: 1px solid white;
  width: 90%;
  height: 30%;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 0px 0px;
  background-color: #f3c011;
  border: 1px solid #f3c011;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  h3{
    color: white;
  }
}

.modal-body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  .input {
    border: 1px solid rgba(0, 0, 0, 0.425);
    height: 20px;
    padding: 5px;
    border-radius: 5px;
    margin: 5px;
  }
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 20px 10px 0px 0px;
  .button {
    &__confirm {
      background-color: #f3c011;
      color: white;
    }
    &__cancel {
      background-color: white;
      color: #f3c011;
    }
    border: 1px solid #f3c011;
    border-radius: 10px;
    height: 30px;
    width: 100px;
    margin: 5px;
  }
}


.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>