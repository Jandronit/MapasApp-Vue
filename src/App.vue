<template>
  
  <router-view/>

  <img src="./assets/logo.png" alt="logo vue" class="logo">
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.logo {
  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;
  width: 5rem;
  height: 5rem;
}
</style>
