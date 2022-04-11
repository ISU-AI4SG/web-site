<template>
  <div class="bg" :class="navMenu ? 'menuBgIn' : 'menuBgOut'" />
  <div class="navMenu" :class="navMenu ? 'menuIn' : 'menuOut'">
    <div class="a">
      <div @click="setPage('homePage')">
        <span v-if="page == 'homePage'">*</span>Home
      </div>
      <div @click="setPage('pojePage')">
        <span v-if="page == 'pojePage'">*</span>Projects
      </div>
      <div @click="setPage('whowPage')">
        <span v-if="page == 'whowPage'">*</span>Who We Are
      </div>
      <div @click="setPage('newsPage')">
        <span v-if="page == 'newsPage'">*</span>News | Press
      </div>
      <div @click="setPage('connPage')">
        <span v-if="page == 'connPage'">*</span>Connect
      </div>
      <div @click="setPage('carePage')">
        <span v-if="page == 'carePage'">*</span>Careers
      </div>
    </div>
    <div class="con">
      <span>Twitter</span>
      <span>Instagram</span>
      <span>Facebook</span>
      <span>Linkedin</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["navMenu", "page"],
  inject:["setPage"]
};
</script>
<style scoped>
.con span {
  margin: 0px 10px;
}
.a span {
  color: blue;
  padding-top: 2px;
  width: 0px;
  left: 15vw;
  position: absolute;
}
.bg {
  width: 100vw;
  height: 100vh;
  background-color: aqua;
  opacity: 0.2;
}
.navMenu {
  z-index: 999999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.a div {
  margin: 15px 0px;
  cursor: pointer;
}
.menuIn {
  animation: menuIn 2s ease-in-out;
}
.menuOut {
  animation: menuOut 2s ease-in-out;
}
.menuBgIn {
  animation: menuBgIn 2s ease-in-out;
}
</style>
