<template>
  <div class="sample">
    <h1 :class="{ rtl: isRightToLeft, ltr: !isRightToLeft }">
      {{ $t("title") }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "SampleComponent",
  props: {
    msg: String
  },
  data() {
    return {
      isRightToLeft: this.$store.getters.isRightToLeft
    };
  }
};
</script>

<style>
@import url("./style.css");
</style>
