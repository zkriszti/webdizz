<template>
  <Layout>
    <h1>About me</h1>
    <p>I'm a Frontend Developer living in the beautiful city of Budapest, Hungary.</p>
    <div>
      <div class="about-me">
        <g-image alt="Krisztina Závecz" src="../../uploads/krisztizavecz.png" width="135" />
        <ul class="likes-list">
          <li>I love creating. I find joy in revealing pieces of knowledge I haven't had before.</li>
          <li>I love the feeling of finally resolving a bug. :)</li>
          <li>I love CSS.</li>
        </ul>
      </div>
      <div class="tech-current">
        <p>My current technology stack includes daily work with the following technologies:</p>
        <ul>
          <li>Responsive frontend solutions - HTML5 - CSS3</li>
          <li>native Javascript</li>
          <li>Vue.JS</li>
        </ul>
      </div>
      <div class="tech-legacy">
        <p>For the records, I also have prior experience with:</p>
        <ul>
          <li>frontend work for PHP-based backends</li>
          <li>frontend work with MS SharePoint 2013 / 2016 (JSOM, unique branded layouts for large accounts, etc.)</li>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Krisztina Závecz - Frontend Development'
  }
}
</script>

<style lang="stylus" scoped>

.home-links a
  margin-right: 1rem

.about-me
    @media screen and (min-width: 400px)
      display: grid
      grid-template-columns: 135px auto

.likes-list
  list-style-type: '\2764 \FE0F'

li
  padding-left: 20px
  margin-bottom: 8px

</style>
