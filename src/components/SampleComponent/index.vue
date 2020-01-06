<template>
  <div class="sample">
    <h1 :class="{ rtl: isRightToLeft, ltr: !isRightToLeft }">
      {{ $t("title") }}
    </h1>
    <div :class="{ rtl: isRightToLeft, ltr: !isRightToLeft }">
      {{ $t("text") }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SampleComponent",
  data() {
    return {
      isRightToLeft: this.$store.getters.isRightToLeft
    };
  }
};
</script>

<style>
@import url("./style.scss");
</style>
