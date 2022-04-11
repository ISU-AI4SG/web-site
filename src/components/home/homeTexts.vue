<template>
  <div class="bg-core">
    <span class="t">We</span>
    <span class="m">are</span>
    <span class="b">AI4SG</span>
  </div>
</template>
<style scoped>
div {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-decoration: wavy;
}
span {
  animation: core 20s infinite linear;
  font-size: 7vh;
  margin: 1vh;
  transition: 3s;
}
span:hover {
  text-shadow: 0px 0px 1px #000, 0px 0px 10px #fff, 0px 0px 50px #900;
}
.t {
  margin-right: 20vh;
}
.m {
  margin-top: 3vh;
  margin-bottom: 5vh;
  margin-left: 20vh;
}
.b {
  animation: core2 20s infinite linear;
  margin-right: calc(20vh - 20px);
}
@media (orientation: portrait) {
  span {
    font-size: 7vw;
  }
  .t {
    margin-right: 20vw;
  }
  .m {
    margin-top: 3vw;
    margin-bottom: 5vw;
    margin-left: 30vw;
  }
  .b {
    margin-right: calc(20vw - 20px);
  }
}
</style>
