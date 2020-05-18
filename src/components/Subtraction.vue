<template>
  <div>
    <h3>Counter is:{{count}}</h3>
    <button>-1</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["count"])
  }
};
</script>

<style>
</style>