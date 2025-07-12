<script setup>
    import Slotsimage from "../assets/images/slotsimg.jpg"
    import limbo from "../assets/images/limboimg.jpg"
    import dice from "../assets/images/diceimg.jpg";
    import { Gamepad2 } from 'lucide-vue-next';
</script>

<template>
    <div class="kingholder w-4/5 mx-auto">
        <h2 class="font-bold text-bitPurple lg:text-3xl text-xl my-6">Featured games</h2>
        <div class=" flex flex-col gap-3 lg:flex-row items-center justify-center imgholder">
            <div class="w-80 h-52 px-4 text-center">
                <img :src="Slotsimage" alt="" class="w-full h-40 rounded-md object-cover">
                <div class="gamediv mt-3 flex justify-center">
                    <button class="text-bitPurple font-semibold flex items-center px-3 py-1 text-lg  bg-white rounded-lg hover:bg-bitGold active:bg-bitGold">Play Slots <Gamepad2 class="ms-2 text-bitPurple stroke-[2.5]"/></button>
                </div>
            </div>
            <div class="w-80 h-52 px-4 text-center">
                <img :src="limbo" alt="" class="w-full h-40 rounded-md object-cover">
                <div class="gamediv mt-3 flex justify-center">
                    <router-link to="/limbo" class="text-bitPurple font-semibold flex items-center px-3 py-1 text-lg  bg-white rounded-lg hover:bg-bitGold active:bg-bitGold">Play Limbo <Gamepad2 class="ms-2 text-bitPurple stroke-[2.5]"/></router-link>
                </div>
            </div>
            <div class="w-80 h-52 px-4 text-center">
                <img :src="dice" alt="" class="w-full h-40 rounded-md object-cover">
                <div class="gamediv mt-3 flex justify-center">
                    <button class="text-bitPurple font-semibold flex items-center px-3 py-1 text-lg  bg-white rounded-lg hover:bg-bitGold active:bg-bitGold">Play Dice <Gamepad2 class="ms-2 text-bitPurple stroke-[2.5]"/></button>
                </div>
            </div>
        </div>
    </div>
</template>