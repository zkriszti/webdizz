<template>
  <Layout>
    <h1>Blog</h1>
    <div class="post-item-container">
      <div v-for="edge in $page.posts.edges" :key="edge.node.id" class="post-item">
        <!-- {{ edge.node.id }} -->
        <g-link :to="edge.node.path" class="post-link">
          <div class="post-item-inner-top">
            <g-image v-if="edge.node.blog_image_path" :src="edge.node.blog_image_path" class="post-image" width="120"/>
            <div class="post-date"><span>{{ edge.node.date }}</span></div>
          </div>
          <div class="post-item-inner-title">{{ edge.node.title }}</div>
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost {
    edges {
      node {
        path
        title
        date
        blog_image_path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Blog'
  }
}

</script>

<style lang="stylus" scoped>
.post-item-container
  @media screen and (min-width: 768px)
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 20px

.post-item
  margin-bottom: 30px

.post-item-inner-top
  position: relative

.post-date
  background: rgba(240,240,240,0.5)
  position: absolute
  bottom: 0
  right: 0
  padding: 6px 12px
  border-radius: 8px 0 0 0px
  font-weight: bold
  color: #cecece
  display: flex
  align-items: center

.post-date span
  display: block

.post-link
  text-decoration: none
  display: block
  &:visited
    color: #444

.post-image
  display: block
</style>
