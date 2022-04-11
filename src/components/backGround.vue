<template>
  <div>
    <nav-texts />
    <nav-but :navMenu="navMenu" />
    <popup-nav v-if="navMenu" :navMenu="navMenu" :page="page" />
    <div>
      <bg-side-left />
      <bg-center />
      <bg-side-right />
    </div>
  </div>
</template>

<script>
import navTexts from "./navTexts.vue";
import navBut from "../components/navBut.vue";
import popupNav from "../components/popupNav.vue";

import bgCenter from "./background/bgCenter.vue";
import bgSideLeft from "./background/bgSideLeft.vue";
import bgSideRight from "./background/bgSideRight.vue";

export default {
  props: ["page", "navMenu"],
  components: {
    navBut,
    navTexts,
    popupNav,
    bgSideLeft,
    bgCenter,
    bgSideRight,
  },
};
</script>
