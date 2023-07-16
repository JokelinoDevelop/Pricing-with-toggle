<template>
  <div class="bg-veryLightGrayishBlue h-full relative p-8 lg:grid lg:place-items-center lg:h-screen">

    <div class="lg:max-w-lg">
      <PricingFirst />

      <div class="lg:flex lg:justify-center lg:items-center relative">
        <template v-for=" (plan, index) in planOptions" :key="plan.planName">
          <PricingCard :plan="plan" :planDetails=plan.planDetails :index="index" />
        </template>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import PricingFirst from '@/components/PricingFirst.vue'
import PricingCard from '@/components/PricingCard.vue'

const planOptions = ref(
  [
    {
      planName: "Basic",
      planPrice: "199.99",
      styles: 'rounded-l-2xl text-darkGrayishBlue bg-white',
      buttonStyles: 'bg-last text-white hover:text-last hover:border-black hover:bg-white',
      planDetails: {
        storage: "500 GB",
        users: "2",
        capacity: "3"
      },
    },
    {
      planName: "Professional",
      planPrice: "249.99",
      styles: "rounded-2xl text-white bg-gradient-to-b from-first to-last scale-y-110",
      buttonStyles: 'bg-white hover:text-white hover:border-white hover:bg-last',
      planDetails: {
        storage: "1 TB",
        users: "5",
        capacity: "10"
      },
    },
    {
      planName: "Master",
      planPrice: "399.99",
      styles: 'rounded-r-2xl text-darkGrayishBlue bg-white',
      buttonStyles: 'bg-last text-white hover:text-last hover:border-black hover:bg-white',
      planDetails: {
        storage: "2 TB",
        users: "10",
        capacity: "20"
      },
    }
  ]
)
</script>
