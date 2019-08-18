<template>
  <div class="layout">
    <header class="header">
      <div class="header-inner">
        <strong>
          <!-- <g-link to="/">{{ $static.metaData.siteName }}</g-link> -->
          <g-link to="/" class="page-info">
            <span class="page-info-name">Krisztina Závecz</span>
            <span class="page-info-title">Frontend Developer</span>
          </g-link>
        </strong>
        <Social />
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
  import Social from '../components/Social.vue'

export default {
  components: {
    MainNav,
    Social
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
  box-sizing: border-box

.app-inner
  max-width: 40rem
  margin: 0 auto

.header
  background: #dfdfdf
  background: #102542
  background: #446189

.header-inner
  display: flex
  justify-content: space-between
  align-items: center
  margin-bottom: 20px
  height: 80px
  font-family: Comfortaa, sans-serif
  a
    text-decoration: none
    .page-info-name,
    .page-info-title
        color: #eee
        display: block
    .page-info-name
      font-size: 1.3rem
      text-transform: uppercase
    .page-info-title
      font-size: 0.9em
      font-size: 0.8em
      font-style: italic
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

h1
  text-align: center
  text-transform: lowercase
  font-family: Comfortaa, sans-serif

img
  max-width: 100%

</style>
