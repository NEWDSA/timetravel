<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #2c3e50;
  width: 100%;
  height: 100%;
  // font-size: 62.5%;
  font-size: calc(100vw / 192);
}
</style>
