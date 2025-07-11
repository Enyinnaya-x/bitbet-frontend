<script setup>
import { ArrowBigLeftDash } from 'lucide-vue-next';
</script>

<template>
    <div class="holder overflow-y-hidden h-screen bg-bitGold flex justify-center m-auto items-center">
        <main class="mt-5 bg-bitPurple rounded-xl p-8 lg:w-3/5 w-11/12 h-4/5 mx-auto">
            <div class="signuptext text-center">
                <h1 class="text-4xl font-bold text-white">Forgot Password?</h1>
                <div class="smallmessage flex mt-4 items-center justify-center">
                    <small class="font-bold">Let's help you get a new password😉✨</small>
                </div>
            </div>
            <form action="" class="lg:w-2/4 w-11/12 mx-auto mt-4">
                <div class="details flex flex-col mb-4">
                    <label for="" class="font-semibold px-4">Email</label>
                    <input type="email" class="px-2 border-y-gray border-y-2 border-x-2 border-x-gray rounded-full focus:border-x-bitGold focus:border-y-bitGold focus:outline-none h-12" placeholder="Enter your email">
                </div>
                <div class="btndiv mb-4">
                    <button class="bg-bitGold font-bold rounded-full px-3 py-2 w-full">Send OTP!</button>
                </div>
                <div class="backdiv mt-4 flex items-center justify-center bg-bitGold font-bold rounded-full px-3 py-2 w-full">
                    <ArrowBigLeftDash /><router-link to="/">Back</router-link>
                </div>
            </form>
        </main>
    </div>
</template>