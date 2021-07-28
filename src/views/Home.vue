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
      .pause(500)
      .move(-2)
      .type('a')
      .pause(250)
      .move(3)
      .break()
      .pause(1000)
      .type('Developer with a passion for accssbility')
      .move(-9)
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
