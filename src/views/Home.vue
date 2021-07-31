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
      .type('e')
      .pause(250)
      .move(10)
      .type('.')
      .break()
      .break()
      .pause(1500)
      .type('Lean')
      .move(-2)
      .pause(200)
      .type('r')
      .pause(250)
      .type('.')
      .pause(350)
      .type('.')
      .pause(200)
      .type('.')
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
