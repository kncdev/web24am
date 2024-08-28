<template>
  <div class="lg:p-0 p-[0_1.5rem]">
    <Navbar />
    <div class="w-full lg:max-w-[90rem] mx-auto">
      <section ref="section1" class="animation-scroll-load lg:relative lg:overflow-hidden bg-[#fff] lg:ps-[5.75rem]">
        <div class="hero-title-mobile lg:hidden block lg:pb-[2.75rem]">
            <div class="flex flex-col sm:gap-[1.25rem] gap-[1.25rem] ">
            <div class="home-title font-serif">
              <h1 class="sm:text-[5rem] text-[2rem] text-[#333] sm:leading-[6rem] leading-[3rem] sm:font-normal font-semibold">Next-Gen Design & Development Partner.</h1>
            </div>
            <div class="home-image rounded-[1rem] overflow-hidden w-full lg:max-w-[23.438rem] lg:h-[17.438rem] h-[15.625rem]">
              <img :src="heroImg" alt="Logo" class="w-full h-auto" />
            </div>
            <div class="home-desk w-full lg:max-w-[25.75rem]">
              <p class="font-light sm:leading-[2rem] sm:text-[1.375rem] leading-[1.5rem] text-[1rem]">We create impactful digital experiences, seamlessly blending design, technology, and AI to deliver innovative solutions that elevate your brand.</p>
            </div>
            </div>
        </div>
          <div class="hero-wrapper flex flex-col">
            <div class="hero-content-start overflow-y-auto hero-title-desktop lg:block hidden lg:w-[27.063rem] bg-white lg:fixed lg:top-0 lg:left-0 lg:bottom-0 lg:z-10 lg:h-screen pb-[2rem]">
              <div class="flex flex-col gap-[1.25rem] ">
              <div class="hero-title font-serif">
                <h1 class="text-[5rem] text-[#333] leading-[6rem]">Next-Gen Design & Development Partner.</h1>
              </div>
              <div class="hero-image rounded-[1rem] overflow-hidden w-full lg:max-w-[23.438rem] h-[17.438rem]">
                <img :src="heroImg" alt="Logo" class="w-full" />
              </div>
              <div class="hero-desk w-full lg:max-w-[25.75rem]">
                <p class="font-light leading-[2rem] text-[1.375rem]">We create impactful digital experiences, seamlessly blending design, technology, and AI to deliver innovative solutions that elevate your brand.</p>
              </div>
              </div>
            </div>
            <div class="hero-content-end flex lg:flex-grow h-screen lg:ms-[29.813rem]">
              <div class="section-scroll-horizontal overflow-hidden relative">
                <div class="scroll-content flex gap-[3rem] absolute">
                  <div class="scroll-content-items w-[26.75rem]" v-for="item in items" :key="item.id">
                    <div class="flex flex-col gap-[0.5rem] w-full lg:max-w-[26.75rem]">
                      <p class="text-[1.5rem]">{{ item.title }}</p>
                      <div class="flex flex-col gap-[1rem]">
                        <div class="w-full max-w-[26.75rem] h-auto max-h-[30.75rem] overflow-hidden rounded-[1rem]">
                          <img :src="item.imgSrc" :alt="item.title" class="w-full" />
                        </div>
                        <div class="flex gap-[1.5rem]">
                          <h2 class="text-[4rem] text-[#33333340]">{{ item.index }}</h2>
                          <p class="text-[1.375rem] leading-[2rem] font-normal">{{ item.description }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="absolute flex flex-col justify-center right-[-12.126rem] top-0 bottom-0">
                    <div class="scroll-content-items">
                        <div class="flex flex-col gap-[1rem] justify-center">
                            <a href="/plan" class="w-[5.25rem] h-[5.25rem] flex justify-center items-center rounded-full border-[1px] border-[#000]"><img :src="iconMore" alt="more"></a>
                            <p>Learn More</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>  
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '~/components/Navbar.vue'
import heroImg from '~/assets/images/hero-img.png'
import product1 from '~/assets/images/product-image-1.png'
import product2 from '~/assets/images/product-image-2.png'
import product3 from '~/assets/images/product-image-3.png'
import iconMore from '~/assets/images/icon-more.svg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useHead } from '#imports'

gsap.registerPlugin(ScrollTrigger)

const items = ref([
  { id: 1, title: 'Primary Goods', imgSrc: product1, index: '01', description: 'Primary Goods is a curated publication of wellness and lifestyle products, aiming to be a growing library of modern culture and wellness.' },
  { id: 2, title: 'Tontine.ai', imgSrc: product2, index: '02', description: 'Magically simplified A/B testing for 2,400+ Shopify brands. Tontine is the #1 full-service profit optimization platform for Shopify brands.' },
  { id: 3, title: 'LVBL', imgSrc: product3, index: '03', description: 'Connecting Tennis players and allowing them to host and join games easily.' },
])

useHead({
  title: '24AM'
})

// 
const section1 = ref(null)
// const section2 = ref(null)

onMounted(() => {
  ScrollTrigger.matchMedia({

    "(min-width: 1281px)": function() {
      gsap.to(".scroll-content", {
        x: () => -(document.querySelector(".scroll-content").scrollWidth - document.querySelector(".hero-wrapper").clientWidth) * 5 + "px",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".hero-wrapper",
          pin: true,
          scrub: 1,
          end: () => "+=" + document.querySelector(".scroll-content").scrollWidth,
          markers: true,
        },
      });
    },

    "(min-width: 1024px) and (max-width: 1280px)": function() {
      gsap.to(".scroll-content", {
        x: () => -(document.querySelector(".scroll-content").scrollWidth - document.querySelector(".hero-wrapper").clientWidth) * 2.29 + "px",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".hero-wrapper",
          pin: true,
          scrub: 1,
          end: () => "+=" + document.querySelector(".scroll-content").scrollWidth,
          markers: true,
        },
      });
    },

    "(min-width: 577px) and (max-width: 991px)": function() {
      gsap.to(".scroll-content", {
        x: () => -(document.querySelector(".scroll-content").scrollWidth - document.querySelector(".hero-wrapper").clientWidth) * 1.5 + "px",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".hero-wrapper",
          pin: true,
          scrub: 1,
          end: () => "+=" + document.querySelector(".scroll-content").scrollWidth,
          markers: true,
        },
      });
    },

    "(max-width: 576px)": function() {
      gsap.to(".scroll-content", {
        x: () => -(document.querySelector(".scroll-content").scrollWidth - document.querySelector(".hero-wrapper").clientWidth) * 1.1 + "px",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".hero-wrapper",
          pin: true,
          scrub: 1,
          end: () => "+=" + document.querySelector(".scroll-content").scrollWidth,
          markers: true,
        },
      });
    },

  });

  // 
  const sections = [section1.value]
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, {
    threshold: 0.1
  })

  sections.forEach(section => {
    if (section) {
      observer.observe(section)
    }
  })
});

</script>

<style scoped>
.section-scroll-horizontal {
  height: 100%;
  width: 100%;
  padding: 2rem 0;
}

.scroll-content {
  transition: transform 0.5s ease-out;
}

/*  */

@media (max-width:991px) {
    .animation-scroll-load{
      opacity: 0;
      transition: opacity .35s ease-out, transform 1s ease-out;
    }
}

.visible {
  opacity: 1;
}
</style>
