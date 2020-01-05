<template>
  <select>
    <option value="en">EN</option>
    <option value="fa">FA</option>
  </select>
</template>

<script>
export default {
  mounted() {
    this.selected = this.$store.getters.language;
  },
  computed: {
    language() {
      return this.$store.getters.language;
    }
  },
  methods: {
    handleSetLanguage(lang) {
      this.$store.dispatch("setLanguage", lang.title);
      // reload with new language in url
      let routeParams = this.$route.params;
      routeParams.lang = lang.title;
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
      options: []
    };
  }
};
</script>

<style>
@import url("./style.css");
</style>
