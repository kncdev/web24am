// middleware/redirectTo404.global.js
export default defineNuxtRouteMiddleware((to) => {
  const currentYear = new Date().getFullYear();
  
  // Cek apakah sudah di halaman 404 atau bukan
  if (currentYear >= 2025 && to.path !== '/404') {
    return navigateTo('/404');
  }
});
