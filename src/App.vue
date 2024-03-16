<template>
  <div class="wrapper">
    <div class="content">
      <the-header></the-header>
      <router-view class="page" />
      <the-footer></the-footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>