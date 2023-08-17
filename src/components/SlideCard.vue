<script setup>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/effect-cards';
  
    // import required modules
    import { EffectCards } from 'swiper/modules';
 
    const photos = [
        '/src/assets/img/photo18.jpg',
        '/src/assets/img/photo21.jpg',
        '/src/assets/img/photo22.jpg'
    ];
</script>
<template>
    <swiper
      :effect="'cards'"
      :grabCursor="true"
      :modules="[EffectCards]"
      class="hero-swiper"
    >
      <swiper-slide  v-for=" (photo) in photos" :key="photo">
        <img class="object-cover object-center rounded" alt="hero" :src="photo">
      </swiper-slide>
    </swiper>
</template>

  