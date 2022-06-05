<template>
  <Layout>
    <h1>About me</h1>
    <p class="entree">I'm a Frontend Developer living in the beautiful city of Budapest, Hungary.</p>
    <div>
      <div class="about-me">
        <g-image alt="Krisztina Závecz" src="../../uploads/krisztizavecz.png" width="135" />
        <ul class="likes-list">
          <li><span>I love creating. I find joy in revealing pieces of knowledge I haven't had before.</span></li>
          <li><span>I love the feeling of finally resolving a bug. :)</span></li>
          <li><span>I love CSS.</span></li>
        </ul>
      </div>
      <div class="tech-current">
        <p>My current technology stack includes daily work with the following technologies:</p>
        <ul>
          <li>Responsive frontend solutions: HTML5 - CSS3 - native JavaScript</li>
          <li>Vue.JS</li>
        </ul>
        <p>I have data visualisation experience using...</p>
        <ul>
          <li>canvas</li>
          <li>svg</li>
          <li>d3.js</li>
        </ul>
      </div>
      <div class="tech-legacy">
        <p>For the records, I also have prior experience with:</p>
        <ul>
          <li>frontend work for PHP-based (WordPress) backends</li>
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
  border-radius: 6px
  background: #eee
  padding: 6px 12px
  box-shadow: 2px 2px 5px 0px #44618999
  @media screen and (min-width: 400px)
    display: grid
    grid-template-columns: 135px auto
  @media screen and (min-width: 568px)
    align-items: center

.entree
  text-align: center

.likes-list
  /* list-style-type: '\2764 \FE0F' */
  /* list-style-type: '\1F497' */
  /* list-style-image: url("../../uploads/icons8-heart.svg" ) */
  list-style-type: none

li
  padding-left: 20px
  margin-bottom: 8px

.likes-list li
  display: flex

.likes-list span
  align-self: center

.likes-list li:before
  content: ''
  display: block
  min-width: 30px
  min-height: 30px
  background-image: url("../../uploads/icons8-heart.svg")
  background-repeat: no-repeat
  margin-right: 15px

</style>
