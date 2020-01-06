<template>
  <multiselect
    v-model="selected"
    class="multi-select-language"
    :options="options"
    :multiple="false"
    :searchable="false"
    :show-labels="false"
    @select="handleSetLanguage"
  >
    <div slot="singleLabel" slot-scope="props" class="JIMI">
      <country-flag :country="props.option.flag" />
    </div>
    <div slot="option" slot-scope="props">
      <country-flag :country="props.option.flag" />
    </div>
  </multiselect>
</template>

<script>
import Multiselect from "vue-multiselect";
import CountryFlag from "vue-country-flag";

export default {
  components: {
    Multiselect,
    CountryFlag
  },
  mounted() {
    let lang = this.$store.getters.language;
    if (lang === "fa") {
      this.selected = {
        title: "fa",
        flag: "ir"
      };
    } else
      this.selected = {
        title: "en",
        flag: "gb"
      };
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
      let newParams = this.$route.params;
      newParams.lang = lang.title;
      this.$router.push({
        name: this.$route.name,
        params: newParams
      });
      this.$router.go(0);
    },
    customLabel({ title, desc }) {
      return `${title} – ${desc}`;
    }
  },
  data() {
    return {
      selected: null,
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
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
@import url("./style.css");
</style>
