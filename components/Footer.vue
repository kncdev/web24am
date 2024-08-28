<template>
    <div class="bg-[#FFFCEF] lg:p-0 p-[0_1.5rem]">
        <div class="footer-wrapper text-center w-full max-w-[70.5rem] mx-auto flex flex-col justify-between lg:gap-[5rem] sm:gap-[2.5rem] gap-[1.5rem] lg:p-[6.5rem_0] sm:p-[2.5rem_0] p-[1.5rem_0]">
            <div class="footer-content-start w-full flex flex-col items-center sm:gap-[2rem] gap-[1.5rem]">
                <img :src="logo" alt="" class="mt-[3.188rem] max-w-[11.688rem]">
                <div class="flex sm:flex-row flex-col gap-[2rem] px-[0.625rem]">
                    <a href="/" class="text-[1rem] leading-[150%]">Home</a>
                    <a href="#" class="text-[1rem] leading-[150%]">Services</a>
                    <a href="#" class="text-[1rem] leading-[150%]">Portfolio</a>
                    <a href="#" class="text-[1rem] leading-[150%]">Case Studies</a>
                    <a href="#" class="text-[1rem] leading-[150%]">Contact</a>
                </div>
            </div>
            <div class="footer-content-end w-full flex flex-col items-center sm:gap-[2rem] gap-[1.5rem]">
                <div class="liner h-[1px] bg-[#06040A] w-full"></div>
                <div class="flex md:flex-row flex-col items-center gap-[1.5rem] justify-between w-full">
                    <p class="text-[0.875rem] leading-[150%]">© 2024 24AM Studio. All rights reserved.</p>
                    <div class="flex sm:flex-row flex-col gap-[2rem] px-[0.625rem] md:order-none order-first">
                        <a href="#" class="hover:underline transition-all text-[0.875rem] leading-[150%]">Privacy Policy</a>
                        <a href="#" class="hover:underline transition-all text-[0.875rem] leading-[150%]">Terms of Service</a>
                        <a href="#" class="hover:underline transition-all text-[0.875rem] leading-[150%]">Cookies Settings</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>

<script setup>
import logo from '~/assets/images/logo.png'

</script>
