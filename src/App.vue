<template>
  <div class="wrapper">
    <div class="content">
      <div class="tatat">ararawrwar</div>
      <the-header></the-header>
      <router-view class="page" />
      <the-footer></the-footer>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss" >
@import "@/assets/scss/style";

.tatat {
  @include adaptiv-font(50, 40);
}
</style>