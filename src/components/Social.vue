<template>
  <div class="social">
      <a v-for="(item, index) in iconItems" :href=item.target :key="index" :aria-label=item.aria>
        <font-awesome :icon="item.icon"/>
      </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      iconItems: [
        {
          name: 'Twitter',
          target: "https://twitter.com/krisztizavecz",
          icon: ['fab', 'twitter'],
          aria: 'follow me on twitter'
        },
        {
          name: 'GitHub',
          target: "https://github.com/zkriszti",
          icon: ['fab', 'github'],
          aria: 'my github account'
        },
        {
          name: 'DevTo',
          target: "https://dev.to/zkriszti",
          icon: ['fab', 'dev'],
          aria: 'follow me on dev.to'
        }
      ]
    }
  }
}

</script>

<style lang="stylus" scoped>
  a
    margin-right: 10px
  a svg
    max-width: 18px;
  a path
  a:visited path
    fill: #eee
</style>