<script setup>
    import Card from '../Card.vue';
</script>

<template>
    <Card class="steps">
        <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between p-4 step-bx">
            <div class="text-center">
                <h3 class="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight ">
                    How it <span class="text-green-600">Works?</span>
                </h3>
            </div>
            <div class="mt-20 step-bx">
                <ul class="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10">

                    <li class=" bg-gray-100 p-5 pb-10 text-center">
                        <div class="flex flex-col items-center">
                            <div class="flex-shrink-0 relative top-0 -mt-16">
                                <div
                                    class="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                    1
                                </div>
                            </div>
                            <div class="mt-4">
                                <h4 class="text-lg leading-6 font-semibold text-gray-900">Headline</h4>
                                <p class="mt-2 text-base leading-6 text-gray-500">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class=" bg-gray-100 p-5 pb-10 text-center">
                        <div class="flex flex-col items-center">
                            <div class="flex-shrink-0 relative top-0 -mt-16">
                                <div
                                    class="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                    2
                                </div>
                            </div>
                            <div class="mt-4">
                                <h4 class="text-lg leading-6 font-semibold text-gray-900">Headline</h4>
                                <p class="mt-2 text-base leading-6 text-gray-500">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class=" bg-gray-100 p-5 pb-10 text-center">
                        <div class="flex flex-col items-center">
                            <div class="flex-shrink-0 relative top-0 -mt-16">
                                <div
                                    class="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                    3
                                </div>
                            </div>
                            <div class="mt-4">
                                <h4 class="text-lg leading-6 font-semibold text-gray-900">Headline</h4>
                                <p class="mt-2 text-base leading-6 text-gray-500">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </Card>
    
</template>
<style>
.steps {
  padding: 0 0 50px 0;
  position: relative;
  background: rgb(17,24,39);
  background: linear-gradient(90deg, rgba(17,24,39,1) 0%, rgba(25,25,36,1) 68%);
}
.step-bx {
  background: rgb(31,41,55);
  background: linear-gradient(90deg, rgba(31,41,55,1) 0%, rgba(31,41,55,1) 68%);
  border-radius: 64px;
  text-align: center;
  padding: 60px 50px;
  margin-top: -120px;
}
</style>