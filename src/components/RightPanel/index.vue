<template>
  <div ref="rightPanel" class="rightPanel-container">
    <div class="rightPanel-background" />
    <div class="rightPanel">
      <div class="rightPanel-items">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightPanel',
  props: {
    clickNotClose: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
    theme () {
      return this.$store.state.settings.theme
    }
  },
  mounted () {
    this.insertToBody()
  },
  beforeDestroy () {
    const elx = this.$refs.rightPanel
    elx.remove()
  },
  methods: {
    insertToBody () {
      const elx = this.$refs.rightPanel
      const body = document.querySelector('body')
      body.insertBefore(elx, body.firstChild)
    }
  }
}
</script>

<style>
.showRightPanel {
  overflow: hidden;
  position: relative;
  width: calc(100% - 15px);
}
</style>

<style lang="scss" scoped>
.rightPanel-background {
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
}

.rightPanel {
  width: 100%;
  max-width: 260px;
  border-radius: 40px 0 0 40px;
  height: 100%;
  max-height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, .3);
  transition: all .25s cubic-bezier(.7, .3, .1, 1);
  transform: translate(0);
  background: #fff;
  z-index: 100;
  .rightPanel-items {
    padding: 40px 0 0 10px;
  }
}
</style>
