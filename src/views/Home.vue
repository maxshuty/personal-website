<template>
  <div class="home" id="home">
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
import BIRDS from 'vanta/dist/vanta.birds.min';

export default {
  name: 'Home',
  data() {
    return {
      vantaBirds: null,
    };
  },
  created() {
    this.vantaBirds = BIRDS({
      el: '#home',
    });
  },
  mounted() {
    // TODO: Max - is this plugin accessible? If not then make it so
    new TypeIt('#pageTitle')
      .type('Professional bug writr.')
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
      .pause(300)
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
      .type(' more about me belw')
      .pause(250)
      .move(-1)
      .type('o')
      .pause(300)
      .move(2)
      .pause(250)
      .type('.')
      .pause(350)
      .type('.')
      .pause(200)
      .type('.')
      .go();
  },
  destroyed() {
    this.vantaBirds.destroy();
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>
