<template>
  <div id="app">
    <nav-slot></nav-slot>
    <router-view/>
  </div>
</template>

<script>
// import * from 'animate.min.css'
import navSlot from "./components/navgator/nav";
export default {
  name: "App",
  components: {
    navSlot
  }
};
</script>
<style  lang="scss">
@import "animate.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
