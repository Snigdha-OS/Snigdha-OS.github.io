<template>
    <footer class='flex md:justify-between border-top text-menu-text font-fira_retina'>

        <!-- social icons -->
        
        <div class="w-full flex justify-between md:justify-start">
            <span id="social-title" class="h-full flex justify-center items-center border-right px-5">
                social:
            </span>
            <div id="social-icons" class="flex">
                <NuxtLink :to="social.twitter.url + social.twitter.user" target="_blank" class="flex justify-center items-center">
                    <img src="/icons/social/twitter.svg"/>
                </NuxtLink>
                <NuxtLink :to="social.facebook.url + social.facebook.user" target="_blank" class="flex justify-center items-center">
                    <img src="/icons/social/facebook.svg"/>
                </NuxtLink>
                
                <!-- <span class="flex mx-50 justify-center items-center">Snigdha OS</span> -->
                <NuxtLink :to="social.github.url + social.github.user" target="_blank" class="flex md:hidden justify-center items-center">
                <img src="/icons/social/github.svg"/>
            </NuxtLink>
            
            </div>
        </div>
        <!-- <div class="w-full inline justify-center md:justify-center items-center">Snigdha OS</div> -->

        <!-- github user -->
        <NuxtLink :to="social.github.url + social.github.user" target="_blank" class="md:flex items-center px-10 border-left">
            @{{ social.github.user }}
            <img src="/icons/social/github.svg"/>
        </NuxtLink>

    </footer>
</template>

<style>

footer {
    height: 40px;
    min-height: 40px;
    font-size: 14px;
}

footer a:hover {
    background-color: #1e2d3d74;
}

#social-icons > a {
    border-right: 0px solid #1E2D3D;
    height: 100%;
    width: 50px;
 }

#social-icons > a > img {
    width: 1.25rem; /* 20px */
    height: 1.25rem; /* 20px */
    /* margin: auto; */
    opacity: 1;
}

footer > a > img {
    width: 1.25rem; /* 20px */
    height: 1.25rem; /* 20px */
    /* margin-left: 0.5rem; 8px */
  }

#social-icons > a:hover img {
    opacity: 1;
    color: #FF416C;
}

@media (max-width: 768px) {

    #social-title {
        border-right: none;
    }

    #social-icons > a {
        border-right: none;
        border-left: 1px solid #1E2D3D;
    }

    #social-icons > a > img {
        width: 1.5rem; /* 20px */
        height: 1.5rem; /* 20px */
  }
}

</style>

<script>
export default {
    name: 'AppFooter',
    data() {
        return {
          route: this.$route.path,
        }
    },
    setup() {
        return {
            social: useRuntimeConfig().dev.contacts.social
        }
    },
}
</script>
