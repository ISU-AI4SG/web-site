<template>
  <div :class="side == 'r' ? 'r' : side == 'l' ? 'l' : 'b'">
    <span>
      <slot />
    </span>
    <hr />
  </div>
</template>

<script>
export default {
  props: ["side"],
};
</script>

<style scoped>
div {
  width: fit-content;
  text-align: center;
  align-content: center;
  position: fixed;
}
span {
  color: #fff;
  cursor: pointer;
}
hr {
  width: 0px;
  height: 20px;
  margin: auto;
}
.r {
  right: 0px;
  top: 50%;
  transform: rotate(-90deg) translate(0, 75%);
}
.l {
  left: 0px;
  top: 50%;
  transform: rotate(90deg) translate(0, 75%);
}
.b {
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -5%);
}
@media (orientation: portrait) {
  div{
    display: none;
  }
}
</style>
