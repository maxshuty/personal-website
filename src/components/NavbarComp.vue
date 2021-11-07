<template>
  <div class="navbar">
      <router-link to="/">Terminal</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/experience">Experience</router-link> |
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  padding: 30px;
  text-align: center;
    a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
