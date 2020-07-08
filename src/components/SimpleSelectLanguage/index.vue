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
      this.$emit("changed", event.target.value);
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
