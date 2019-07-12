<template>
  <Layout>
    <h2>{{ $page.post.title }}</h2>
    <p class='meta-message'>{{ $page.post.meta_message }}</p>
    <g-image :src=" $page.post.blog_image_path " width="480"/>
    <p class='image-credit'>{{ $page.post.blog_image_credit }}</p>
    <div v-html="$page.post.content"/>
    <p>{{ $page.post.date }}</p>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
    date
    meta_message
    blog_image_path
    blog_image_credit
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>

<style lang="stylus" scoped>
  h2
    color: green
  .image-credit
    color: #999
    font-size: 0.8rem
    text-align: right
  .meta-message
    font-style: italic
    color: #999

</style>

