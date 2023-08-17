

<template>
    <section class="text-gray-400 bg-gray-900 body-font relative">
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div class="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" title="map" class="absolute inset-0" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2304.6707810504504!2d-89.72409581788433!3d13.71973352676797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62b7f9be265a6f%3A0x3042ce0be8540748!2sSport%20City!5e0!3m2!1ses!2ssv!4v1692140753216!5m2!1ses!2ssv" style="filter: grayscale(1) contrast(1.2) opacity(0.16);"></iframe>
            <div class="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                <div class="lg:w-1/2 px-6">
                    
                    <h2  class="text-white text-xs font-extrabold tracking-tight">DIRECCIÓN</h2>
                    <p class="mt-1 font-light sm:text-lg">10 Avenida Norte y 5 Cale Oriente, Barrio El Angel, Sonsonate</p>
                    </div>
                    <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 class="text-white text-xs font-extrabold tracking-tight">EMAIL</h2>
                        <a class="text-green-400 leading-relaxed font-light sm:text-lg">itteamsportcity@gmail.com</a>
                        <h2 class="text-white text-xs font-extrabold tracking-tight mt-1">TELÉFONO</h2>
                        <p class="leading-relaxed font-light sm:text-lg">un telefono xd</p>
                    </div>
                </div>
            </div>
            <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 id="4" class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl text-gray-200">Contáctanos</h2>
                <p class="mb-5 font-light sm:text-lg text-gray-400">Mantengámonos en contacto.</p>
                <form ref="form" @submit.prevent="sendEmail" >
                    <div class="relative mb-4">
                        <label for="to_name" class="leading-7 font-light sm:text-lg text-gray-400">Nombre</label>
                        <input required type="text" id="to_name" name="to_name" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    </div>
                    <div class="relative mb-4">
                        <label for="from_name" class="leading-7 font-light sm:text-lg text-gray-400">Email</label>
                        <input required type="email" id="from_name" name="from_name"  class="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    </div>
                    <div class="relative mb-4">
                        <label for="message" class="leading-7 font-light sm:text-lg text-gray-400">Mensaje</label>
                        <textarea required name="message" id="message" rows="4"  class="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button type="submit" class="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Enviar</button>
                    <p class="text-xs text-gray-400 text-opacity-90 mt-3">Tu informacion esta protegida.</p>
                    
                </form>
                
            </div>
        </div>
    </section>
</template>

<script>
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('service_ytqkb8p', 'template_gv6o5z5', this.$refs.form, '3EEduLVS7PbRKUbR7')
        .then((result) => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Correo Recibido, ' + result.text,
                text: 'Atenderemos su mensaje lo mas pronto posible.',
                showConfirmButton: false,
                timer: 1500
            });
            console.log('SUCCESS!', result.text);
        }, (error) => {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'FAILED...',
                text: 'Ocurrio un error, verifique sus datos, ' + error.text,
                showConfirmButton: false,
                timer: 1500
            });
            console.log('FAILED...', error.text);
        });
    }
  }
}
</script>