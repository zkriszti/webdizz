<template>
  <picture>
    <source v-for="(bp, index) in breakpointsMaxWidth" :key=index
    :media="`(max-width: ${bp}px)`"
    :srcset="`https://res.cloudinary.com/zkriszti/f_auto,q_70,w_${bp}${imgURL} 1x,
      https://res.cloudinary.com/zkriszti/f_auto,q_70,w_${bp*2}${imgURL} 2x,
      https://res.cloudinary.com/zkriszti/f_auto,q_70,w_${bp*3}${imgURL} 3x `">
    <img :src="`https://res.cloudinary.com/zkriszti/f_auto,q_70,c_fill,w_${breakpointsMaxWidth[breakpointsMaxWidth.length-1]}${imgURL}`" />
    </picture>
</template>

<script>
export default {
  // img URL formats example:
  // /v1577547327/noemi/n1_vm8nwp.jpg
  props: {
    breakpointsMaxWidth: {
      type: Array,
      default: () => {
        return [450, 768, 1024, 1920]
      }
    },
    imgURL: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
