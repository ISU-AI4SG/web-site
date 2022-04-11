<template>
  <div class="nav" @click="setNavEvent">
    <div :class="navMenu ? 't' : ''"></div>
    <div :class="navMenu ? 'b' : ''"></div>
  </div>
</template>

<script>
export default {
  inject: ["setNavMenu"],
  props: ["navMenu"],
  methods: {
    setNavEvent: function () {
      this.setNavMenu(!this.navMenu);
    },
  },
};
</script>

<style scoped>
div {
  cursor: pointer;
}
.nav {
  z-index: 999;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
  width: 29px;
  height: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  flex-wrap: nowrap;
  flex-direction: column;
}
.nav div {
  background-color: #fff;
  width: 19px;
  height: 1px;
  margin: auto;
  transition: 1s;
}
.t {
  transform: translate(0px, 2px) rotate(45deg);
}
.b {
  transform: translate(0px, -2px) rotate(-45deg);
}
@media (orientation: landscape) {
  .nav {
    display: none;
  }
}
</style>
