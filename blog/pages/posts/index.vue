<template>
  <div>
    <p class="text-white font-extrabold text-3xl md:text-5xl">Posts</p>
    <PostList type="all" />
  </div>
</template>

<script>
import PostPreview from "@/components/PostPreview.vue";
import PostList from "~/components/PostList.vue";
export default {
  components: {
    PostPreview,
    PostList
  },
  data() {
    return {

    }
  }
};
</script>

<style></style>
