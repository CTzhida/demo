<template>
  <transition :name="transitionName">
    <div :style="customStyle" class="back-to-ceiling">
       <svg-icon icon-class="chat" class-name="iconClass" />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BackToTop',
  props: {
    visibilityHeight: {
      type: Number,
      default: 400
    },
    backPosition: {
      type: Number,
      default: 0
    },
    customStyle: {
      type: Object,
      default: function () {
        return {
          right: '30px',
          bottom: '30px',
          width: '40px',
          height: '40px',
          'border-radius': '10px',
          'line-height': '45px',
          background: '#0e7C97'
        }
      }
    },
    transitionName: {
      type: String,
      default: 'fade'
    }
  },
  data () {
    return {
      visible: false,
      interval: null,
      isMoving: false
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.back-to-ceiling {
  position: fixed;
  display: inline-block;
  text-align: center;
  cursor: pointer;
}

.iconClass {
  color: white;
  line-height: 40px;
  font-size: 30px;
}
</style>
