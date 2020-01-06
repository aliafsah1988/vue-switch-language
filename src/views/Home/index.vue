<template>
  <div class="home">
    <img class="main-image" src="../../assets/background.png" />
    <SampleComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import SampleComponent from "@/components/SampleComponent";

export default {
  name: "home",
  components: {
    SampleComponent
  }
};
</script>

<style lang="scss" scoped>
@import url("./style.scss");
</style>
