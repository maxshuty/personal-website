<template>
  <div>
    <div>
      <!-- TODO: Max P - move this to a component with a more dynamic nature -->
      <router-link to="/">Terminal</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/experience">Experience</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view />
  </div>
</template>

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
