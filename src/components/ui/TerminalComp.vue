<template>
  <div class="terminal">
    <h1>terminal</h1>
    <div>
      <input type="text" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'terminal-comp',
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
}
</style>
