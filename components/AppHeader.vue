<template>
    <header id="navbar" class="w-full hidden lg:flex flex-col">
      <nav class="w-full flex justify-between border-bot">
        <github-corner url="https://github.com/Snigdha-OS/" />
          <div class="flex">
            <NuxtLink id="nav-logo" to="/">
              {{ config.dev.name }}
            </NuxtLink>

            <NuxtLink id="nav-link" to="/" :class="{ active: isActive('/') }">
              _hello
            </NuxtLink>
  
            <NuxtLink id="nav-link" to="/about-me" :class="{ active: isActive('/about-me') }">
              _about
            </NuxtLink>
  
            <NuxtLink id="nav-link" to="/projects" :class="{ active: isActive('/projects') }">
              _projects
            </NuxtLink>

            <NuxtLink id="nav-link" to="https://forum.snigdhaos.org" :class="{ active: isActive('') }">
              _forum
            </NuxtLink>
          </div>

          <NuxtLink id="nav-link-contact" to="/contact-me" :class="{ active: isActive('/contact-me')}">
            _contact
          </NuxtLink>
      
      </nav>

    </header>

</template>

<script>
import GithubCorner from './GithubCorner.vue';
export default {
  name: 'AppHeader',
  components: {
    GithubCorner
  },
  computed: {
    // Set active class to current page link
    isActive() {
      return route => this.$route.path === route;
    }
  },
  setup() {
    const config = useRuntimeConfig()

    return {
      config
    }
  },
};

</script>

<style>

#nav-link {
  border-right: 1px solid #1E2D3D;
  @apply text-menu-text font-fira_retina px-6 h-full flex items-center;
}

#nav-link-contact {
  border-left: 1px solid #1E2D3D;
  @apply text-menu-text font-fira_retina px-6 h-full flex items-center;
}

#nav-link:hover, #nav-link-contact:hover {
  background-color: #1e2d3d74;
  color: white;
}

#nav-logo {
  border-right: 1px solid #1E2D3D;
  @apply text-menu-text font-fira_bold px-6 h-full flex items-center;
}

#nav-logo:hover {
  background-color: #1e2d3d74;
  color: white;
}

#nav-link.router-link-active, #nav-link-contact.router-link-active {
  border-bottom: 2px solid #FF7F53;
  color: white;
}

#nav-logo.router-link-active {
  border-right: 1px solid #1E2D3D;
  border-bottom: none;
  @apply text-menu-text;
}

#navbar > nav {
  height: 45px;
  font-size: 15px;
  /* @apply items-center */
}

</style>

