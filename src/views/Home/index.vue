<template>
  <div class="home">
    <img class="main-image" src="@/assets/background.png" />
    <SampleComponent />
  </div>
</template>

<script>
import SampleComponent from "@/components/SimpleSelectLanguage";

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
