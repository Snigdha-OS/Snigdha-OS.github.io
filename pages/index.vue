<template>
  	<main v-if="!loading" id="hello">

    	<!-- gradients -->
    	<div class="css-blurry-gradient-blue"></div>
    	<div class="css-blurry-gradient-green"></div>

		<section class="hero">
		
			<div class="head">
				<span class="mb-12">
					<h2>greetings,</h2>
				</span>
				<h1>{{ config.dev.name }}</h1>
        <span class="diple flex">
          >&nbsp;
				<h2 class="line-1 anim-typewriter max-w-fit"> {{ config.dev.role }} </h2>
        </span>
			</div>

			<div id="info">
				<span class="action">
					<!-- // complete the game to continue
					 or skip to see about "Snigdha OS" -->
				</span>
				<span :class="{hide: isMobile}">
					# source code can be found on, do follow us on github
				</span>
				<span>#!/usr/bin/python</span>
				<span :class="{hide: !isMobile}">
					# source code:<br>
					# follow us on github
				</span>
				<p class="code mb-2">
					<!-- <span class="identifier">
						const
					</span> -->
					<span class="variable-name">
						github
					</span>
					<span class="operator">
						=
					</span>
					<a class="string" :href="'https://github.com/' + config.public.dev.contacts.social.github.user">
						"https://github.com/{{ config.public.dev.contacts.social.github.user }}"
					</a>
				</p>
				<p class="mb-4"></p>
				<span :class="{hide: isMobile}">
					# click on the link to download snigdha os iso file
				</span>
				<span :class="{hide: !isMobile}">
					# it is recommended to download the <b>ISO</b> file on PC
				</span>
				<p class="code">
					<!-- <span class="identifier">
						const
					</span> -->
					<span class="variable-name">
						download
					</span>
					<span class="operator">
						=
					</span>
					<a class="string" :href="'https://download.com/' + config.public.dev.contacts.social.download.user">
						"https://download.com/{{ config.public.dev.contacts.social.download.user }}"
					</a>
				</p>
				<p class="mb-6"></p>
				<span :class="{hide: isMobile}">
					# having problem with installation?
				</span>
				<span :class="{hide: !isMobile}">
					# having problem with installation?
				</span>
				<p class="code">
					<!-- <span class="identifier">
						const
					</span> -->
					<span class="variable-name">
						documentation
					</span>
					<span class="operator">
						=
					</span>
					<a class="string" :href="'https://download.com/' + config.public.dev.contacts.social.download.user">
						"https://download.com/{{ config.public.dev.contacts.social.download.user }}"
					</a>
				</p>
			</div>
		</section>

		<section data-aos="fade-up" class="game" v-if="!isMobile">
			<SnakeGame />
		</section>

	</main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const config = useRuntimeConfig()

const isMobile = ref(false)
const loading = ref(false)

onMounted(() => {
  if (window.innerWidth <= 1024) isMobile.value = true
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

function handleResize() {
  if (window.innerWidth <= 1024) {
    isMobile.value = true
  } else {
    isMobile.value = false
  }
}
</script>

<style scoped>
#hello {
  display: flex;
  height: 100%;
  width: 100%;
  flex: 1 1 auto;
  padding-left: 275px;
  overflow: hidden;
}
.hero {
	width: 100%;
	justify-content: center;
	
}
.game {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: center;
/* 	align-items: center; */
	z-index: 20;
}

#hello .hero {
	display: flex;
	flex-direction: column;
	/* display: grid;
	grid-template-columns: repeat(12, minmax(0, 1fr)); */
	margin: 0rem;
}


#hello .head span {
  font-size: 18px;
  line-height: 1;
  color: #E5E9F0;
  font-family: 'Fira Code Retina';
}

#hello .head h1 {
  font-size: 58px;
  line-height: 1;
  color: #E5E9F0;
  font-family: 'Fira Code Bold';
  padding-top: 1rem; /* 16px */
  padding-bottom: 1rem; /* 16px */
}

