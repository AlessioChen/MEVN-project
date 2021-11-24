<template>
  <nuxt-container>
    MENUBAR
    <a href="/">Home</a>|
    <a href="/posts">Posts</a> |
    <a href="/about">About</a>

    <div class="w-full m-0 p-0 bg-cover header-site">
      <div class="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal"></div>
    </div>
    <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-24">
      <nuxt />
    </div>
  </nuxt-container>
</template>

<style>
html {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.header-site {
  background-image: url("@/static/bg.jpeg");
  height: 60vh;
  max-height: 360px;
}
</style>