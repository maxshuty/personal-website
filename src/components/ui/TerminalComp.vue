<template>
  <div class="terminal">
    <h1>terminal</h1>
    <div>
      <span class="terminal__message">Max-Poshusta:~ website$ </span>
      <input v-model="terminalCommand" type="text" class="terminal__input" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'terminal-comp',
  data() {
    return {
      terminalCommand: '',
    };
  },
  methods: {
    executeCommand() {
      if (!this.terminalCommand) {
        return;
      }

      switch (this.terminalCommand.toLowerCase()) {
        case 'help':
          this.$router.push({ to: '/' });
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.terminal {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  color: #ffffff;
  background-color: #3a3b3c;
  font-family: Menlo, 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

  &__input {
    // TODO: Max P - accessibilty of this input
    background: none;
    border: none;
    color: #ffffff;

    &:focus {
      outline: none;
    }
  }
}
</style>