#hello .head h2, #hello .head .diple {
  font-size: 32px;
  line-height: 1;
  color: #FF416C;
  font-family: 'Fira Code Retina';
}

.head {
  padding-bottom: 3rem;
}

#info {
	display: flex;
	flex-direction: column;
}

#info > span {
  font-size: 14px;
  line-height: 1;
  color: #607B96;
  font-family: 'Fira Code Medium';
  padding-bottom: 1rem; /* 16px */
}

.code {
  font-family: 'Fira Code Medium';
  color: #E5E9F0;
}

.code .identifier {
  color: #FF416C;
}

.code .variable-name {
  color: #43D9AD;
}

.code .operator {
  color: white;
}

.code .string {
  color: #E99287;
  text-decoration-line: underline;
  text-underline-offset: 4px;
}

#info {
	padding-block: 2.5rem;
}

#info .action {
	display: flex
}

.hide {
  display: none;
}

.css-blurry-gradient-blue {
  position: fixed;
  bottom: 25%;
  right: 5%;
  width: 300px;
  height: 300px;
	border-radius: 0% 0% 50% 50%;
  rotate: 10deg;
	filter: blur(70px);
  background: radial-gradient(circle at 50% 50%,rgba(255, 127, 83, 1), rgba(76, 0, 255, 0));
  opacity: 0.5;
  z-index: 10;
}

.css-blurry-gradient-green {
  position: absolute;
  top: 20%;
  right: 30%;
  width: 300px;
  height: 300px;
	border-radius: 0% 50% 0% 50%;
	filter: blur(70px);
  background: radial-gradient(circle at 50% 50%,rgba(255, 127, 83, 1), rgba(76, 0, 255, 0));
  opacity: 0.5;
  z-index: 10;
}

#info {
  font-size: 16px;
}

/* Typewrite Animation */

.line-1 {
    width: fit-content;
    border-right: 3px solid rgba(255,255,255,.75);
    white-space: nowrap;
    overflow: hidden;
    padding-right: 2px;
}

.anim-typewriter{
    animation: typewriter 3.5s steps(40) 1s 1 normal both,
    blinkTextCursor 800ms steps(40) infinite normal;
}

@keyframes typewriter{
  from{width: 0;}
  to{width: 100%;}
}

@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}


/* mobile */
@media (max-width: 768px) {

	#hello {
		padding-left: 0;
	}

	#hello .hero {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 1.75rem; /* 28px */
	}
	.head {
		padding-top: 4rem; /* 40px */
	}

	#hello .head h2, #hello .head .diple {
		font-size: 20px;
		color: #43D9AD;
	}
	
	#info .action {
		display: none;
	}

}

/* tablet */
@media (min-width: 768px) and (max-width: 1024px) {
	#hello {
		padding-left: 0;
	}
	#hello .hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 1.75rem; /* 28px */
	}
	.head {
		padding-top: 4rem; /* 40px */
	}

}

@media (min-width: 1024px) and (max-width: 1320px) {
	#hello {
		padding-left: 135px;
	}
}


/* LG */

@media (min-width: 1024px) {

  .css-blurry-gradient-blue {
    position: fixed;
    bottom: 10%;
    right: 10%;
    width: 500px;
    height: 500px;
    opacity: 0.7;
    border-radius: 100% 50% 100% 0%;
  }

  .css-blurry-gradient-green {
    position: fixed;
    top: 10%;
    right: 35%;
    filter: blur(100px);
    rotate: 10deg;
    width: 400px;
    height: 400px;
    opacity: 0.5;
    border-radius: 100% 0% 0% 0%;
    rotate: 20deg;
  }
}

@media (min-width: 1920px){
	#hello {
		padding-left: 310px;
	}
	#hello .head h1 {
		font-size: 62px;
	}
}

</style>
