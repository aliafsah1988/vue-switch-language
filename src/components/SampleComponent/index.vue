<template>
  <div class="sample">
    <h1>Some text that is floated !</h1>
  </div>
</template>

<script>
export default {
  name: "SampleComponent",
  props: {
    msg: String
  }
};
</script>

<style>
@import url("./style.css");
</style>
