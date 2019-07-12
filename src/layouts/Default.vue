<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <MainNav />
    </header>
    <slot/>
  </div>
</template>

<script>
  import MainNav from '../components/MainNav.vue'

export default {
  components: {
    MainNav
  }
}
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="stylus">

body
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
  margin:0
  padding:0
  line-height: 1.5
  color: #444

.layout
  max-width: 760px
  margin: 0 auto
  padding-left: 20px
  padding-right: 20px

.header
  display: flex
  justify-content: space-between
  align-items: center
  margin-bottom: 20px
  height: 80px
  font-family: Comfortaa, sans-serif
  a
    text-decoration: none
    text-transform: lowercase
    &:visited
      color: #444
    &.nav__link
      margin-left: 20px
      padding: 6px 12px
      border-radius: 4px
      background: #eee

img
  max-width: 100%

pre, p code
  background: #eeeeee
  padding: 8px 10px

</style>
