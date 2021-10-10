<template>
  <div class="terminal">
    <h1>terminal</h1>
    <div>
      <p v-for="(command, index) in previousCommands" :key="index">
        {{ `${terminalDirectoryText} ${command}` }}
      </p>
      <span class="terminal__message">{{ terminalDirectoryText }}</span>
      <input
        v-model="terminalCommand"
        @change="executeCommand"
        type="text"
        class="terminal__input"
        autofocus
      />
    </div>
  </div>
</template>

<script>
import { Commands } from '@/helpers/constants.js';

export default {
  name: 'terminal',
  data() {
    return {
      previousCommands: [],
      terminalCommand: '',
    };
  },
  computed: {
    terminalDirectoryText() {
      return 'Max-Poshusta:~ website$ ';
    },
  },
  methods: {
    executeCommand() {
      // TODO: Max P - up and dxown arrow keypresses
      if (!this.terminalCommand) {
        return;
      }

      switch (this.terminalCommand.toLowerCase()) {
        case Commands.HELP:
          break;
        case 'mk website':
          this.$router.push({ name: 'Home' });
          break;
        default:
          break;
      }

      this.previousCommands.push(this.terminalCommand);
      this.terminalCommand = '';
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
  padding: 1em;
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
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }
}
</style>
