<template>
    <div class="holder overflow-y-hidden h-screen bg-bitGold flex justify-center m-auto items-center">
        <main class="mt-5 bg-bitPurple rounded-xl p-8 lg:w-3/5 w-11/12 h-fitcontent mx-auto">
            <div class="signuptext text-center">
                <h1 class="text-4xl font-bold text-white">Sign Up</h1>
                <div class="smallmessage flex mt-4 items-center justify-center">
                    <small class="font-bold">Welcome to the Bitbet World, sign up to get started!🎉</small>
                </div>
            </div>
            <form @submit.prevent="handleSignUp()" class="lg:w-2/4 w-11/12 mx-auto mt-4">
                <div class="details flex flex-col mb-4">
                    <label for="" class="font-semibold px-4">Username</label>
                    <input type="text" class="px-2 border-y-gray border-y-2 border-x-2 border-x-gray rounded-full focus:border-x-bitGold focus:border-y-bitGold focus:outline-none h-12" placeholder="Enter a username" v-model="username" name="username">
                </div>
                <div class="details flex flex-col mb-4">
                    <label for="" class="font-semibold px-4">Email</label>
                    <input type="email" class="px-2 border-y-gray border-y-2 border-x-2 border-x-gray rounded-full focus:border-x-bitGold focus:border-y-bitGold focus:outline-none h-12" placeholder="Enter your email" v-model="email" name="email">
                </div>
                <div class="details flex flex-col mb-4">
                    <label for="" class="font-semibold px-4">Password</label>
                    <input type="password" class="px-2 border-y-gray border-y-2 border-x-2 border-x-gray rounded-full  focus:border-x-bitGold focus:border-y-bitGold focus:outline-none outline-none h-12" placeholder="Enter a password" v-model="password" name="password" id="myPass">
                </div>
                <div class="details flex flex-col mb-4">
                    <label for="" class="font-semibold px-4">Confirm Password</label>
                    <input type="password" class="px-2 border-y-gray border-y-2 border-x-2 border-x-gray rounded-full  focus:border-x-bitGold focus:border-y-bitGold focus:outline-none outline-none h-12" placeholder="Confirm your password"  v-model="conPass" id="pass2">
                    <small id="lamb" class="px-4 font-semibold text-bitRed"></small>
                </div>
                <div class="btndiv w-full mt-5">
                    <button type="submit" class="bg-bitGold font-bold rounded-full px-3 py-2 w-full">Sign Up!</button>
                </div>
                <div class="checkboxdiv text-start flex items-center my-3 px-4">
                   <span class="font-semibold">Show Password</span> <input type="checkbox" class="ms-2 w-4 h-4" @click="showPass()">
                </div>
                <div class="linkdiv mt-4 flex items-center justify-center">
                    <router-link to="/login" class="font-semibold underline">Already have an account? Login</router-link>
                </div>
            </form>
        </main>
    </div>
</template>
    <script setup>
    import {ref} from "vue";
    import { useRouter } from 'vue-router'
    const router = useRouter();
    const username = ref('');
    const email = ref('');
    const password = ref('');
    const conPass = ref('');
    async function handleSignUp() {
        const myPass = document.getElementById("myPass");
        const pass2 = document.getElementById("pass2");
        if(myPass.value == pass2.value){
            const formData = new FormData();
            formData.append("email", email.value)
            formData.append("password", password.value)
            formData.append("username", username.value)
    
         try {
            const res = await fetch("http://localhost/Bitbet/backend/auth/signup.php", {
        method: "POST",
        body: formData
         });

         const text = await res.text(); // Grab raw response
        console.log("Raw response text:", text);

        let data;
         try {
        data = JSON.parse(text);
         } catch (parseErr) {
        console.error("❌ Failed to parse JSON:", parseErr);
        alert("Server response was not valid JSON");
        return;
        }

     console.log("Parsed response:", data);

     if (data.success) {
        router.push('/home');
        } else {
        alert(data.message || 'Registration failed.');
        }

    } catch (err) {
    console.error('❌ Fetch/network error:', err);
    alert('Something went wrong!');
    }
     }else{
            document.getElementById("lamb").innerHTML = "❌Passwords do not match!"
        }
}

        function showPass(){
            const myPass = document.getElementById("myPass");
            const pass2 = document.getElementById("pass2");
            if(myPass.type == "password"){
                 myPass.type = "text"
            }else{
                myPass.type = "password"
            }
            if(pass2.type == "password"){
                 pass2.type = "text"
            }else{
                pass2.type = "password"
            }
        }
    </script>