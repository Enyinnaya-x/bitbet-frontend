<script setup>
import Navbar from '../components/Navbar.vue';
import Gamecard from '../components/Gamecard.vue';
import Footer from '../components/Footer.vue';
import Heroimg2 from '../assets/images/herosectionimage2.png'


</script>

<template>
  <div  class="bg-bitPurple">
    <Navbar/>
    <main>
      <div class="textdiv absolute text-center" style="left: 39%; top: 34%;">
        <h1 class="text-white font-bold lg:text-4xl text-2xl">Play & Win Big</h1>
      </div>
      <div class="lg:w-2/4 w-11/12 mx-auto mt-8">
        <img :src="Heroimg2" class="object-cover w-full rounded-lg mx-auto"  style="height: 350px;" alt="">
      </div>
    </main>
    <div class="mt-9">
      <Gamecard/>
    </div>
    <Footer/>
  </div>
  </template>