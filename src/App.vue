<template>
  <div>
    <div>
      <navbar-comp />
    </div>
    <router-view />
  </div>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
