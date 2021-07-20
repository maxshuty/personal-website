<template>
  <div class="home">
    <vue-typer text="test"></vue-typer>
    <h1>Hi, I'm Max.</h1>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer';

export default {
  name: 'Home',
  components: {
    VueTyper,
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>
