<template>
  <div class="body">
    <div class="container-image">
    </div>
    <div class="container-login">
      <input class="input" placeholder="E-mail" type="text" v-model="email">
      <input class="input" placeholder="Senha" type="password" v-model="password">
      <button class="button" @click="login()">Entrar</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      login() {
        axios.post('https://back-coin.herokuapp.com/login', {email: this.email, senha: this.password})
          .then((res) => {
            if(res.data.success) {
              console.log(res.data.user)
              localStorage.setItem('token', res.data.user.token);
              localStorage.setItem('user',  JSON.stringify(res.data.user))
              this.$router.push('home');
            } else {
              console.log(res.data.message);
            }
          }).catch((err) => {
            console.log(err)
          })
      }
    }
  }
</script>


<style lang="scss" scoped>
  .body {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: #f3be1148 url('../assets/images/background_login.jpg') no-repeat;
  }
  .input {
    border-radius: 5px;
    border: 1px solid gray;
    height: 20px;
  }
  .button {
    background-color: #F3C011;
    color: white;
    border: 1px solid #F3C011;
    border-radius: 25px;
    height: 30px;
  }
  .container-login {
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60%;
    border-radius: 20px 20px 0px 0px;
  }
  .container-image {
    position: relative;
    width: 100%;
    height: 40%;
  }
</style>