<template>
  <div id="app">
    <div id="nav">
      <svg-icon iconClass="github"/>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-alert>'"></code>
        below
      </p>
      <el-alert
        title="Element is successfully added to this project"
        type="success"
        show-icon>
      </el-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  text-align: center;
  color: $standard-font-color;
  font-size: $font-size-m;
}
#nav {
  padding: 30px;
  a {
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
}
</style>
