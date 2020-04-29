<template>
  <el-card class="box-card1">
    <div>
      <svg-icon :icon-class="icon" class-name="iconClass" />
    </div>
    <p style="text-align:center;color: #666">{{ title }}</p>
  </el-card>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'el-icon-eleme'
    },
    title: {
      type: String,
      default: 'title'
    }
  }
}
</script>
<style lang="scss" scoped>
.box-card1 {
  margin-bottom: 20px;
  div {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  border-radius: 20px;
  /deep/ .el-card__body {
    padding: 10px;
  }
}
.iconClass {
  color: #D2979B;
  font-size: 50px;
}
</style>
