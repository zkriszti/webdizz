<template>
  <Layout>
    <article>
      <h2>{{ $page.post.title }}</h2>
      <h3 v-if="$page.post.subtitle"><font-awesome :icon="['fas', 'angle-double-right']" /><span>{{ $page.post.subtitle }}</span></h3>
      <div class="date-meta-container">
        <p class='meta-message'>{{ $page.post.meta_message }}</p>
        <p>{{ $page.post.date }}</p>
      </div>
      <g-image :src=" $page.post.blog_image_path " width="480" :alt=" $page.post.blog_image_alt "/>
      <p class='img-credit'>{{ $page.post.blog_image_credit }}</p>
      <div v-html="$page.post.content"/>
    </article>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    subtitle
    content
    date
    blog_image_path
    blog_image_credit
    blog_image_alt
    post_lg
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

<style lang="stylus">
h3
  color: #777
  font-weight: normal
  display: flex
  align-items: center

h3 svg
  fill: #777
  margin-right: 10px

.date-meta-container
  display: flex
  justify-content: space-between
  font-size: 0.8rem

.img-credit
.inline-img-credit
a.inline-img-credit:visited
  color: #999
  font-size: 0.8rem
  text-align: right
  text-decoration: none

.meta-message
  font-style: italic
  color: #999

pre
  background: #eeeeee
  padding: 8px 10px

.bordered-img
  border: 1px solid rgb(119,119,119)
  border-radius: 5px

li:not(:last-child)
  margin-bottom: 12px

</style>

