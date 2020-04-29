<template>
  <div class="nav-container">
    <img :src="logo" class="logo-img"/>
      <el-menu :collapse-transition="false" mode="horizontal" class="menu-container" >
        <Menu-Item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
      <el-input class="input" placeholder="search...">
        <svg-icon slot="suffix" icon-class="search" class-name="icon-class" />
      </el-input>
  </div>
</template>

<script>
import MenuItem from './menuItem'
import routes from '@/router/modules'
import logo from '@/assets/logo.png'

export default {
  components: { MenuItem },
  data () {
    return {
      routes,
      logo
    }
  },
  computed: {
    activeMenu () {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  },
  mounted () {
    console.log(this.logo)
  }
}
</script>
<style lang="scss" scoped>
.nav-container {
  display: flex;
  justify-content: flex-start;
  .logo-img {
    flex-grow: 1;
    max-width: 60px;
    max-height: 60px;
  }
  /deep/ .menu-container {
    flex-grow: 2;
    display: flex;
    justify-content: center;
    border: none;
  }
  .icon-class {
    margin-top: 6px;
    line-height: 28px;
    font-size: 16px;
  }
}

.input {
  max-width: 200px;
  height: 60px;
  line-height: 60px;
  flex-grow: 1;
  /deep/ .el-input__inner {
    background: #efefef;
    border: none;
    border-radius: 20px;
    box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, .15);
  }
}

</style>
