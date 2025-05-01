<script setup lang="ts">
    import { ref } from 'vue';
    import logo from '../assets/UMAI.png'

    const ingredient = ref<string>('');
    const ingredientList = ref<string[]>([]);

    function addIngredient() {
        if (ingredient.value.trim() !== '' && !ingredientList.value.includes(ingredient.value)) {
            ingredientList.value.push(ingredient.value);

            ingredient.value = '';
        }
    }

</script>

<template>
    <div class="h-screen">
        <div class="flex flex-row">
            <img :src="logo" alt="UMAI logo" class="w-28">
            <h1 class="flex text-5xl font-bold items-center text-umai_green">UMAI</h1>
        </div>
        
        <div class="flex flex-col w-screen h-72 bg-umai_dark_green">
            <p class="text-center text-white text-3xl font-playfair font-bold w-86 mt-4">Discover recipes using your ingredients</p>
            <br>
            <div class="flex flex-row justify-center">
                <input type="text" v-model="ingredient" placeholder="Enter your ingredient here:" class="h-10 w-96 pl-4 rounded-3xl">
                <button @click="addIngredient" class="h-10 w-16 ml-4 rounded-lg border-2 bg-umai_green">+ Add</button>
            </div>
            <h3 class="font-playfair text-xl justify-start text-white ml-6 mt-6">Your Ingredients:</h3>
            <div class="w-screen overflow-y-auto">
                <div class="ml-4">
                    <ul class="flex flex-row flex-wrap">
                        <li v-for="i in ingredientList" :key="i" class="bg-umai_green rounded-lg p-2 m-2 text-white">
                            <button class="font-bold text-red-600">X</button>
                            {{ i }}                 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped> 
</style>