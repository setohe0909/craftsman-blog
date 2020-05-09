<template>
  <header>
    <nav class="container flex flex-wrap items-center justify-between py-8 mx-auto">
      <div>
        <g-link
          to="/"
          class="text-base no-underline text-black-600 hover:text-black-600 hover:no-underline"
        >
          <g-image
            src="~/assets/images/crafstamn.png"
            :alt="$static.metadata.siteName"
            class="w-48 object-fit:contain"
          />
        </g-link>
      </div>
      <div class="block lg:hidden">
        <button
          @click="toggle"
          class="flex items-center px-3 py-2 border border-gray-500 rounded hover:text-gray-600 hover:border-gray-600"
        >
          <svg
            class="w-3 h-3 current-color"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" />
          </svg>
        </button>
      </div>
      <ul
        class="items-center flex-grow w-full mt-8 font-bold tracking-wide uppercase lg:flex lg:flex-initial lg:w-auto lg:mt-0 "
        :class="expand ? 'block' : 'hidden'"
      >
        <li class="mb-6 mr-8 text-black-600 lg:mb-0">
          <g-link to="/blog" class="text-copy-primary hover:text-gray-600"
            >Blog</g-link
          >
        </li>
        <li class="mb-6 mr-8 text-gray-800 lg:mb-0">
          <g-link to="/about" class="text-copy-primary hover:text-gray-600"
            >About</g-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
  data() {
    return {
      expand: false,
    }
  },
  methods: {
    toggle() {
      this.expand = !this.expand
    },
  },
}
</script>

<style scoped></style>

<static-query>
    query {
    metadata {
    siteName
    siteUrl
    }
    }
</static-query>
