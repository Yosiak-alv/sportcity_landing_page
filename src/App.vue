<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import Gallery from './components/sections/Gallery.vue';
import ContactUs from './components/sections/ContactUs.vue';
import Hero from './components/sections/Hero.vue';
import AboutUs from './components/sections/AboutUs.vue';
import Pricing from './components/sections/Pricing.vue';
/* import { ref, onMounted} from 'vue';

const currentSection = ref('');

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.intersectionRatio > 0){
                currentSection.value = entry.target.getAttribute('id');
            }
        },
        {
            rootMargin:'0px 0px -90px 0px',
        });
    });
    document.querySelectorAll('div h2').forEach((section) => observer.observe(section));
});
 */

</script>

<template>
    <div class="bg-gray-900">
        <NavBar />
        <Hero id="home" :key="0"/>
        <AboutUs id="nosotros" :key="1"/>
        <Gallery id="galeria" :key="2"/>
        <Pricing id="precios" class="mt-6" :key="3"/>
        <ContactUs id="contactanos" :key="4"/>
        <Footer :key="5"/>
    </div>
</template>

<style>
    
</style>
