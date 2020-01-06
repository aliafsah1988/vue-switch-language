<template>
  <div class="header">
    <div class="main">
      <SimpleSelectLanguage />
      <VueSelectLanguage />
    </div>
  </div>
</template>

<script>
import SimpleSelectLanguage from "@/components/SimpleSelectLanguage";
import VueSelectLanguage from "@/components/VueSelectLanguage";

export default {
  name: "Header",
  components: {
    SimpleSelectLanguage,
    VueSelectLanguage
  }
};
</script>

<style>
@import url("./style.scss");
</style>
