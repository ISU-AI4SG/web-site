<template>
  <back-ground :page="page" :navMenu="navMenu" />
  <div :class="navMenu ? 'blurIn' : 'blurOut'">
    <home-page />
  </div>
</template>

<script>
import backGround from "../components/backGround.vue";
import homePage from "../pages/homePage.vue";
export default {
  name: "HomeView",
  components: { backGround, homePage },
  data() {
    return {
      page: "homePage",
      navMenu: false,
    };
  },
  provide() {
    return {
      setPage: this.setPage,
      setNavMenu: this.setNavMenu,
    };
  },
  methods: {
    setPage: function (value) {
      this.page = value;
    },
    setNavMenu: function (value) {
      this.navMenu = value;
    },
  },
};
</script>

