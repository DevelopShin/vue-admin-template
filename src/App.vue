<template>
  <div id="app">
    <router-link to="/">Dash-board</router-link>
    <router-link to="/grid-system">grid-board</router-link>
  </div>
  <router-view />
</template>

<script>
  export default {
    name: "App",
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
