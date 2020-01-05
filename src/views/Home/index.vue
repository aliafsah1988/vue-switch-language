<template>
  <div class="home" :class="{ rtl: isRightToLeft, ltr: !isRightToLeft }">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      isRightToLeft: this.$store.getters.isRightToLeft
    };
  }
};
</script>

<style>
@import url("./style.css");
</style>
