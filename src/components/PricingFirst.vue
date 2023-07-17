<template>
    <div class="images z-5">
        <img src="@/assets/bg-bottom.svg" class="absolute bottom-0 left-0 w-48">
        <img src="@/assets/bg-top.svg" class="absolute top-0 right-0 w-48">
    </div>

    <div class="pricing z-10 relative">
        <h3 class="text-2xl text-center text-darkGrayishBlue">Our Pricing</h3>

        <div class="flex justify-around items-center mt-8 px-8 text-grayishBlue">
            <p class="lg:text-xl text-sm">Annually</p>

            <ToggleButton />

            <p class="lg:text-xl text-sm">Monthly</p>
        </div>
    </div>
</template>

<script setup>
import ToggleButton from '@/components/ToggleButton.vue'
</script>
