<template>
  <div class="header">
    <SelectLanguage />
    <VueSelectLanguage />
  </div>
</template>

<script>
import SelectLanguage from "@/components/SelectLanguage/index.vue";
import VueSelectLanguage from "@/components/VueSelectLanguage";

export default {
  name: "Header",
  components: {
    SelectLanguage,
    VueSelectLanguage
  }
};
</script>

<style>
@import url("./style.css");
</style>
