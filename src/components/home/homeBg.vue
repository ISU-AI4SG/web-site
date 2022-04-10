<template>
  <div class="bg">
    <img src="../../assets/HomeAILeft.svg" class="side-img left-img" />
    <img src="../../assets/HomeAICenter.svg" class="center-img" />
    <img src="../../assets/HomeAIRight.svg" class="side-img right-img" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  color: aqua;
  position: absolute;
}
.bg {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
    text-justify: auto;

}
.side-img {
  position: absolute;
  animation-name: sides;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 5s;
  height: 100vh;
  opacity: 0.1;
  width: auto;
}
.left-img {
  left: 0;
  bottom: 0px;
}
.center-img {
  animation-name: core;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 5s;
  width: 20vw;
  margin: auto;
  opacity: 0.75;
}
.right-img {
  animation-direction: reverse;
  right: 0;
  top: 0px;
}
</style>
