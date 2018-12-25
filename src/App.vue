<template>
  <div id="app">
    <Hero />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/early">Early Days</router-link> |
      <router-link to="/prime">Prime Time</router-link> |
      <router-link to="/golden">Golden Years</router-link>
    </div>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'app',
  components: {
    Hero,
    Footer,
  },
};
</script>

<style lang="scss">
html,body {
  margin: 0;
  padding: 0;
  background-color: #353535;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  max-width: 880px;
  margin: 0 auto;
}
#nav {
  padding: 30px;
  padding-bottom: 12px;
  border-bottom: 1px solid white;
  a {
    font-weight: bold;
    color: #DDDDDD;
    text-decoration: none;
    padding: 0 12px;
    &:hover {
      color: #AAFFAA;
    }
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.content {
  min-height: 400px;
  margin-top: 32px;

  h1 {
    font-size: 24px;
  }
}
</style>
