<template>
  <div class="home">
    <div class="home__wrapper">
        <div class="home__body">

          <TheTemplate/>
        </div>
    </div>
  </div>
</template>

<script>
import TheTemplate from "@/components/home/TheTemplate.vue"

export default {
  name: "TheHome",

  components:{
    TheTemplate
  }
};
</script>