<template>
  <div class="layout">
    <header class="header">
      <div class="header-inner">
        <strong>
          <!-- <g-link to="/">{{ $static.metaData.siteName }}</g-link> -->
          <g-link to="/" class="page-info">
            <p class="page-info-name">Krisztina Závecz</p>
            <p class="page-info-title">Frontend Developer</p>
          </g-link>
        </strong>
        <MainNav />
      </div>
    </header>
    <div class="app-inner">
      <slot/>
    </div>
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

.app-inner
  max-width: 760px
  margin: 0 auto

.header
  background: #dfdfdf

.header-inner
  display: flex
  justify-content: space-between
  align-items: center
  margin-bottom: 20px
  height: 80px
  font-family: Comfortaa, sans-serif
  a
    text-decoration: none
    .page-info-title
      font-size: 0.9em
    &:visited
      color: #444
    &.nav__link
      text-transform: lowercase
      margin-left: 20px
      padding: 6px 12px
      border-radius: 4px
      background: #eee

.app-inner,
.header-inner
  padding: 0 20px

img
  max-width: 100%

</style>
