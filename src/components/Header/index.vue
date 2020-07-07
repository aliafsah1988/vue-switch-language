<template>
  <div class="header">
    <SimpleSelectLanguage />
    <VueSelectLanguage
      :initLang="initLang"
      :options="options"
      @changed="onChanged"
    />
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
  data() {
    return {
      initLang: this.$store.getters.language,
      options: [
        {
          title: "en",
          flag: "gb"
        },
        {
          title: "fa",
          flag: "ir"
        }
      ]
    };
  },
  methods: {
    onChanged(langObject) {
      this.$store.dispatch("setLanguage", JSON.stringify(langObject));
      let newParams = this.$route.params;
      newParams.lang = langObject.title;
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
