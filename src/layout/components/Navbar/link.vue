<template>
  <a v-if="isExternal(to)" class="link" :href="to" target="_blank" rel="noopener">
    <slot />
  </a>
  <router-link class="link" v-else :to="to">
    <slot />
  </router-link>
</template>
<script>
import { isExternal } from '@/utils'
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isExternal
    }
  }
}
</script>
<style lang="scss" scoped>
.link{
  text-decoration: none;
}
</style>
