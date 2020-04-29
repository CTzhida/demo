<template>
  <div id="circle" style="width: 100%;height: 300px"></div>
</template>
<script>
import echarts from 'echarts'
export default {
  props: {
    title: {
      type: String,
      default: 'Balances'
    }
  },
  data () {
    return {}
  },
  mounted () {
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      series: [
        {
          color: ['#F8F8F8', '#12223C', '#FC2A33', '#207C91'],
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: true,
              color: '#000',
              position: 'center',
              formatter: this.title,
              fontSize: 12,
              fontWeight: '200'
            }
          },
          emphasis: {
            label: {
              show: false,
              fontSize: '30',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 25 },
            { value: 25 },
            { value: 25 },
            { value: 25 }
          ]
        }
      ]
    }
    const charts = echarts.init(document.getElementById('circle'))
    charts.setOption(option)
  }
}
</script>
