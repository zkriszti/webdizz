<template>
  <Layout>
    <h1>Blog</h1>
    <p>this is the blog page</p>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      {{ edge.node.id }}
      <span>{{ edge.node.date }}</span>
      <g-link :to="edge.node.path"> {{ edge.node.title }} </g-link>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost {
    edges {
      node {
        path
        id
        title
        date
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

<style scoped>
  span {
    background: #e6e6e6
  }
</style>
