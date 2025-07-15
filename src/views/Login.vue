<template>
    <div class="holder overflow-y-hidden h-screen bg-bitGold flex justify-center m-auto items-center">
        <main class="mt-5 bg-bitPurple rounded-xl p-8 lg:w-3/5 w-11/12 h-3/4 mx-auto">
            <div class="signuptext text-center">
                <h1 class="text-4xl font-bold text-white">Login</h1>
                <div class="smallmessage flex mt-4 items-center justify-center">
                    <small class="font-bold">We've missed you!😃✨</small>
                </div>
            </div>
            <form @submit.prevent="handleLogin" class="lg:w-2/4 w-11/12 mx-auto mt-4">
                <div class="details flex flex-col mb-4">
                    <label for="" class="font-semibold px-4">Email</label>
                    <input type="email" class="px-2 border-y-gray border-y-2 border-x-2 border-x-gray rounded-full focus:border-x-bitGold focus:border-y-bitGold focus:outline-none h-12" placeholder="Enter your email" v-model="email">
                </div>
                <div class="details flex flex-col mb-4">
                    <label for="" class="font-semibold px-4">Password</label>
                    <input type="password" class="px-2 border-y-gray border-y-2 border-x-2 border-x-gray rounded-full  focus:border-x-bitGold focus:border-y-bitGold focus:outline-none outline-none h-12" placeholder="Enter a password" v-model="password" id="myPass">
                </div>
                <div class="btndiv w-full">
                    <button type="submit" class="bg-bitGold font-bold rounded-full px-3 py-2 w-full">
                     <span v-if="isLoading">Logging in...</span>  
                     <span v-else>Login!</span>  
                    </button>
                    <div class="forgot mt-1">
                        <router-link to="/forgot">Forgot Password?</router-link>
                </div>
                <div class="checkboxdiv text-start flex items-center my-3">
                   <span class="font-semibold">Show Password</span> <input type="checkbox" class="ms-2 w-4 h-4" @click="showPass()">
                </div>
                    <div class="linkdiv mt-2 flex justify-center">
                        <router-link to="/" class="font-semibold underline">Don't have an account? Sign up!</router-link>
                    </div>
                </div>
            </form>
        </main>
    </div>
</template>
    <script setup>
    import {ref} from "vue";
    import { useRouter } from 'vue-router'
    const router = useRouter();
    const email = ref('');
    const password = ref('');
    const isLoading = ref(false);
   async function handleLogin() {
  if (!email.value || !password.value) {
    alert("Please fill in both email and password.");
    return;
  }

  isLoading.value = true;

  try {
    const res = await fetch("https://bitbet-backend.onrender.com/auth/login.php", {
      method: "POST",
      credentials: "include", // ✅ needed for session cookie
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    });

    const data = await res.json(); // ✅ no need to manually parse text

    console.log("Parsed response:", data);

    if (data.success) {
      router.push('/home');
    } else {
      alert(data.message || 'Login failed.');
    }

  } catch (err) {
    console.error('❌ Fetch/network error:', err);
    alert('Something went wrong!');
  } finally {
    isLoading.value = false;
  }
}

     function showPass(){
            const myPass = document.getElementById("myPass");
            if(myPass.type == "password"){
                 myPass.type = "text"
            }else{
                myPass.type = "password"
            }
        }
    </script>