<template>
  <div class="header">
    <SimpleSelectLanguage />
    <VueSelectLanguage :initLang="language" @changed="onChanged" />
  </div>
</template>

<script>
import SimpleSelectLanguage from "@/components/SimpleSelectLanguage";
import VueSelectLanguage from "vue-switch-lang";
import "vue-switch-lang/dist/vue-switch-lang.css";

export default {
  name: "Header",
  components: {
    SimpleSelectLanguage,
    VueSelectLanguage
  },
  methods: {
    onChanged(lang) {
      this.$store.dispatch("setLanguage", lang);
      // reload with new language in url
      let newParams = this.$route.params;
      newParams.lang = lang;
      this.$router.push({
        name: this.$route.name,
        params: newParams
      });
      this.$router.go(0);
    }
  }
};
</script>

<style>
@import url("./style.scss");
</style>
