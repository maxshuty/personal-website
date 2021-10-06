<template>
  <div>
    <div class="home" id="vantaBirds">
      <h1
        class="home__titleContainer"
        aria-label="Hi I'm Max! Professional bug writer and developer with a passion for accessibility. Dad joke teller. Learn more about me below..."
      >
        <span aria-hidden="true" id="pageTitle" />
      </h1>
    </div>
  </div>
</template>

<script>
// TODO: Max P - move to separate JS file
import TypeIt from 'typeit';

export default {
  name: 'Home',
  data() {
    return {
      vantaBirds: null,
    };
  },
  mounted() {
    // TODO: Max P - make the Vanta instance dyanmic and able to be selected from terminal
    // ie: "mk website --background birds" or "mk website --background waves", etc...
    // TODO: Max P - move to separate JS file
    // There is a bug with the npm vanta package that prevents it from working
    // in Vue apps. So we are using a script import in the index.html instead
    // eslint-disable-next-line no-undef
    this.vantaBirds = VANTA.BIRDS({
      el: '#vantaBirds',
      mouseControls: true,
      touchControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0xffffff,
      color1: 0x828282,
      color2: 0x9ba4a4,
      birdSize: 1.7,
      wingSpan: 29.0,
      speedLimit: 2.0,
      separation: 43.0,
      alignment: 23.0,
      quantity: 3.0,
      backgroundAlpha: 0.29,
    });

    // TODO: Max P - move to separate JS file
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
      .move(-2)
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
  unmounted() {
    this.vantaBirds.destroy();
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  text-align: center;
}
</style>
