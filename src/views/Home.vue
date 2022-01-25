<template>
  <div>
    <Header />
    <div class="search">
      <Search />
    </div>
    <div class="user">
      <div class="user__infos">
        <div class="user__image">
          <img src="../assets/images/foto.jpg" alt="" />
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
      />
    </div>
    <Footer />
    <Dialog :person="person" @close="showModal = false" v-if="showModal"/>
  </div>
</template>

<script>
import Dialog from '../components/Dialog.vue'
import ListPersons from "../components/ListPersons.vue";
import Footer from "../components/Footer.vue";
import Search from "../components/Search.vue";
import Header from "../components/Header.vue";
import api from "../api";
export default {
  components: {
    ListPersons,
    Footer,
    Search,
    Header,
    Dialog
  },
  data() {
    return {
      persons: [],
      user: {},
      showModal: false,
      person: {}
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user") || "");
    this.getUser();
    this.getListUsers();
  },
  methods: {
    getUser() {
      return api.get("https://back-coin.herokuapp.com/users")
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
    openDialog(person) {
      this.person = person
      this.showModal = true
    },
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

.body-container {
  height: calc(75vh - 50px);
  overflow: auto;
}
</style>