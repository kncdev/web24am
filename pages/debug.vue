<template>
  <div>
    <section ref="section1" class="animation-scroll-load">
      <div class="hero-plan-wrapper md:text-start text-center w-full max-w-[70.5rem] mx-auto flex xl:flex-row flex-col justify-between lg:gap-[8.188rem] sm:gap-[2.5rem] gap-[1.5rem] lg:p-[10.188rem_0_8rem] sm:p-[2.5rem_0] p-[1.5rem_0]">
        <div class="hero-plan-content-start w-full lg:max-w-[32.688rem] flex flex-col lg:items-start items-stretch gap-[1rem]">
            <h1 class="sm:text-[2.5rem] text-[2rem]">Creating top-tier Websites & Apps, Branding, Development, and Content services to boost your global brand impact.</h1>
            <a href="#"><div class="flex flex-nowrap md:w-[23.875rem] w-full border-[2px] border-black justify-between items-center gap-[5.5rem] md:p-[1.375rem_2.375rem_1.375rem_2.063rem] p-[1rem]"><h6 class="text-[1.5rem] font-light">View our services</h6><img :src="iconMore" alt="icon"></div></a>
        </div>
        <div class="hero-plan-content-end w-full lg:max-w-[22.875rem] flex flex-col md:items-start items-center gap-[1.5rem]">
            <div class="flex items-center gap-[1.375rem]">
                <h3 class="text-[3rem] font-normal">01</h3>
                <h3 class="text-[2rem] font-light">Web & Apps Design</h3>
            </div>
            <div class="flex items-center gap-[1.375rem]">
                <h3 class="text-[3rem] font-normal">02</h3>
                <h3 class="text-[2rem] font-light">Web Development</h3>
            </div>
            <div class="flex items-center gap-[1.375rem]">
                <h3 class="text-[3rem] font-normal">03</h3>
                <h3 class="text-[2rem] font-light">App Development</h3>
            </div>
            <div class="flex items-center gap-[1.375rem]">
                <h3 class="text-[3rem] font-normal">04</h3>
                <h3 class="text-[2rem] font-light">AI Intergration</h3>
            </div>
        </div>
      </div>
    </section>

    <section ref="section2" class="animation-scroll-load"></section>
    <section ref="section3" class="animation-scroll-load"></section>
    <section ref="section4" class="animation-scroll-load"></section>

  </div>
</template>

<script>
import iconMore from '~/assets/images/icon-more.svg'

export default {
  data() {
    return {
      iconMore: iconMore,
    }
  },
  mounted() {
    const sections = [this.$refs.section1, this.$refs.section2, this.$refs.section3, this.$refs.section4];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    sections.forEach(section => {
      observer.observe(section);
    });
  }
}
</script>

<style>
.animation-scroll-load {
  opacity: 0;
  transform: translateY(50%);
  transition: opacity .35s ease-out, transform 1s ease-out;
}

.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
