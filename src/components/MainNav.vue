<template>
  <div>
    <nav class="nav">
      <g-link class="nav__link" v-for="(item, index) in menuItems" :to="item.target" :key="index">
        {{ item.name }}
      </g-link>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
        {name: 'Blog', target: "/blog"}
      ]
    }
  }
}

</script>

<style lang="stylus" scoped>

</style>