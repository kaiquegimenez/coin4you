<template>
  <div v-if="person.deletado_em === null" class="list">
    <div class="list__container">
      <div class="list__user-data">
        <div class="list__image">
          <img src="" alt="">
        </div>
        <div>
          {{person.nome}}
        </div>
      </div>
      <div v-if="edit">
        <button @click="editUser()" class="button button__money">
          <img src="../assets/icons/money.svg" width="24px" height="24px" alt="">
        </button>
        <button @click="deleteUser()" class="button button__delete">
          <img src="../assets/icons/delete.svg" width="24px" height="24px" alt="">
        </button>
      </div>
    </div>
    <DialogEditBalance @confirmEdit="confirmEdit" @close="showDialog = false" v-if="showDialog" :data="person"/>
  </div>
</template>

<script>
import api from '../api'
import DialogEditBalance from '../components/DialogEditBalance.vue'
export default {
  name: 'ListPersons',
  components: {
    DialogEditBalance
  },
  data() {
    return {
      showDialog: false,
    };
  },
  props: {
    person: {},
    edit: {
      default: false,
      type: Boolean
    }
  },
  mounted() {
    console.log(this.$props.person);
  },
  methods: {
    deleteUser(){
      return api.put("https://back-coin.herokuapp.com/user/delete", {id: this.person.id})
        .then((res) => {
          if (res.data.success) {
            console.log(res.data.message);
            this.$emit('getUsers');
          } else {
            console.log('Não foi possível deletar');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editUser(){
      this.showDialog = true
    },
    confirmEdit() {
      this.$emit('getUsers');
    }
  },
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
      width: calc(100% - 20px);
    }

    &__user-data {
      display: flex;
      justify-content: center;
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
    }
  }
  .button {
    margin: 5px;
    border-radius: 50%;
    &__money {
      border: 1px solid #f3c011;
      background-color: #f3c011;
    }

    &__delete {
      border: 1px solid #f3c011;
      background-color: #FFFFFF;
    }
  }
</style>