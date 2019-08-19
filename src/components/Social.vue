<template>
  <div class="social">
      <a v-for="(item, index) in iconItems" :href=item.target :key="index">
        <font-awesome :icon="item.icon"/>
      </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      iconItems: [
        {name: 'Twitter', target: "https://twitter.com/krisztizavecz", icon: ['fab', 'twitter']},
        {name: 'GitHub', target: "https://github.com/zkriszti", icon: ['fab', 'github']},
        {name: 'DevTo', target: "https://dev.to/zkriszti", icon: ['fab', 'dev']}
      ]
    }
  }
}

</script>

<style lang="stylus" scoped>
  a,
  a:visited
    color: #eee
</style>