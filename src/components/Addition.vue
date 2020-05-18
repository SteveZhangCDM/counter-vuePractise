<template>
  <div>
    <!-- this can be deleted -->
    <h3>Counter is: {{this.$store.state.count}}</h3>
    <button @click="btnHandler">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    btnHandler() {
      this.$store.commit("add");
    }
  }
};
</script>

<style>
</style>