<template>
  <div class="home">
    <h1 id="pageTitle"></h1>
    <div class="home__section">
      <p>Developer, tinkerer, and most of all - a father.</p>
    </div>
  </div>
</template>

<script>
import TypeIt from 'typeit';

export default {
  name: 'Home',
  mounted() {
    new TypeIt('#pageTitle')
      // eslint-disable-next-line quotes
      .type(`Hi, I'm Max.`)
      .break()
      .pause(1000)
      .type('Developer, tinkerer, and most of all - a father.')
      .go();
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;

  &__section {
  }
}
</style>
