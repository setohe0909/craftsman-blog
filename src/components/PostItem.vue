<template>
  <article>
    <div class="max-w-3xl px-6 mx-auto">
      <div class="py-8 border-b border-gray-300 sm:py-20">
        <header class="mb-8 text-center">
          <time :datetime="post.date" class="mb-2 text-xs text-gray-700 uppercase">{{
            post.date
          }}</time>
          <h2
            class="mb-1 font-sans text-3xl leading-tight black-600 sm:text-4xl sm:mb-2"
          >
            <g-link :to="`${post.path}/`" class="font-bold text-green-700 ">{{
              post.title
            }}</g-link>
          </h2>
          <p class="text-sm leading-normal text-black-600 sm:text-base">
            <span v-if="post.author"
              >by
              <g-link
                :to="`${post.author.path}/`"
                class="text-green-800 capitalize border-b border-transparent hover:border-black-600 transition-border-color"
                v-if="post.author"
                >{{ titleCase(post.author.title) }}</g-link
              ></span
            >
            <span v-if="post.categories && post.categories.length > 0">
              in
              <g-link
                :to="`${post.categories[0].path}/`"
                class="text-green-700 capitalize border-b border-transparent hover:border-black-600 transition-border-color"
                >{{ titleCase(post.categories[0].title) }}</g-link
              ></span
            >
            <span
              v-if="post.author || (post.categories && post.categories.length > 0)"
            >
              ·
            </span>
            <span class="text-gray-700">{{ post.timeToRead }} min read</span>
          </p>
        </header>
        <div
          class="text-lg leading-normal text-gray-800"
          v-html="post.summary"
        ></div>
        <div class="mt-8 mb-8">
          <g-link :to="post.path" class="font-bold uppercase text-black-600"
            >Read More</g-link
          >
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ['post'],
  methods: {
    titleCase(str) {
      return str
        .replace('-', ' ')
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')
    },
  },
}
</script>
