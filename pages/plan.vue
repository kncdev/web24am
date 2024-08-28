<template>
    <div>
        <div class="bg-[#FFFCEF] lg:p-0 p-[0_1.5rem]">
            <Navbar bgColor="#FFFCEF" />
            
            <section ref="section1" class="animation-scroll-load">
            <div class="hero-plan-wrapper md:text-start text-center w-full max-w-[70.5rem] mx-auto flex xl:flex-row flex-col justify-between lg:gap-[6.188rem] sm:gap-[2.5rem] gap-[1.5rem] lg:p-[10.188rem_0_8rem] sm:p-[2.5rem_0] p-[1.5rem_0]">
                <div class="hero-plan-content-start w-full lg:max-w-[38.688rem] flex flex-col lg:items-start items-stretch gap-[1rem]">
                    <p class="sm:text-[2.5rem] text-[2rem]">Creating top-tier Websites & Apps, Branding, Development,<br>and Content services to boost your global brand impact.</p>
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
                        <span class="lg:text-[3rem] font-medium text-[2rem] leading-[120%]">Flexible & Transparent Pricing</span>
                        <p class="max-w-[27.75rem] w-full text-[1rem] leading-[150%] text-center">Streamlined all-in-one pricing for businesses entering the digital arena without the need to manage a team of engineers and designers.</p>
                    </div>
                    <div class="pricing-plan-content-end w-full flex lg:flex-row sm:flex-row md:flex-nowrap flex-wrap justify-center flex-col md:items-start items-center gap-[2rem]">
                        <div class="pricing-card text-start w-full lg:min-w-[22.188rem] max-w-[22.188rem] h-[41.313rem] hover:bg-[#FFF6FD] transition-all flex flex-col items-stretch justify-between lg:p-[2rem] p-[1rem] rounded-[1rem] border-[#06040A] border-[1px] text-[#06040A]">
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
                        <div class="pricing-card text-start w-full lg:min-w-[22.188rem] max-w-[22.188rem] h-[41.313rem] hover:bg-[#FFF6FD] transition-all flex flex-col items-stretch justify-between lg:p-[2rem] p-[1rem] rounded-[1rem] border-[#06040A] border-[1px] text-[#06040A]">
                            <div class="pricing-detail-wrapper flex flex-col lg:gap-[2rem] gap-[1rem]">
                                <div class="flex flex-col gap-[1rem]">
                                    <img :src="iconPrice2" alt="icon" class="w-[2.5rem] h-auto ms-auto">
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
                        <div class="pricing-card text-start w-full lg:min-w-[22.188rem] max-w-[22.188rem] h-[41.313rem] hover:bg-[#FFF6FD] transition-all flex flex-col items-stretch justify-between lg:p-[2rem] p-[1rem] rounded-[1rem] border-[#06040A] border-[1px] text-[#06040A]">
                            <div class="pricing-detail-wrapper flex flex-col lg:gap-[2rem] gap-[1rem]">
                                <div class="flex flex-col gap-[1rem]">
                                    <img :src="iconPrice3" alt="icon" class="w-[2.5rem] h-auto ms-auto">
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

            <section ref="section3" class="animation-scroll-load">
                <div class="faq-plan-wrapper md:text-start text-center w-full max-w-[70.5rem] mx-auto flex flex-col justify-between lg:gap-[2.5rem] gap-[1.5rem] lg:p-[9.75rem_0_7rem] sm:p-[2.5rem_0] p-[1.5rem_0]">
                    <div class="faq-plan-content-start w-full flex flex-col text-center items-center gap-[1rem]">
                        <span class="lg:text-[3rem] font-medium text-[2rem] leading-[120%]">FAQs</span>
                        <p class="max-w-[48rem] w-full text-[1rem] leading-[150%] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>
                    <div class="faq-plan-content-mid w-full flex flex-col md:items-start items-center gap-[1.5rem]">
                        <div v-for="(faq, index) in faqs" :key="index" class="faq-item border border-[#06040A] w-full overflow-hidden flex flex-col gap-4 p-4 transition-all duration-500">
                            <div class="faq-title w-full flex justify-between items-center cursor-pointer" @click="toggleFaq(index)">
                            <p class="font-bold text-lg text-[#06040A]">{{ faq.question }}</p>
                            <img :src="iconPlus" alt="Toggle FAQ" :class="{'rotate-45': isOpen[index], 'rotate-0': !isOpen[index]}" class="btn-show-faq w-8 h-8 transition-transform duration-500">
                            </div>
                            <transition name="faq-slide">
                            <div v-show="isOpen[index]" class="faq-desk text-start max-h-0 overflow-hidden transition-all duration-500 ease-linear" :class="{'max-h-[500px]': isOpen[index], 'max-h-0': !isOpen[index]}">
                                <p>{{ faq.answer }}</p>
                            </div>
                            </transition>
                        </div>
                    </div>
                    <div class="faq-plan-content-end w-full flex justify-center text-center md:items-start items-center gap-[1.5rem]">
                        <div class="flex flex-col items-center gap-[1.5rem]">
                            <span class="text-[2rem] leading-[130%] font-medium text-[#06040A]">Still have a questions?</span>
                            <p class="max-w-[48rem] w-full text-[1rem] leading-[150%] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <a href="#" class="sm:w-auto w-full"><div class="sm:w-auto w-full flex flex-nowrap border-[2px] border-black justify-center items-center md:p-[0.75rem_1.5rem] p-[1.375rem_2.375rem_1.375rem_2.063rem]"><h6 class="text-[1rem] font-normal">Contact us</h6></div></a>
                        </div>
                    </div>
                </div>
            </section>

            <section ref="section4" class="animation-scroll-load">
                <div class="testimonial-plan-wrapper md:text-start text-center w-full max-w-[70.5rem] mx-auto flex flex-col justify-between lg:gap-[2.5rem] gap-[1.5rem] lg:p-[9.75rem_0_7rem] sm:p-[2.5rem_0] p-[1.5rem_0]">
                    <div class="testimonial-plan-content-start w-full flex flex-col text-center items-center gap-[1rem]">
                        <span class="lg:text-[3rem] font-medium text-[2rem] leading-[120%]">Customer testimonials</span>
                        <p class="max-w-[35rem] w-full text-[1rem] leading-[150%] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div class="testimonial-plan-content-end w-full flex lg:flex-row sm:flex-row md:flex-nowrap flex-wrap justify-center flex-col md:items-start items-center gap-[2rem]">
                        <div class="testimonial-card text-start w-full lg:min-w-[22.188rem] hover:bg-[#FFF6FD] transition-all flex flex-col items-stretch justify-between lg:p-[2rem] p-[1rem] rounded-[1rem] border-[#06040A] border-[1px] text-[#06040A]">
                            <div class="testimonial-detail-wrapper flex flex-col lg:gap-[2rem] gap-[1rem]">  
                                <div class="flex flex-col gap-[1rem]">
                                    <p class="text-start text-[1.125rem] leading-[150%]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                                </div>
                                <div class="flex gap-[1.25rem]">
                                    <div class="img-profile-testi rounded-full overflow-hidden flex justify-center items-center w-[3.5rem] h-[3.5rem]">
                                        <img :src="imgProfile" alt="icon" class="w-full">
                                    </div>
                                    <div class="flex flex-col gap-[0.5rem]">
                                        <p class="text-[1rem] leading-[150%] font-semibold">Name Surname</p>
                                        <p class="text-[1rem] leading-[150%] font-normal">Position, Company name</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-card text-start w-full lg:min-w-[22.188rem] hover:bg-[#FFF6FD] transition-all flex flex-col items-stretch justify-between lg:p-[2rem] p-[1rem] rounded-[1rem] border-[#06040A] border-[1px] text-[#06040A]">
                            <div class="testimonial-detail-wrapper flex flex-col lg:gap-[2rem] gap-[1rem]">  
                                <div class="flex flex-col gap-[1rem]">
                                    <p class="text-start text-[1.125rem] leading-[150%]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                                </div>
                                <div class="flex gap-[1.25rem]">
                                    <div class="img-profile-testi rounded-full overflow-hidden flex justify-center items-center w-[3.5rem] h-[3.5rem]">
                                        <img :src="imgProfile" alt="icon" class="w-full">
                                    </div>
                                    <div class="flex flex-col gap-[0.5rem]">
                                        <p class="text-[1rem] leading-[150%] font-semibold">Name Surname</p>
                                        <p class="text-[1rem] leading-[150%] font-normal">Position, Company name</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-card text-start w-full lg:min-w-[22.188rem] hover:bg-[#FFF6FD] transition-all flex flex-col items-stretch justify-between lg:p-[2rem] p-[1rem] rounded-[1rem] border-[#06040A] border-[1px] text-[#06040A]">
                            <div class="testimonial-detail-wrapper flex flex-col lg:gap-[2rem] gap-[1rem]">  
                                <div class="flex flex-col gap-[1rem]">
                                    <p class="text-start text-[1.125rem] leading-[150%]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                                </div>
                                <div class="flex gap-[1.25rem]">
                                    <div class="img-profile-testi rounded-full overflow-hidden flex justify-center items-center w-[3.5rem] h-[3.5rem]">
                                        <img :src="imgProfile" alt="icon" class="w-full">
                                    </div>
                                    <div class="flex flex-col gap-[0.5rem]">
                                        <p class="text-[1rem] leading-[150%] font-semibold">Name Surname</p>
                                        <p class="text-[1rem] leading-[150%] font-normal">Position, Company name</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section ref="section5" class="animation-scroll-load">
                <div class="cta-plan-wrapper md:text-start text-center w-full max-w-[70.5rem] mx-auto flex lg:flex-row flex-col justify-between lg:gap-[2.5rem] gap-[1.5rem] lg:p-[9.75rem_0_7rem] sm:p-[2.5rem_0] p-[1.5rem_0]">
                    <div class="cta-plan-content-start w-full flex flex-col md:text-start gap-[1rem]">
                        <span class="lg:text-[3rem] font-medium text-[2rem] leading-[120%]">Ready to elevate your digital presence?</span>
                        <p class="w-full text-[1.125rem] leading-[150%] sm:text-start text-center">Let's create something extraordinary together. Contact us today and transform your vision into reality!</p>
                        <a href="#"><div class="sm:max-w-[17.438rem] w-full flex flex-nowrap border-[2px] border-black justify-between items-center md:p-[0.75rem_1.5rem] p-[1.375rem_2.375rem_1.375rem_2.063rem] mt-[1.5rem]"><span class="text-[1rem] font-normal text-center w-full">Get to know us</span></div></a>
                    </div>
                    <div class="cta-plan-content-end lg:order-none order-first w-full flex flex-col md:items-start items-center gap-[1.5rem]">
                        <div class="img-cta rounded-[1rem] overflow-hidden lg:max-w-[32.625rem] w-full h-auto">
                            <img :src="meeting" alt="" class="w-full">
                        </div>
                    </div>
                </div>
            </section>

        </div>
        <Footer />
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
import iconPlus from '~/assets/images/icon-plus.png'
import imgProfile from '~/assets/images/img-profile-testi.png'
import meeting from '~/assets/images/meeting.jpg'
import Navbar from '~/components/NavbarSticky.vue'
import Footer from '~/components/Footer.vue'

useHead({
  title: '24AM'
})

// Define reactive references
const section1 = ref(null)
const section2 = ref(null)
const section3 = ref(null)
const section4 = ref(null)
const section5 = ref(null)

// Set up Intersection Observer
onMounted(() => {
  const sections = [section1.value, section2.value, section3.value, section4.value, section5.value]
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

const faqs = ref([
  { question: "Question text goes here", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." },
  { question: "Question text goes here", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." },
  { question: "Question text goes here", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." },
  { question: "Question text goes here", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." },
  { question: "Question text goes here", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." }
])

const isOpen = ref(Array(faqs.value.length).fill(false))

const toggleFaq = (index) => {
  isOpen.value[index] = !isOpen.value[index]
}
</script>


<style scoped>

.animation-scroll-load {
  opacity: 0;
  transform: translateY(40%);
  transition: opacity .35s ease-out, transform 1s ease-out;
}

@media (max-width:991px) {
    .animation-scroll-load{
      transform: translateY(20%);
    }
}

.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>