<template>
  <div class="home">
    <h1 ref="pageTitle">Hi, I'm Max.</h1>
    <div class="home__section">
      <p>Developer, tinkerer, and most of all - a father.</p>
    </div>
  </div>
</template>

<script>
import TypeIt from 'typeit';

export default {
  name: 'Home',
  created() {
    // eslint-disable-next-line no-new
    new TypeIt(this.$refs.pageTitle, {
      // eslint-disable-next-line quotes
      strings: `Hi, I'm Max.`,
    }).go();
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
