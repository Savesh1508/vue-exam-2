<script setup></script>
<template>
  <footer class="footer pb-12 pt-8 bg-white">
    <div class="container flex gap-8 flex-wrap justify-center">
      <div class="w-72">
        <header class="header">About us</header>
        <div class="mt-3">
          <router-link to="#" class="block header-text">Out team</router-link>
          <router-link to="#" class="header-text">Job opening</router-link>
        </div>
      </div>
      <div class="w-72">
        <header class="header">For Users</header>
        <div class="mt-3">
          <router-link to="#" class="block header-text">Contact us</router-link>
          <router-link to="#" class="header-text">Questions</router-link>
        </div>
      </div>
      <div class="w-64">
        <header class="header">For Business</header>
        <div class="mt-3">
          <router-link to="#" class="block header-text">Sell there</router-link>
          <router-link to="#" class="header-text">Seller cabinet</router-link>
        </div>
      </div>
      <div class="w-72">
        <header class="header">Download</header>
        <div class="mt-4 flex items-center">
          <i class="bx bxl-apple"></i>
          <span class="text-sm pr-5">AppStore</span>
          <i class="bx bxl-play-store text-blue-500"></i>
          <span class="text-sm">Google Play</span>
        </div>
      </div>

      <div class="w-72">
        <header class="header">Our social media</header>
        <div class="mt-4 flex items-center">
          <i class="bx bx1 bxl-instagram-alt text-pink-500 mx-1"></i>
          <i class="bx bx1 bxl-telegram mx-1"></i>
          <i class="bx bx1 bxl-youtube text-red-700 mx-2"></i>
          <i class="bx bx1 bxl-facebook-square text-blue-900 mx-2"></i>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.bx {
  font-size: 30px;
}

.bx1 {
  font-size: 37px;
}

.bxl-telegram {
  color: rgb(94, 167, 251);
}
</style>
