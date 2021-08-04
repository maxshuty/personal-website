<template>
  <div class="home">
    <h1
      class="home__titleContainer"
      aria-label="Hi, I'm Max! Professional bug writer and developer with a passion for accessibility. Dad joke teller. Learn more about me below..."
    >
      <span aria-hidden="true" id="pageTitle" />
    </h1>
  </div>
</template>

<script>
import TypeIt from 'typeit';

export default {
  name: 'Home',
  mounted() {
    // TODO: Max - is this plugin accessible? If not then make it so
    new TypeIt('#pageTitle')
      .type('Professional bug writer.')
      .pause(500)
      .delete(24)
      .pause(1000)
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
      .move(2)
      .type('i')
      .pause(300)
      .move(6)
      .type('.')
      .break()
      .type('Dad joke teller.')
      .break()
      .break()
      .pause(1500)
      .type('Lean')
      .move(-1)
      .pause(200)
      .type('r')
      .move(2)
      .type(' more about me below')
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
