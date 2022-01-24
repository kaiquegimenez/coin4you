<template>
  <div class="list">
    <div class="list__container">
      <div class="list__notification" v-if="notification.type === 'sent'">
        <div class="list__icon">
          <img src="../assets/icons/currency_exchange_red.svg" width="30px" height="30px" alt="">
        </div>
        <div>
          Você enviou <b>{{notification.valor}}KC</b> para <b>{{notification.person}}</b>
          <br>
          {{notification.description}}
        </div>
      </div>
      <div class="list__notification" v-else>
        <div class="list__icon">
          <img src="../assets/icons/currency_exchange_green.svg" width="30px" height="30px" alt="">
        </div>
        <div>
          <b>{{notification.person}}</b> te mandou <b>{{notification.valor}}KC</b>
          <br>
          {{notification.description}}
        </div>
      </div>
    </div>
    <div class="list__date">
      Enviado em 10 nov 2021
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListNotifications',
  data() {
    return {};
  },
  props: {
    notification: {
      default: {
        description: '',
        valor: 0,
        type: '',
        person: ''
      },
    },
  },
}
</script>

<style lang="scss" scoped>
  .list {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height: 80px;
    border-top: solid 10px #f5f5f5;
    cursor: pointer;

    &__container {
      display: flex;
      margin: 10px;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
    }

    &__notification {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
    }
    &__icon {
      margin-right: 10px;
    }
    
    &__date {
      font-size: 12px;
      position: absolute;
      bottom: 5px;
      left: 10px;
      color: gray;
    }
  }
</style>