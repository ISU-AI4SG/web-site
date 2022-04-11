<template>
  <img :src="require('@/assets/SideRight.svg')" class="bg" />
</template>

<style scoped>
img{
  animation: side 25s infinite linear reverse;
  top: -60vw;
  right: -130vw;
}
@media (orientation: portrait) {
  img {
    top: -60vh;
    right: -140vh;
  }
}
</style>
