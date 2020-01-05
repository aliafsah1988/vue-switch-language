<template>
  <div class="home" :class="{ rtl: isRightToLeft, ltr: !isRightToLeft }">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <SampleComponent msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import SampleComponent from "@/components/SampleComponent";

export default {
  name: "home",
  components: {
    SampleComponent
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
