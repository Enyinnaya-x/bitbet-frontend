<script setup>
    import Slotsimage from "../assets/images/slotsimg.jpg"
    import limbo from "../assets/images/limboimg.jpg"
    import dice from "../assets/images/diceimg.jpg";
    import { Gamepad2 } from 'lucide-vue-next';
    const games = [
     { image :  Slotsimage, name : "Slots"},
    {  image : limbo, name : "Limbo"},
     { image : dice, name : "Dice"}
    ]
</script>

<template>
    <div class="kingholder w-4/5 mx-auto">
        <h2 class="font-bold text-bitPurple lg:text-3xl text-xl my-6">Featured games</h2>
        <div class=" flex flex-col gap-3 lg:flex-row items-center justify-center imgholder">
            <div class="w-80 h-52 px-4 text-center" v-for="(game, index) in games" :key="index">
                <img :src="game.image" alt="" class="w-full h-40 rounded-md object-cover">
                <div class="gamediv mt-3 flex justify-center">
                    <button class="text-bitPurple font-semibold flex items-center px-3 py-1 text-lg  bg-white rounded-lg hover:bg-bitGold active:bg-bitGold">Play {{ game.name}} <Gamepad2 class="ms-2 text-bitPurple stroke-[2.5]"/></button>
                </div>
            </div>
        </div>
    </div>
</template>