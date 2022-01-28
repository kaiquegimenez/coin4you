<template>
  <div class="header">
    <div class="container-header">
      <div class="logo">
        <img class="icon" src="../assets/icons/coin.svg" alt="" />
        | coin4you
      </div>
      <div v-if="$route.name === 'Home'" @click="$emit('openMenu')">
        <img src="../assets/icons/menu.svg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang="scss" scoped>
  .header {
    display: flex;
    width: 100%;
    height: 5vh;
    background-color: #f3c011;
    justify-content: center;
  }
  .logo {
    display: flex;
    color: white;
    font-size: 20px;
  }
  .container-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
  }
  .icon {
    margin-right: 5px;
  }
</style>