<script setup lang="ts">
    import { ref } from 'vue';
    import logo from '../assets/UMAI.png'

    const ingredient = ref<string>('');
    const ingredientList = ref<string[]>([]);

    function addIngredient() {
        if (ingredient.value.trim() !== '' && !ingredientList.value.includes(ingredient.value)) {
            ingredientList.value.push(ingredient.value);

            ingredient.value = '';
        } else {
            console.log("no");
        }
    }

</script>

<template>
    <div class="h-screen">
        <div class="flex flex-row">
            <img :src="logo" alt="UMAI logo" class="w-28">
            <h1 class="flex text-5xl font-bold items-center text-umai_green">UMAI</h1>
        </div>
        
        <div class="flex flex-col w-screen h-52 justify-center items-center bg-umai_green">
            <h2 >Input your ingredients:</h2>
            <div class="flex flex-row">
                <input type="text" v-model="ingredient" placeholder="Enter your ingredient here:" class="h-10 w-96 rounded-lg">
                <button @click="addIngredient" class="h-10 w-16 rounded-lg bg-amber-400">Add</button>
            </div>
            <div class="w-screen overflow-y-auto">
                <ul class="flex flex-row flex-wrap">
                    <li v-for="i in ingredientList" :key="i" class="bg-umai_dark_green rounded-lg p-2 m-2">
                        {{ i }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped> 
</style>