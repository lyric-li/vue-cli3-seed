<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="tip">
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

<style lang="scss" scoped>
.about {
  .tip {
    p {
      text-align: left;
    }
  }
}
</style>
