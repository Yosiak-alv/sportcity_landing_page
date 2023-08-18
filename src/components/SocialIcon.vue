<script setup>
import Swal from 'sweetalert2';

const props = defineProps({
    href:{
        type:String
    },
    social_name:{
        type:String,
    },
    alt:{
        type:String,
    },
    isModal:{
        type:Boolean,
        default:false
    }
});

const dates = () => {
    Swal.fire({
        icon: 'info',
        title: 'HORARIOS',
        html: 'LUNES - VIERNES : 7:00am - 8:00pm </br> SÁBADO: 8:00am - 11:00am, DOMINGO: CERRADO',
    })
}
</script>

<template>
    <div class="social mt-2">
        <div v-if="isModal">
            <button @click="dates"><img src="/src/assets/calendar.svg"  :alt="props.alt"/></button>
        </div>
        <div v-else>
            <div v-if="props.social_name === 'instagram'">
                <a :href="props.href" target='_blank' rel='noopener noreferrer'><img src="/src/assets/insta.svg"  :alt="props.alt"/></a>
            </div>
            <div v-if="props.social_name === 'facebook'">
                <a :href="props.href" target='_blank' rel='noopener noreferrer'><img src="/src/assets/facebook.svg"  :alt="props.alt"/></a>
            </div>
        </div>
    </div>
        

</template>

<style>
.social{
    display: inline-flex;
}
.social a , .social button {
  width: 42px;
  height: 42px;
  background: rgba(217, 217, 217, 0.1);
  display: inline-flex;
  border-radius: 50%;
  margin-right: 6px;
  align-items: center;
  justify-content: center;
  line-height: 1;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.social a::before ,.social button::before {
  content: "";
  width: 42px;
  height: 42px;
  position: absolute;
  background-color: #ffffff;
  border-radius: 50%;
  transform: scale(0);
  transition: 0.3s ease-in-out;
}
.social a:hover::before , .social button:hover::before {
  transform: scale(1);
}
 .social a img , .social button img{
  width: 40%;
  z-index: 1;
  transition: 0.3s ease-in-out;
}
.social a:hover img , .social button:hover img {
  filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%)
    hue-rotate(346deg) brightness(95%) contrast(86%);
}

</style>