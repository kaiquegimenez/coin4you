<template>
  <div>
    <Header/>
    <div class="body-container">
      <div class="input-container">
        <div class="input-email">
          <input class="input input__email" type="text" placeholder="E-mail" v-model="email">
        </div>
        <div>
          <input class="input" type="text" placeholder="Nome" v-model="name">
          <input class="input" type="password" placeholder="Senha" v-model="password">
        </div>
      </div>
      <button @click="registerNewUser()" class="button">Cadastrar</button>
      <div class="list-persons">
        <ListPersons
          v-for="(person, index) in persons"
          :key="index"
          :person="person"
          :edit="true"
          @getUsers="getListUsers()"
        />
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ListPersons from '../components/ListPersons.vue'
import api from '../api'
export default {
  components: {
    Header,
    Footer,
    ListPersons
  },
  data() {
    return {
      persons: [],
      name: '',
      password: '',
      email: '',
    }
  },
  mounted(){
    this.getListUsers()
  },
  methods: {
    getListUsers() {
      return api.get("https://back-coin.herokuapp.com/list/users")
        .then((res) => {
          if (res.status === 200) {
            this.persons = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    registerNewUser() {
      return api.post("https://back-coin.herokuapp.com/users", {nome: this.name, email: this.email, senha: this.password})
        .then((res) => {
          if (res.data.success) {
            this.getListUsers()
            console.log(res.data.message);
            this.password = '';
            this.email = '';
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
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    widows: 100vw;
    height: calc(95vh - 50px);
  }
  .input-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 15%;
  }
  .list-persons {
    height: 85%;
    overflow: auto;
  }
  .input {
    border: 1px solid rgba(0, 0, 0, 0.425);
    height: 20px;
    padding: 5px;
    border-radius: 5px;
    margin: 5px;
    width: calc(50% - 22px);
    &__email {
      width: calc(100% - 22px);
    }
  }
  .input-email {
    width: 100%;
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