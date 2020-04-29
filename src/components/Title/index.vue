<template>
  <div class="title">
    <p>{{ title }}</p>
    <el-button class="text-button">{{ subTitle }}</el-button>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'title'
    },
    subTitle: {
      type: String,
      default: 'View All'
    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  display: flex;
  // justify-content: space-around;
  p {
    flex-grow: 1;
    padding-left: 8px;
    text-align: left;
  }
  .text-button {
    color: #bbb;
  }
}
</style>
