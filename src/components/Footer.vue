<script setup>
import { Twitter, Instagram, Twitch, Trash} from 'lucide-vue-next';
const date = new Date().getFullYear();
</script>

<template>
    <footer class="mt-16 border-t-8">
        <div class="flex justify-between items-stretch px-4 mainfooter lg:flex-row flex-wrap gap-2">
            <div class="info">
                <h1 class="font-bold text-4xl text-bitGold">Bitbet</h1>
                <p class="font-semibold text-white">The future of digital casino gaming — play, win and level up your luck</p>
            </div>
            <div class="info flex flex-col gap-1 lg:mt-0 mt-5 items-start">
                <h1 class="font-bold text-2xl text-bitGold">Quick links</h1>
                <p class="font-ligth text-white  hover:text-bitRed">Leaderboard</p>
                <p class="font-ligth text-white  hover:text-bitRed">Help</p>
                <button class="font-ligth text-white font-semibold hover:text-bitRed cursor-pointer">Delete account</button>
            </div>
            <div class="info mt-5">
                <h1 class="font-bold text-2xl text-bitGold">Stay Connected</h1>
                <p class="font-ligth text-white">Join our community</p>
                <div class="socials flex justify-between mt-2  mb-3">
                    <Twitter class="text-bitGold stroke-[2.5]"/>
                    <Instagram class="text-bitGold stroke-[2.5]"/>
                    <Twitch class="text-bitGold stroke-[2.5]"/>
                </div>
            </div>
        </div>
        <div class="copyright text-center lg:w-5/6 w-full mx-auto">
            <hr>
        <p class="text-white font-light">&copy; {{ date }} Bitbet. All rights reserved</p>
        </div>
    </footer>
</template>