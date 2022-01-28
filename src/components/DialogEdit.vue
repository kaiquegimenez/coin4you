<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <h3>{{title}}</h3>
            </slot>
          </div>
          <div v-if="type === 'user'" class="modal-body">
            E-mail:
            <input class="input" type="text" placeholder="E-mail" v-model="email">
            Nome:
            <input class="input" type="text" placeholder="Nome" v-model="nameUser">
            Senha:
            <input class="input" type="password" placeholder="Senha" v-model="password">
          </div>

          <div v-else class="modal-body">
            Nome:
            <input class="input" type="text" placeholder="Nome do Produto" v-model="nameProduct">
            Valor:
            <input class="input" type="number" placeholder="Valor do Produto" v-model="value">
            Descrição:
            <input class="input" type="text" placeholder="Descrição do Produto" v-model="description">
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="button button__cancel" @click="$emit('close')">
                Cancelar
              </button>
              <button class="button button__confirm" @click="type === 'user' ? editPerson() : editProduct()">
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
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }

  },
  data() {
    return {
      email: '',
      nameUser:'',
      password: '',
      nameProduct: '',
      value: 0,
      description: '',
    }
  },
  mounted() {
    if(this.$props.type === 'user'){
      this.email = this.$props.data.email;
      this.nameUser = this.$props.data.nome;
    } else {
      this.nameProduct = this.$props.data.nome;
      this.value = this.$props.data.valor;
      this.description = this.$props.data.descricao;
    }
    console.log(this.$props.data)
  },
  methods: {
    editProduct(){
      return api.put("https://back-coin.herokuapp.com/adm/product", {id: this.$props.data.id, nome: this.nameProduct, valor: this.value, descricao: this.description})
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
    editPerson(){
      const id = this.$props.data.id
      return api.put("https://back-coin.herokuapp.com/users", {id, nome: this.nameUser, senha: this.password, email: this.email})
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
  height: 50%;
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