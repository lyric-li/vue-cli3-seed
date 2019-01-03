<template>
  <div id="app">
    <div id="nav">
      <div class="gitee"
        @click="toGitee">
        <svg-icon iconClass="gitee"/>
      </div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    toGitee () {
      window.open(`https://gitee.com/lyric-li/vue-cli3-seed`)
    }
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
  color: $standard-font-color;
  font-size: $font-size-m;
}
#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  a {
    margin: 0 5px;
    font-size: 16px;
    font-weight: bold;
    color: $standard-font-color;
    &:hover {
      color: $primary-light-color;
    }
    &.router-link-exact-active:hover {
      color: $primary-light-color;
    }
    &.router-link-exact-active {
      color: $primary-dark-color;
    }
  }
  .gitee {
    cursor: pointer;
  }
}
</style>
