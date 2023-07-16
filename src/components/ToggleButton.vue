<template>
    <div class="flex items-center justify-center">

        <label for="toggleB" class="flex items-center cursor-pointer">
            <!-- toggle -->
            <div class="relative w-full">
                <!-- input -->
                <input type="checkbox" id="toggleB" class="sr-only" @click="store.toggle">
                <!-- line -->
                <div class="block bg-last w-16 h-8 rounded-full hover:bg-first transition-all duration-500"></div>
                <!-- dot -->
                <div class="dot absolute left-2 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>

        </label>

    </div>
</template>

<script setup>
import { usePlanStateStore } from '@/stores/planStateStore.js';

const store = usePlanStateStore();

</script>

<style scoped>
input:checked~.dot {
    transform: translateX(100%)
}
</style>