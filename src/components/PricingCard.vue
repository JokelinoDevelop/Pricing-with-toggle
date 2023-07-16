<template>
    <div class="lg:min-w-[70%] drop-shadow-md relative text-center grid gap-4 px-8 py-12 mt-12" :class="getCardStyles"
        :style="getPadding">
        <p class="text-xl mt-2">{{ props.plan.planName }}</p>
        <p class="text-7xl flex flex-row justify-center items-center gap-2"><span class="text-5xl">$</span>{{
            store.priceState ? (props.plan.planPrice / 10).toFixed(2) : props.plan.planPrice
        }}</p>

        <div class="flex flex-col gap-3">
            <hr>
            <p>{{ props.planDetails.storage }} Storage</p>
            <hr>
            <p>{{ props.planDetails.users }} Users Allowed</p>
            <hr>
            <p>Send up to {{ props.planDetails.capacity }} GB</p>
            <hr>
        </div>

        <button :class="getButtonStyles"
            class="w-full border-2 border-transparent text-last py-3 rounded-md text-sm tracking-widest transition-all duration-700">LEARN
            MORE</button>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { usePlanStateStore } from '../stores/planStateStore.js';

const store = usePlanStateStore()

const props = defineProps({
    plan: {
        type: Object
    },
    planDetails: {
        type: Object
    },
    index: {
        type: Number
    }
})

const getCardStyles = computed(() => {
    return props.plan.styles
});

const getButtonStyles = computed(() => {
    return props.plan.buttonStyles
});
</script>

<style scoped>
hr {
    opacity: 0.5;
}
</style>