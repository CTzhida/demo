<template>
  <div>
    <Nav class="nav" />
    <App-Main class="appMain"/>
    <Right-Panel class="panelClass">
      <div class="user">
        <svg-icon icon-class="el-icon-bell" class-name="iconClass" />
        <label>Anastasia</label>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </div>
      <div style="margin: 20px">
        <Demo-Circle>
          <h3>$5349</h3>
          <lable>Balance</lable>
        </Demo-Circle>
      </div>
      <div class="transMenu">
        <label>Transactions</label>
        <el-dropdown>
        <span class="el-dropdown-link">
          Today<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>This Week</el-dropdown-item>
          <el-dropdown-item>This Month</el-dropdown-item>
          <el-dropdown-item>This Year</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </div>
      <ul class="itemList">
        <li v-for="item in items" :key="item.name">
          <svg-icon :icon-class="item.icon" class-name="iconClass" />
          {{ item.name }}
          <label :class="item.balance >= 0 ? 'bigger0' : 'less0'">
            {{ balanceLabel }}
          </label>
        </li>
      </ul>
      <div style="clear: both"/>
      <el-button round class="btnClass">
        Transfer Money
        <svg-icon icon-class="el-icon-right" />
      </el-button>
      <FixButton />
    </Right-Panel>
  </div>
</template>
<script>
import DemoCircle from '@/components/Circle/index1'
import FixButton from '@/components/FixButton'
import Nav from './components/Navbar'
import AppMain from './components/appMain'
import RightPanel from '@/components/RightPanel'

export default {
  components: {
    DemoCircle,
    FixButton,
    Nav,
    AppMain,
    RightPanel
  },
  data () {
    return {
      items: [
        { icon: 'Basketball', name: 'Dribbble', balance: -100, balanceLabel: '-$ 100' },
        { icon: 'adidas', name: 'Adidas Refund', balance: 230, balanceLabel: '$ 230' },
        { icon: 'adidas', name: 'Wacom LCD', balance: -3000, balanceLabel: '-$ 3000' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.maxWidth {
  max-width: calc(100vw - 300px) !important;
}
.maxheight{
  max-height: calc(100vh - 600px);
}
.nav{
  @extend .maxWidth;
  height: 60px;
}
.appMain{
  @extend .maxWidth
}
.iconClass {
  line-height: 40px;
  font-size: 20px;
}
.btnClass {
  width: 100%;
  background: #FE4D55;
  color: white;
}
.panelClass {
  .user{
    display: flex;
    justify-content: space-around;
    flex-grow: 1;
    height: 40px;
    line-height: 40px;
  }
  .transMenu {
    @extend .user;
    margin: 10px;
    justify-content: flex-start;
    label {
      color: #888;
      flex-grow: 1;
    }
    /deep/ .el-dropdown {
      color: #666;
      justify-content: flex-end;
    }
  }
  .itemList {
    display: inline;
    line-height: 60px;
    padding: 0;
    color: #bbb;
    list-style-type:none;
    .iconClass {
      color: #FE4D55;
    }
    .bigger0 {
      float: right;
      color: #117E9D;
    }
    .less0 {
      float: right;
      color: #FE4D55;
    }
  }
}
</style>
