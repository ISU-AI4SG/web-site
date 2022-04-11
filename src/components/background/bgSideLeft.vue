<template>
  <img :src="require('@/assets/SideRight.svg')" class="bg" />
</template>

<style scoped>
img {
  animation: side 25s infinite linear;
  bottom: -60vw;
  left: -140vw;
}
@media (orientation: portrait) {
  img {
    bottom: -60vh;
    left: -140vh;
  }
}
</style>
