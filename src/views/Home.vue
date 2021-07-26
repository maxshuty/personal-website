<template>
  <div class="home">
    <h1 id="pageTitle" />
  </div>
</template>

<script>
import TypeIt from 'typeit';

export default {
  name: 'Home',
  mounted() {
    // TODO: Max - is this plugin accessible? If not then make it so
    new TypeIt('#pageTitle')
      // eslint-disable-next-line quotes
      .type(`Hi, I'm Mx!`)
      .break()
      .pause(1000)
      .type('Developer. Tinkerer. Dad joke teller.')
      .pause(1500)
      .type('Learn more about me below')
      .go();
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>
