import { defineNuxtPlugin } from '#app';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('gsap', gsap);
  nuxtApp.provide('ScrollTrigger', ScrollTrigger);
});
