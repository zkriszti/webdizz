<template>
    <nav class="nav">
      <g-link class="nav__link" v-for="(item, index) in inactivePages" :to="item.target" :key="index">
        {{ item.name }}
      </g-link>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
        {name: 'Blog', target: "/blog"}
      ]
    }
  },

  computed: {
    inactivePages() {return this.menuItems.filter(i => i.target !== this.$route.path)}
  }

}

</script>

<style lang="stylus" scoped>
  .nav
    justify-self: end

    .nav__link
      background: #fff
      color: #446189
      font-weight: bold
      text-transform: lowercase
      margin-left: 20px
      padding: 6px 12px
      border-radius: 4px
</style>
