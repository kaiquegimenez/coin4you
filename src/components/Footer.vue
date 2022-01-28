<template>
  <div class="footer">
      <div @click="goTo('Home')" class="footer__icon">
        <img src="../assets/icons/home.svg" width="30px" height="30px" alt="">
        Início
      </div>
      <!-- <div class="footer__icon">
        <img src="../assets/icons/wallet.svg" width="30px" height="30px" alt="">
        Carteira
      </div> -->
      <div class="footer__pay">
        <img src="../assets/icons/kriptocoin.svg" alt="">
        Pagar
      </div>
      <!-- <div @click="goTo('Notifications')" class="footer__icon">
        <img src="../assets/icons/notifications.svg" width="30px" height="30px" alt="">
        Notificações
      </div> -->
      <div @click="goTo('Store')" class="footer__icon">
        <img src="../assets/icons/store.svg" width="30px" height="30px" alt="">
        Loja
      </div>  
    </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    goTo(name) {
      this.$router.push({ name });
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: space-around;
    border-top: solid 1px #80808047;
    background-color: white;
    margin: 0px auto;
    z-index: 2;
  }

  .footer__pay {
    transform: translateY(-13px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.8em;
    color: #f3c011;
    z-index: 0;
  }
  .footer__icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.8em;
    color: #f3c011;
    width: 20%;
  }
</style>