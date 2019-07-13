<template>
  <Layout>
    <h2>{{ $page.post.title }}</h2>
    <div class="date-meta-container">
      <p class='meta-message'>{{ $page.post.meta_message }}</p>
      <p>{{ $page.post.date }}</p>
    </div>
    <g-image :src=" $page.post.blog_image_path " width="480"/>
    <p class='image-credit'>{{ $page.post.blog_image_credit }}</p>
    <div v-html="$page.post.content"/>
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
.date-meta-container
  display: flex
  justify-content: space-between
  font-size: 0.8rem

.image-credit
  color: #999
  font-size: 0.8rem
  text-align: right

.meta-message
  font-style: italic
  color: #999

pre
  background: #eeeeee
  padding: 8px 10px

</style>

