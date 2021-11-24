<template>
  <div>
    <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hiddenshadow-lg">
      <a :href="`/posts/${id}`" class="flex flex-wrap no-underline hover:no-underline">
        <img :src="thumbnail" :class="`${thumbnailFormat(tail)} w-full rounded-t pb-6`" />
        <p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
        <div class="w-full font-bold text-xl text-gray-900 px-6">{{ title }}</div>
        <p class="text-gray-800 font-serif text-base px-6 mb-5">{{ description }}</p>
      </a>
    </div>
    <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
      <div class="flex items-center justify-between">
        <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" :src="userImg" alt="Avatar of Author" tabindex="0" />
        <p class="text-gray-600 text-xs md:text-sm">{{ timeToRead }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  props: ["id", "title", "description", "thumbnail", "userImg", "timeToRead", "tail"],
  data() {
    return {

    };
  },

  methods: {
    thumbnailFormat(tail) {
      return tail === '1/3' ? 'h-64' : 'h-full';
    }
  }
};
</script>

<style></style>
