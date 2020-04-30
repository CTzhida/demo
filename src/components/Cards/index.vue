<template>
  <el-card class="box-card" :style="{'background-color': color}">
    <h6>Availabled balance</h6>
    <h3>
      {{ sign + cardInfo.balance }}
    </h3>
    <h4>
      {{ showDetail ? showCardNo : hiddenCardNo }}
      <el-button class="text-button" @click="showDetail = !showDetail">
        <svg-icon :icon-class="showDetail ? 'eye' : 'eye-open'" />
      </el-button>
    </h4>
    Monzo
  </el-card>
</template>
<script>
export default {
  props: {
    sign: {
      type: String,
      default: '$'
    },
    color: {
      type: String,
      default: ''
    },
    cardInfo: {
      type: Object,
      default: () => {
        return {
          balance: 2000,
          cardNo: '1234123412341234'
        }
      }
    }
  },
  data () {
    return {
      showDetail: false
    }
  },
  computed: {
    hiddenCardNo () {
      const str = this.cardInfo.cardNo
      return str.replace(/\d{14}(\d{2})/, '**** **** **** **$1')
    },
    showCardNo () {
      return this.cardInfo.cardNo
    }
  }
}
</script>
<style lang="scss" scoped>
.box-card {
  border-radius: 20px;
  h4{
    display: flex;
    justify-content: space-around;
  }
  h6{
    font-size: 12px;
    color: rgba($color: #555, $alpha: 0.8)
  }
}
</style>
