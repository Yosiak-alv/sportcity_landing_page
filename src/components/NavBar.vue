<script setup>
import { ref, computed , watch} from 'vue';
import NavLink from './NavLink.vue';
import ResponsiveNavLink from './ResponsiveNavLink.vue'
import SocialIcon from './SocialIcon.vue';

const showingNavigationDropdown = ref(false);

const currentSelection = ref('');

const setCurrentSelection = (value) => {
    currentSelection.value = value
}

</script>
<template>
    <nav class="fixed w-full z-10 top-0 left-0 backdrop-blur-lg p-1">
        <!-- Primary Navigation Menu -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div class="flex justify-between h-16">
                <div class="flex">
                    <!-- Logo -->
                    <div class="shrink-0 flex items-center">
                        <a href="#home" @click="setCurrentSelection('')">
                            <img class="block h-12 w-auto fill-currenttext-gray-200" src="/src/assets/logo/Logo.png" alt="Logo"> 
                        </a>   
                    </div>

                    <!-- Navigation Links -->
                    <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        <NavLink  @click="setCurrentSelection('nosotros')" href="#nosotros" :active="(currentSelection == 'nosotros' ? true :false)">
                           Nosotros 
                        </NavLink>
                        <NavLink @click="setCurrentSelection('galeria')" href="#galeria" :active="(currentSelection == 'galeria' ? true :false)">
                            Galería
                        </NavLink>
                        <NavLink @click="setCurrentSelection('precios')" href="#precios" :active="(currentSelection == 'precios' ? true :false)">
                           Precios
                        </NavLink>
                        <NavLink @click="setCurrentSelection('contactanos')" href="#contactanos" :active="(currentSelection == 'contactanos' ? true :false)">
                           Contáctanos
                        </NavLink>
                    </div>
                </div>

                <div class="social-icon">
                    <SocialIcon src="/src/assets/calendar.svg" :alt="'C'" :isModal="true"/>
                    <SocialIcon :href="'https://www.instagram.com/sportc.sv/'" src="/src/assets/insta.svg" :alt="'In'"/>
                    <SocialIcon :href="'https://www.facebook.com/profile.php?id=100054284840887'" src="/src/assets/facebook.svg" :alt="'Fa'"/>
                </div>

                <!-- Hamburger -->
                <div class="-mr-2 flex items-center sm:hidden">
                    <button
                        @click="showingNavigationDropdown = !showingNavigationDropdown"
                        class="inline-flex items-center justify-center p-2 rounded-mdtext-gray-500 hover:text-gray-400 hover:bg-gray-900 focus:outline-none focus:bg-gray-900 focus:text-gray-400 transition duration-150 ease-in-out"
                    >
                        <svg class="h-6 w-6" stroke="currentColor" fill="white" viewBox="0 0 24 24">
                            <path
                                :class="{
                                    hidden: showingNavigationDropdown,
                                    'inline-flex': !showingNavigationDropdown,
                                }"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            <path
                                :class="{
                                    hidden: !showingNavigationDropdown,
                                    'inline-flex': showingNavigationDropdown,
                                }"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Responsive Navigation Menu -->
        <div
            :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }"
            class="sm:hidden"
        >
            <div class="pt-2 pb-3 space-y-1">
                <ResponsiveNavLink @click="setCurrentSelection('nosotros')" :href="'#nosotros'" :active="(currentSelection == 'nosotros' ? true :false)">
                    Nosotros
                </ResponsiveNavLink>
                <ResponsiveNavLink @click="setCurrentSelection('galeria')" :href="'#galeria'" :active="(currentSelection == 'galeria' ? true :false)">
                    Galeria
                </ResponsiveNavLink>
                <ResponsiveNavLink @click="setCurrentSelection('precios')" :href="'#precios'" :active="(currentSelection == 'precios' ? true :false)">
                    Precios
                </ResponsiveNavLink>
                <ResponsiveNavLink @click="setCurrentSelection('contactanos')" :href="'#contactanos'" :active="(currentSelection == 'contactanos' ? true :false)">
                    Contactanos
                </ResponsiveNavLink>
            </div>
        </div>
    </nav>
    
</template>



<style>
/* .social-icon {
  display: inline-block;
  margin-left: 14px;
} */
</style>
