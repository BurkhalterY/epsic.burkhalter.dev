<script setup>
import { ref } from "vue"

const base = ref(10)
const value = ref(15)
const msg = ref("")
const results = ref([])

const convert = () => {
  let b = parseFloat(base.value)

  if (b >= 2 && b <= 36 && b % 1 === 0) {
    results.value = []
    let last = ""
    for (let i = 2; i <= 36; i++) {
      let intV = parseInt(value.value, b)
      let n = intV.toString(i)
      if (n == last || isNaN(intV)) {
        break
      }
      last = n
      results.value.push({ base: i, value: n })
    }
    msg.value = ""
  } else {
    results.value = []
    msg.value = "Uniquement bases entières entre 2 et 36 supportées !"
  }
}

convert()
</script>

<template>
  <div>
    <div class="text-lg text-center mt-5">
      <input type="text" v-model="value" @keyup="convert()" class="border" />
      en base
      <input type="number" v-model="base" @change="convert()" class="border" />
    </div>
    <p v-if="msg" class="alert-danger">{{ msg }}</p>
    <samp class="text-lg">
      <span
        v-for="result of results"
        :key="result"
        :class="
          [2, 10, 16].includes(result.base) ? 'font-bold' : 'text-gray-500'
        "
      >
        = {{ result.value }}<sub>{{ result.base }}</sub>
        <br />
      </span>
    </samp>
  </div>
</template>
