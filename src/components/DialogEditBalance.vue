<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <h3>Editar Saldo Usuário</h3>
            </slot>
          </div>
          <div class="modal-body">
            Saldo:
            <input class="input" type="text" placeholder="Saldo" v-model="balance">
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button class="button button__cancel" @click="$emit('close')">
                Cancelar
              </button>
              <button class="button button__confirm" @click="editBalance()">
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
  name:'Dialog',
  props: {
    data: {},
  },
  data() {
    return {
      balance: 0,
    }
  },
  mounted() {
    this.email = this.$props.data.id;
    this.balance = this.$props.data.saldo;
  },
  methods: {
    editBalance(){
      return api.put("https://back-coin.herokuapp.com/adm/users/coins", {id: this.$props.data.id, saldo: this.balance})
        .then((res) => {
          if (res.data.success) {
            console.log(res.data.message)
            this.$emit('close')
            this.$emit('confirmEdit')
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 10px;
  .input {
    border: 1px solid rgba(0, 0, 0, 0.425);
    height: 20px;
    padding: 5px;
    border-radius: 5px;
    margin: 5px 0;
    width: calc(100% - 11px);
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