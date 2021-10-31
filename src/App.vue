<template>
  <div id="app">
    <router-link to="/">home</router-link>
    <router-link to="/page">page</router-link>
    <router-link to="/list">list</router-link>
    <router-link to="/biaodan">biaodan</router-link>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app a {
  margin: 0 20px;
}
</style>
