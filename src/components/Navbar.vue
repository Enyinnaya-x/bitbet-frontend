<script setup>
import { Coins, CircleUserRound, AlignRight, X, ArrowBigLeftDash, Trash } from 'lucide-vue-next';
    var balance = 5000
    if(balance < 1){
        setInterval(()=>{
            balance++
        }, 30000)
    }
    const openMenu=()=>{
        const hamMenu = document.getElementById("hamMenu");
        const hamBtn = document.getElementById("hamBtn");
        const bitLogo = document.getElementById("bitLogo");
        const coinlogo = document.getElementById("coinlogo");
        hamBtn.classList.add("invisible")
        bitLogo.classList.add("invisible")
        coinlogo.classList.add("invisible")
        hamMenu.classList.add("scroll");
        hamMenu.classList.remove("reverse-scroll");
    }
    const removeMenu=()=>{
        const hamMenu = document.getElementById("hamMenu");
        const hamBtn = document.getElementById("hamBtn");
        const bitLogo = document.getElementById("bitLogo");
        const coinlogo = document.getElementById("coinlogo");
        hamMenu.classList.remove("scroll");
        hamMenu.classList.add("reverse-scroll");
        hamBtn.classList.remove("invisible")
        bitLogo.classList.remove("invisible")
        coinlogo.classList.remove("invisible")
    }
    async function handleLogout() {
  try {
    const res = await fetch('http://localhost/Bitbet/backend/auth/logout.php');
    const data = await res.json();

    if (data.success) {
      // Optional: clear localStorage/sessionStorage
      // localStorage.removeItem('user'); 

      router.push('/login'); // or wherever your login route is
    } else {
      alert('Failed to logout.');
    }
  } catch (err) {
    console.error('Logout error:', err);
    alert('Something went wrong during logout.');
  }
}
</script>

<template>
    <nav class="px-5 text-white justify-between py-1 items-center hidden lg:flex">
        <div class="logodiv flex">
            <Coins />
            <span class="ms-2 font-bold text-xl">Bitbet</span>
        </div>
        <div class="navlinks flex gap-24">
            <p class="font-ligth text-white hover:text-bitGold cursor-pointer">Help</p>
            <p class="font-ligth text-white hover:text-bitGold cursor-pointer">Leaderboard</p>
        </div>
        <div class="importantdiv flex justify-between">
            <div class="userdiv rounded-md flex bg-white items-center justify-between px-2 py-1">
                <CircleUserRound class="text-bitPurple stroke-[2.5] "/>
                <p class="font-semibold ms-2 text-bitPurple hover:text-bitGold cursor-pointer">{{balance}}</p>
            </div>
            <div class="userdiv rounded-md flex bg-white items-center justify-between px-2 py-1 ms-4">
                    <ArrowBigLeftDash class="text-bitPurple"/> <button @click="handleLogout" class="font-ligth text-bitPurple font-semibold hover:text-bitRed cursor-pointer">Logout</button>
            </div>
        </div>
    </nav>
    <!-- Ham Nav  -->
    <nav class="px-5 text-white justify-between py-1 items-center flex lg:hidden">
        <div class="logodiv flex">
            <Coins  id="coinlogo"/>
            <span class="ms-2 font-bold text-xl" id="bitLogo">Bitbet</span>
        </div>
        <AlignRight @click="openMenu()" class="cursor-pointer" id="hamBtn"/>
        <div class="newholder flex flex-col fixed z-50 top-0 bg-bitGold rounded-lg p-5 items-center gap-3 w-11/12 -right-full mt-3 h-fitcontent" id="hamMenu">
            <div class="navlinks w-full flex flex-col gap-3 h-full">
                <div class="xbutton flex justify-between">
                    <div class="logodiv flex">
                    <Coins class="text-bitPurple  hover:text-bitRed" />
                    <span class="ms-2 font-bold text-xl text-bitPurple  hover:text-bitRed">Bitbet</span>
                    </div>
                    <X class="text-bitPurple stroke-[2.5]  hover:text-bitRed cursor-pointer" @click="removeMenu"/>
                </div>
                <p class="font-ligth text-bitPurple font-semibold hover:text-bitRed cursor-pointer">Help</p>
                <p class="font-ligth text-bitPurple font-semibold hover:text-bitRed cursor-pointer">Leaderboard</p>
                <p class="font-ligth text-bitPurple font-semibold hover:text-bitRed cursor-pointer">Join Our Community</p>
            </div>
            <div class="userdiv rounded-md flex bg-white items-center justify-between px-2 py-1 me-auto">
                <ArrowBigLeftDash class="text-bitPurple"/> <button @click="handleLogout" class="font-ligth text-bitPurple font-semibold hover:text-bitRed cursor-pointer">Logout</button>
            </div>
            <div class="userdiv rounded-md flex bg-white items-center justify-between px-2 py-1 me-auto">
            <CircleUserRound class="text-bitPurple stroke-[2.5] "/>
            <p class="font-semibold ms-2 text-bitPurple hover:text-bitGold cursor-pointer">{{balance}}</p>
            </div>
            <div class="userdiv rounded-md flex bg-white items-center justify-between px-2 py-1 me-auto">
            <Trash class="text-bitPurple stroke-[2.5] "/>
            <button class="font-semibold ms-2 text-bitPurple hover:text-bitRed cursor-pointer">Delete account</button>
            </div>
        </div> 
        </nav>
    <hr>
</template>
<style scoped>
    .scroll{
        transform: translateX(-110%);
        transition: all ease-in-out 0.6s;
    }
    .reverse-scroll{
        transform: translateX(110%);
        transition: all ease-in-out 0.6s;
    }
</style>