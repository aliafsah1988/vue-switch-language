<template>
  <select
    name="languages"
    id="lang-select"
    @change="handleChange"
    v-model="selected"
  >
    <option v-for="(option, index) in options" :key="index" :value="option">{{
      option
    }}</option>
  </select>
</template>

<script>
export default {
  name: "SimpleSelectLanguage",
  mounted() {
    const lang = this.$store.getters.language.title;
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] === lang) {
        this.selected = this.options[i];
        return;
      }
    }
  },
  computed: {
    language() {
      return this.$store.getters.language;
    }
  },
  methods: {
    handleChange(event) {
      const lang = event.target.value;
      this.$store.dispatch("setLanguage", lang);
      // reload with new language in url
      let routeParams = this.$route.params;
      routeParams.lang = lang;
      this.$router.push({
        name: this.$route.name,
        params: routeParams
      });
      this.$router.go(0);
    }
  },
  data() {
    return {
      selected: "en",
      options: ["en", "fa"]
    };
  }
};
</script>

<style>
@import url("./style.scss");
</style>
