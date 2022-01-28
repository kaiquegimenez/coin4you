<template>
  <div style="position: relative">
    <Header @openMenu="openMenu" />
    <div class="search">
      <Search />
    </div>
    <div class="user">
      <div class="user__infos">
        <div class="user__image">
          <img src="../assets/icons/person.svg" alt="" />
        </div>
        <div class="user__data">
          <span>{{ user.nome }}</span>
        </div>
      </div>
      <div class="user__balance">
        <span>Saldo em KC</span>
        <b>KC {{ user.saldo }}</b>
      </div>
    </div>
    <div class="body-container">
      <ListPersons
        @click.native="openDialog(person)"
        v-for="(person, index) in persons"
        :key="index"
        :person="person"
        :idUser="user.id"
      />
    </div>
    <transition name="slide-fade">
      <div v-if="showMenu" class="menu">
        <div class="icon-arrow" @click="showMenu = false">
          <img src="../assets/icons/arrow_black.svg" alt="" />
        </div>
        <div class="user__infos">
          <div class="user__image">
            <img src="../assets/icons/person.svg" alt="" />
          </div>
          <div class="user__data user__data--menu">
            <span>{{ user.nome }}</span>
          </div>
        </div>
        <div class="menu__balance">
          <span>Saldo em KC</span>
          <b>KC {{ user.saldo }}</b>
        </div>
        <div @click="openEditUser()" class="list list__menu">
          <div class="list__container">
            <div class="list__user-data">
              <div>
                Editar Perfil
              </div>
              <div>
                <img src="../assets/icons/arrow_right.svg" alt="" />
              </div>
            </div>
          </div>
          <div v-if="isAdmin" @click="$router.push('editUsers')" class="list__container">
            <div class="list__user-data">
              <div>
                Editar Usuários
              </div>
              <div>
                <img src="../assets/icons/arrow_right.svg" alt="" />
              </div>
            </div>
          </div>
          <div v-if="isAdmin" @click="$router.push('editProducts')" class="list__container">
            <div class="list__user-data">
              <div>
                Editar Produtos
              </div>
              <div>
                <img src="../assets/icons/arrow_right.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <Footer />
    <Dialog :userId="user.id" :person="person" @close="showModal = false" v-if="showModal" />
    <DialogEdit @confirmEdit="confirmEdit" @close="showDialogEditUser= false" v-if="showDialogEditUser" type="user" :data="user" title="Editar Usuário"/>
  </div>
</template>

<script>
import Dialog from "../components/Dialog.vue";
import ListPersons from "../components/ListPersons.vue";
import Footer from "../components/Footer.vue";
import Search from "../components/Search.vue";
import Header from "../components/Header.vue";
import DialogEdit from '../components/DialogEdit.vue'
import api from "../api";
export default {
  components: {
    ListPersons,
    Footer,
    Search,
    Header,
    Dialog,
    DialogEdit
  },
  data() {
    return {
      persons: [],
      user: {},
      showModal: false,
      person: {},
      showMenu: false,
      message: '',
      visibleAlert: false,
      showDialogEditUser: false,
      isAdmin: false,
    };
  },
  mounted() {
    this.getUser();
    this.getListUsers();
    this.isAdmin = JSON.parse(localStorage.getItem("user")).roles === 'ADM' ? true : false;
  },
  methods: {
    getUser() {
      return api
        .get("https://back-coin.herokuapp.com/users")
        .then((res) => {
          if (res.status === 200) {
            this.user = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getListUsers() {
      return api
        .get("https://back-coin.herokuapp.com/list/users")
        .then((res) => {
          if (res.status === 200) {
            this.persons = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openDialog(person) {
      this.person = person;
      this.showModal = true;
    },
    openMenu() {
      this.showMenu = true;
    },
    openEditUser() {
      this.showDialogEditUser = true;
    },
    confirmEdit() {
      this.getUser()
    }
  },
};
</script>

<style lang="scss" scoped>
.user {
  background-color: #f3c011;
  display: flex;
  justify-content: center;
  height: 20vh;
  position: relative;
}

.user__infos {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.user__image {
  background-color: #aaa;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  overflow: hidden;
  position: relative;
}

.user__image img {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.user__data {
  color: white;
  font-size: 0.8em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &--menu {
    color: black;
  }
}

.user__balance {
  font-size: 0.8em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -3vh;
  background-color: white;
  width: 50vw;
  height: 6vh;
  box-shadow: 0px 4px 5px 0px #88888817;
  border-radius: 5px;
  color: #f3c011;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(100vw);
}

.menu {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding-top: 20px;
  height: 100%;
  z-index: 2;

  &__balance {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80px;
  border-top: solid 10px #f5f5f5;
  cursor: pointer;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 20px);
    border-bottom: solid 1px #f5f5f5;
  }

  &__user-data {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  &__menu {
    margin-top: 50px;
    height: 40px;
    justify-content: flex-start;
  }
}

.icon-arrow {
  position: absolute;
  top: 10px;
  left: 10px;
}

.body-container {
  height: calc(75vh - 50px);
  overflow: auto;
}
</style>