<template>
  <div>
    <div ref="cardsContainer" v-resize="handleResize">
      <Title title="Cards" sub-title="View All cards"/>
      <el-row :gutter="20">
      <el-col v-for="(card, index) in cardList" :key="card.cardNo" :xs="{span:23}" :md="{span:12}" :lg="{ span: 8 }">
        <cards :card-info="card" :color="colors[index % 2]" />
      </el-col>
      <el-col :xs="{span:23}" :lg="{ span: 8 }">
        <el-card class="box-card">
          <div class="icon-container">
            <el-button class="text-button">
              <svg-icon icon-class="el-icon-plus" class="iconClass" />
            </el-button>
          </div>
          <p style="text-align: center">Add New  Card</p>
        </el-card>
      </el-col>
     </el-row>
    </div>
    <el-row :gutter="20">
      <el-col :span="8">
        <Title title="Services" />
        <el-card class="serviceCard" :style="{ height }">
          <el-col v-for="service in serviceList" :key="service.title" :span="12">
            <Service :icon="service.icon" :title="service.title" />
          </el-col>
        </el-card>
      </el-col>
      <el-col :span="16" :style="{ height }">
        <Title title="Current" />
        <div>
          <p v-for="item in currentList" :key="item.cardNo" class="currentContainer">
            <label>{{ item.cardNo }}</label>
            <label></label>
            <label>{{ item.balance }}</label>
          </p>
        </div>
        <Title title="Saving" />
        <el-row :gutter="20">
          <el-col :span="16">
            <line-chart :chart-data="lineChartData" />
          </el-col>
          <el-col :span="8" class="textLeft summary">
            <p><span>Total:</span><span style="color: black;float: right">2000.01</span> </p>
            <p><span>This Week:</span><span style="color: black;float: right">2000.01</span> </p>
            <p><span>This Month:</span><span style="color: black;float: right">2000.01</span> </p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Cards from '@/components/Cards'
import Service from '@/components/Service'
import Title from '@/components/Title'
import LineChart from '@/components/Charts/LineChart'
export default {
  components: {
    Cards,
    Service,
    Title,
    LineChart
  },
  directives: {
    resize: {
      bind (el, binding) {
        let width = ''
        let height = ''
        function isReize () {
          const style = document.defaultView.getComputedStyle(el)
          if (width !== style.width || height !== style.height) {
            binding.value(style.height)
          }
          width = style.width
          height = style.height
        }
        el.__vueSetInterval__ = setInterval(isReize, 100)
      },
      unbind (el) {
        clearInterval(el.__vueSetInterval__)
      }
    }
  },
  data () {
    return {
      height: '100px',
      colors: ['#FE4D55', '#127E9B'],
      xAxis: {
        showSplitLine: false,
        data: ['0', '$10', '$20', '$30', '$40', '$50'],
        axisLabel: {
          interval: 0
        }
      },
      cardList: [
        { balance: 2000, cardNo: Math.random().toString().slice(0, 17).replace('.', '') },
        { balance: 2000, cardNo: Math.random().toString().slice(0, 17).replace('.', '') }
      ],
      serviceList: [
        { icon: 'Transaction', title: 'Transcation' },
        { icon: 'idea', title: 'Utility' },
        { icon: 'loans', title: 'Loans' },
        { icon: 'wallets', title: 'Deposite' },
        { icon: 'transfer', title: 'Fast Transfer' },
        { icon: 'exchange', title: 'exChange' }
      ],
      currentList: [
        { cardNo: Math.random().toString().slice(0, 17).replace('.', ''), balance: '$ 2000.01' },
        { cardNo: Math.random().toString().slice(0, 17).replace('.', ''), balance: '$ 2000.02' },
        { cardNo: Math.random().toString().slice(0, 17).replace('.', ''), balance: '$ 2000.99' }
      ],
      lineChartData: {
        actualData: [20, 35, 25, 55, 66, 87]
      }
    }
  },
  methods: {
    handleResize (value) {
      this.height = `calc(${window.innerHeight + 'px'} - ${value} - 140px)`
    }
  }
}
</script>
<style lang="scss" scoped>
.flexClass {
  display: flex;
  justify-content: center;
  align-content: center;
}
.textRight {
  text-align: right;
}
.summary {
  color: #999;
}
.box-card {
  // overflow-y: scroll;
  margin-bottom: 20px;
  border-radius: 20px;
  height: 240px;
}
.serviceCard {
  @extend .box-card;
  overflow-y: auto;
}
.currentContainer {
  @extend .flexClass;
  label {
    &:nth-of-type(1) {
      color: #999;
    }
    &:nth-of-type(2) {
      flex-grow: 1;
      margin: 0 8px;
      border-bottom: 1.5px dashed #bbb;
    }
  }
}
.icon-container {
  @extend .flexClass;
  margin: 50px 0;
}
.iconClass {
  // border-radius: 50%;
  color: #F2F2F2;
  font-size: 50px;
  border-radius: 50%;
  border: 1px dashed #ccc;
}
</style>
