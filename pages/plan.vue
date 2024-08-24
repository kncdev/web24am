<template>
  <div class="bg-[#FFFCEF]">
    <Navbar bgColor="#FFFCEF" />
    
    <section ref="section1" class="animation-scroll-load">
      <div class="hero-plan-wrapper md:text-start text-center w-full max-w-[70.5rem] mx-auto flex xl:flex-row flex-col justify-between lg:gap-[8.188rem] sm:gap-[2.5rem] gap-[1.5rem] lg:p-[10.188rem_0_8rem] sm:p-[2.5rem_0] p-[1.5rem_0]">
        <div class="hero-plan-content-start w-full lg:max-w-[32.688rem] flex flex-col lg:items-start items-stretch gap-[1rem]">
            <p class="sm:text-[2.5rem] text-[2rem]">Creating top-tier Websites & Apps, Branding, Development, and Content services to boost your global brand impact.</p>
            <a href="#"><div class="flex flex-nowrap md:w-[23.875rem] w-full border-[2px] border-black justify-between items-center gap-[5.5rem] md:p-[1.375rem_2.375rem_1.375rem_2.063rem] p-[1rem]"><h6 class="text-[1.5rem] font-light">View our services</h6><img :src="iconMore" alt="icon"></div></a>
        </div>
        <div class="hero-plan-content-end w-full lg:max-w-[25.875rem] flex flex-col items-start lg:gap-[1.5rem] gap-[1rem]">
            <div class="flex items-center gap-[1.375rem]">
                <h3 class="lg:text-[3rem] text-[2rem] font-normal">01</h3>
                <p class="lg:text-[2rem] text-[1.25rem] font-light">Web & Apps Design</p>
            </div>
            <div class="flex items-center gap-[1.375rem]">
                <h3 class="lg:text-[3rem] text-[2rem] font-normal">02</h3>
                <p class="lg:text-[2rem] text-[1.25rem] font-light">Web Development</p>
            </div>
            <div class="flex items-center gap-[1.375rem]">
                <h3 class="lg:text-[3rem] text-[2rem] font-normal">03</h3>
                <p class="lg:text-[2rem] text-[1.25rem] font-light">App Development</p>
            </div>
            <div class="flex items-center gap-[1.375rem]">
                <h3 class="lg:text-[3rem] text-[2rem] font-normal">04</h3>
                <p class="lg:text-[2rem] text-[1.25rem] font-light">AI Intergration</p>
            </div>
        </div>
      </div>
    </section>

    <section ref="section2" class="animation-scroll-load">
        <div class="pricing-plan-wrapper md:text-start text-center w-full max-w-[70.5rem] mx-auto flex flex-col justify-between lg:gap-[2.5rem] gap-[1.5rem] lg:p-[9.75rem_0_7rem] sm:p-[2.5rem_0] p-[1.5rem_0] relative">
            <div class="absolute top-0 left-0 right-0"><div class="liner h-[1px] bg-[#06040A] w-full"></div></div>
            <div class="pricing-plan-content-start w-full flex flex-col text-center items-center gap-[1rem]">
                <span class="lg:text-[3rem] text-[2rem] leading-[120%]">Flexible & Transparent Pricing</span>
                <p class="max-w-[27.75rem] w-full text-[1rem] leading-[150%] text-center">Streamlined all-in-one pricing for businesses entering the digital arena without the need to manage a team of engineers and designers.</p>
            </div>
            <div class="pricing-plan-content-end w-full flex lg:flex-row sm:flex-row md:flex-nowrap flex-wrap justify-center flex-col md:items-start items-center gap-[2rem]">
                <div class="pricing-card w-full lg:min-w-[22.188rem] max-w-[22.188rem] h-[41.313rem] hover:bg-[#FFF6FD] transition-all flex flex-col items-stretch justify-between lg:p-[2rem] p-[1rem] rounded-[1rem] border-[#06040A] border-[1px] text-[#06040A]">
                    <div class="pricing-detail-wrapper flex flex-col lg:gap-[2rem] gap-[1rem]">
                        <div class="flex flex-col gap-[1rem]">
                            <img :src="iconPrice1" alt="icon" class="w-[2.5rem] h-auto ms-auto">
                            <div class="flex flex-col gap-[0.5rem]">
                                <p class="text-[1.25rem] leading-[140%] font-bold">Startup plan</p>
                                <p class="text-[1.5rem] leading-[130%] font-bold">$2599/mo</p>
                                <p class="text-[1rem] leading-[150%]"><span class="font-bold">One project at a time.</span> Doesn't mater if it is code or no-code development.</p>
                            </div>
                        </div>  
                        <div class="liner h-[1px] bg-[#06040A] w-full"></div>
                        <div class="flex flex-col gap-[1rem]">
                            <p class="text-[1rem] leading-[150%]">Includes:</p>
                            <div class="flex flex-col gap-[1rem] py-[0.5rem]">
                                <div class="list flex flex-nowrap items-center gap-[1rem]">
                                    <img :src="iconCheck" alt="icon">
                                    <p class="text-[1rem] leading-[150%]">End-to-end UI/UX Design</p>
                                </div>
                                <div class="list flex flex-nowrap items-center gap-[1rem]">
                                    <img :src="iconCheck" alt="icon">
                                    <p class="text-[1rem] leading-[150%]">Content & Copy Writing</p>
                                </div>
                                <div class="list flex flex-nowrap items-center gap-[1rem]">
                                    <img :src="iconCheck" alt="icon">
                                    <p class="text-[1rem] leading-[150%]">Webflow Development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="text-center hover:bg-[#06040A] transition-all hover:text-[#fff] text-[#333] border-[2px] border-[#06040A] p-[0.75rem]">Get Started</a>
                </div>
                <div class="pricing-card w-full lg:min-w-[22.188rem] max-w-[22.188rem] h-[41.313rem] hover:bg-[#FFF6FD] transition-all flex flex-col items-stretch justify-between lg:p-[2rem] p-[1rem] rounded-[1rem] border-[#06040A] border-[1px] text-[#06040A]">
                    <div class="pricing-detail-wrapper flex flex-col lg:gap-[2rem] gap-[1rem]">
                        <div class="flex flex-col gap-[1rem]">
                            <img :src="iconPrice1" alt="icon" class="w-[2.5rem] h-auto ms-auto">
                            <div class="flex flex-col gap-[0.5rem]">
                                <p class="text-[1.25rem] leading-[140%] font-bold">Enterprise plan</p>
                                <p class="text-[1.5rem] leading-[130%] font-bold">$4099/mo</p>
                                <p class="text-[1rem] leading-[150%]"><span class="font-bold">Two project at a time.</span> Doesn't mater if it is code or no-code development.</p>
                            </div>
                        </div>  
                        <div class="liner h-[1px] bg-[#06040A] w-full"></div>
                        <div class="flex flex-col gap-[1rem]">
                            <p class="text-[1rem] leading-[150%]">Includes:</p>
                            <div class="flex flex-col gap-[1rem] py-[0.5rem]">
                                <div class="list flex flex-nowrap items-center gap-[1rem]">
                                    <img :src="iconCheck" alt="icon">
                                    <p class="text-[1rem] leading-[150%]">End-to-end UI/UX Design</p>
                                </div>
                                <div class="list flex flex-nowrap items-center gap-[1rem]">
                                    <img :src="iconCheck" alt="icon">
                                    <p class="text-[1rem] leading-[150%]">Content & Copy Writing</p>
                                </div>
                                <div class="list flex flex-nowrap items-center gap-[1rem]">
                                    <img :src="iconCheck" alt="icon">
                                    <p class="text-[1rem] leading-[150%]">Webflow/Custom Development</p>
                                </div>
                                <div class="list flex flex-nowrap items-center gap-[1rem]">
                                    <img :src="iconCheck" alt="icon">
                                    <p class="text-[1rem] leading-[150%]">24/7 working hour & support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="text-center hover:bg-[#06040A] transition-all hover:text-[#fff] text-[#333] border-[2px] border-[#06040A] p-[0.75rem]">Get Started</a>
                </div>
                <div class="pricing-card w-full lg:min-w-[22.188rem] max-w-[22.188rem] h-[41.313rem] hover:bg-[#FFF6FD] transition-all flex flex-col items-stretch justify-between lg:p-[2rem] p-[1rem] rounded-[1rem] border-[#06040A] border-[1px] text-[#06040A]">
                    <div class="pricing-detail-wrapper flex flex-col lg:gap-[2rem] gap-[1rem]">
                        <div class="flex flex-col gap-[1rem]">
                            <img :src="iconPrice1" alt="icon" class="w-[2.5rem] h-auto ms-auto">
                            <div class="flex flex-col gap-[0.5rem]">
                                <p class="text-[1.25rem] leading-[140%] font-bold">Project Based</p>
                                <p class="text-[1.5rem] leading-[130%] font-bold">Custom Pricing</p>
                                <p class="text-[1rem] leading-[150%]"><span class="font-bold"></span>Perfect for teams who have a fixed scope of work and/or custom development project.</p>
                            </div>
                        </div>  
                        <div class="liner h-[1px] bg-[#06040A] w-full"></div>
                        <div class="flex flex-col gap-[1rem]">
                            <p class="text-[1rem] leading-[150%]">Includes:</p>
                            <div class="flex flex-col gap-[1rem] py-[0.5rem]">
                                <div class="list flex flex-nowrap items-center gap-[1rem]">
                                    <img :src="iconCheck" alt="icon">
                                    <p class="text-[1rem] leading-[150%]">Everything in Enterprise</p>
                                </div>
                                <div class="list flex flex-nowrap items-center gap-[1rem]">
                                    <img :src="iconCheck" alt="icon">
                                    <p class="text-[1rem] leading-[150%]">Architecture Planning</p>
                                </div>
                                <div class="list flex flex-nowrap items-center gap-[1rem]">
                                    <img :src="iconCheck" alt="icon">
                                    <p class="text-[1rem] leading-[150%]">Mobile App Development</p>
                                </div>
                                <div class="list flex flex-nowrap items-center gap-[1rem]">
                                    <img :src="iconCheck" alt="icon">
                                    <p class="text-[1rem] leading-[150%]">Backend Development & API Integration</p>
                                </div>
                                <div class="list flex flex-nowrap items-center gap-[1rem]">
                                    <img :src="iconCheck" alt="icon">
                                    <p class="text-[1rem] leading-[150%]">AI Intergration& Development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="text-center hover:bg-[#06040A] transition-all hover:text-[#fff] text-[#333] border-[2px] border-[#06040A] p-[0.75rem]">Get Started</a>
                </div>
            </div>
        </div>
    </section>

    <section ref="section3" class="animation-scroll-load"></section>
    <section ref="section4" class="animation-scroll-load"></section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useHead } from '#imports'
import iconMore from '~/assets/images/icon-more.svg'
import iconCheck from '~/assets/images/check.png'
import iconPrice1 from '~/assets/images/icon-price-1.png'
import iconPrice2 from '~/assets/images/icon-price-2.png'
import iconPrice3 from '~/assets/images/icon-price-3.png'
import Navbar from '~/components/NavbarSticky.vue'

useHead({
  title: '24AM'
})

// Define reactive references
const section1 = ref(null)
const section2 = ref(null)
const section3 = ref(null)
const section4 = ref(null)

// Set up Intersection Observer
onMounted(() => {
  const sections = [section1.value, section2.value, section3.value, section4.value]
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
})
</script>


<style scoped>

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