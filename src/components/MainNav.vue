<template>
  <div>
    <nav class="nav">
      <g-link class="nav__link" v-for="(item, index) in inactivePages" :to="item.target" :key="index">
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
        {name: 'Blog', target: "/blog"},
        //{name: 'Main', target: "/"}
      ]
    }
  },

  computed: {
    inactivePages() {return this.menuItems.filter(i => i.target !== this.$route.path)}
  }

}

</script>
