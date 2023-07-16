import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePlanStateStore = defineStore('planState', () => {
  const priceState = ref(false)

  function toggle() {
    priceState.value = !priceState.value
    console.log(priceState.value)
  }

  return { priceState, toggle }
})
