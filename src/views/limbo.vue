<script setup>
import { Coins, CircleUserRound, AlignRight, X, ArrowBigLeftDash, Trash } from 'lucide-vue-next';
import {ref} from "vue";
import correct from "../assets/audio/correct.wav";
import newwrong from "../assets/audio/newwrong.wav";
    import { useRouter } from 'vue-router'
    const router = useRouter();
   fetch("https://bitbet-backend.onrender.com/auth/getBal.php",{
       credentials: "include",
   })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      const bitbucks = data.data;
      console.log("User bitbucks:", bitbucks);
      document.getElementById('myBal').textContent = `₦${bitbucks}`;
      document.getElementById('myBal2').textContent = `₦${bitbucks}`;
    } else {
      console.error("Error:", data.message);
    }
  })
  .catch(err => {
    console.error("Fetch error:", err);
  });
var randomNum;
const myGuess = ref('');
const amount = ref('');
const correctSound = new Audio(correct);
const newwrongSound = new Audio(newwrong);
 function placeBet(){
  if(amount.value > bitbucks){
    alert("Please Input a valid amount")
    return;
  }
  if(myGuess.value == "" || myGuess.value > 10 ){
        alert ("Please fill in a valid guess")
        return;
    }
     randomNum = Math.ceil(Math.random() * 10);
     console.log(randomNum)
     const myRange = document.getElementById("myRange");
     const myH = document.getElementById("myH");
     myH.innerHTML = `${randomNum}<small id="mySmall">x</small>`;
     myRange.value = randomNum;
     if(randomNum == myGuess.value){
         correctSound.play()
        myH.style.color = "green"
     }else{
         newwrongSound.play()
        myH.style.color = "red"

     }
 }
 function autoBet(){
    var userRandom = Math.ceil(Math.random() * 10)
     randomNum = Math.ceil(Math.random() * 10);
     myGuess.value = userRandom
     const myRange = document.getElementById("myRange");
     const myH = document.getElementById("myH");
     myH.innerHTML = `${randomNum}<small id="mySmall">x</small>`;
     myRange.value = randomNum;
     if(userRandom == randomNum){
         correctSound.play()
        myH.style.color = "green"
     }else{
         newwrongSound.play()
        myH.style.color = "red"
     }

 }
  function clear(){
     myGuess.value = "";
     const myH = document.getElementById("myH");
     myH.style.color = "white"
     myH.innerHTML = `0<small id="mySmall">x</small>`;

 }
 function displayRules(){
    alert("Can you guess where the range thumb will land?🤔 It's suppose to be between the numbers 1-10. I don't know it but maybe you do👀✨")
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
    const res = await fetch("https://bitbet-backend.onrender.com/auth/logout.php",{
        method: "POST",
    });
    const data = await res.json();

    if (data.success) {
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
    <div class="bg-bitPurple h-screen">
        <nav class="px-5 text-white justify-between py-1 items-center hidden lg:flex">
          <div class="logodiv flex">
              <Coins />
              <span class="ms-2 font-bold text-xl">Bitbet</span>
          </div>
          <div class="navlinks flex gap-24">
              <p class="font-ligth text-white hover:text-bitGold cursor-pointer" @click="displayRules">Rules</p>
              <p class="font-ligth text-white hover:text-bitGold cursor-pointer">Leaderboard</p>
          </div>
          <div class="importantdiv flex justify-between">
              <div class="userdiv rounded-md flex bg-white items-center justify-between px-2 py-1">
                  <CircleUserRound class="text-bitPurple stroke-[2.5] "/>
                  <p class="font-semibold ms-2 text-bitPurple hover:text-bitGold cursor-pointer" id="myBal"></p>
              </div>
              <div class="userdiv rounded-md flex bg-white items-center justify-between px-2 py-1 ms-4">
                      <ArrowBigLeftDash class="text-bitPurple"/> <button @click="handleLogout" class="font-ligth text-bitPurple font-semibold hover:text-bitRed cursor-pointer">Logout</button>
              </div>
          </div>
      </nav>
      <hr>
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
                  <p class="font-ligth text-bitPurple font-semibold hover:text-bitRed cursor-pointer" @click="displayRules">Rules</p>
                  <p class="font-ligth text-bitPurple font-semibold hover:text-bitRed cursor-pointer">Leaderboard</p>
                  <p class="font-ligth text-bitPurple font-semibold hover:text-bitRed cursor-pointer">Join Our Community</p>
              </div>
              <div class="userdiv rounded-md flex bg-white items-center justify-between px-2 py-1 me-auto">
                  <ArrowBigLeftDash class="text-bitPurple"/> <button @click="handleLogout" class="font-ligth text-bitPurple font-semibold hover:text-bitRed cursor-pointer">Logout</button>
              </div>
              <div class="userdiv rounded-md flex bg-white items-center justify-between px-2 py-1 me-auto">
              <CircleUserRound class="text-bitPurple stroke-[2.5] "/>
              <p class="font-semibold ms-2 text-bitPurple hover:text-bitGold cursor-pointer" id="myBal2"></p>
              </div>
              <div class="userdiv rounded-md flex bg-white items-center justify-between px-2 py-1 me-auto">
              <Trash class="text-bitPurple stroke-[2.5] "/>
              <button class="font-semibold ms-2 text-bitPurple hover:text-bitRed cursor-pointer">Delete account</button>
              </div>
          </div> 
          </nav>
      <div class="newtextdiv text-center mt-3 mb-5">
          <h1 class="font-semibold text-3xl text-white">Limbo</h1>
      </div>
      <div class="mult px-5 mt-5">
        <h4 class="font-semibold text-2xl text-white">Multiplier</h4>
        <h2 class="font-bold text-3xl text-white" id="myH">0<small class="text-xl" id="mySmall">x</small></h2>
      </div>
      <input type="range" class="w-full" value="1" step="1" min="1" max="10" style="accent-color: #FFD700;" v-model="myRange" id="myRange">
      <div class="amount flex flex-col lg:w-5/6 w-full mt-10">
          <div class="firstdiv flex flex-col px-4 lg:w-3/4 w-11/12 mb-3">
              <label for="" class="text-white font-semibold px-4">Bet Amount</label>
              <input type="number" class="px-2 border-y-gray border-y-2 border-x-2 border-x-gray rounded-full  focus:border-x-bitGold focus:border-y-bitGold focus:outline-none outline-none h-12" v-model="amount">
          </div>
          <div class="firstdiv flex flex-col px-4 lg:w-3/4 w-11/12 mb-3">
              <label for="" class="text-white font-semibold px-4">Guess</label>
              <input type="number" class="px-2 border-y-gray border-y-2 border-x-2 border-x-gray rounded-full  focus:border-x-bitGold focus:border-y-bitGold focus:outline-none outline-none h-12" v-model="myGuess">
          </div>
          <div class="btndiv flex justify-between items-center mt-5 lg:w-3/4 w-full gap-3 px-6">
              <button class="bg-bitRed font-bold rounded-full px-3 py-2 w-36 text-white" @click="placeBet">Place Bet</button>
              <button class="bg-bitGold font-bold rounded-full px-3 py-2 w-36" @click="autoBet()">Auto</button>
              <button class="bg-white font-bold rounded-full px-3 py-2 w-36" @click="clear()">Clear</button>
          </div>
          <div class="livefeed mt-5 px-4 mx-auto w-11/12">
        <h4 class="font-semibold text-2xl text-white">Live Feed</h4>
         <div class="overflow-x-auto rounded-lg shadow-md border border-gray-200">
  <table class="min-w-full divide-y divide-gray-200 bg-white sm:text-sm">
    <thead class="bg-gray-100 text-left text-xs font-semibold uppercase text-gray-600">
      <tr>
        <th class="px-6 py-3">#</th>
        <th class="px-6 py-3">Bet</th>
        <th class="px-6 py-3">Multiplier</th>
        <th class="px-6 py-3">Payout</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr class="hover:bg-gray-50 transition">
        <td class="px-6 py-4 font-medium text-gray-700">1</td>
        <td class="px-6 py-4 text-green-600 font-bold">$50</td>
        <td class="px-6 py-4">2.3x</td>
        <td class="px-6 py-4 text-green-500 font-semibold">$115</td>
      </tr>
      <tr class="hover:bg-gray-50 transition">
        <td class="px-6 py-4 font-medium text-gray-700">2</td>
        <td class="px-6 py-4 text-red-500 font-bold">$20</td>
        <td class="px-6 py-4">1.1x</td>
        <td class="px-6 py-4 text-red-500 font-semibold">$0</td>
      </tr>
      <!-- more rows -->
    </tbody>
  </table>
</div>
    </div>
    </div>
</div>

        
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