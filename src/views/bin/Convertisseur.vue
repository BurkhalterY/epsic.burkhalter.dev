<script setup>
import { ref } from "vue"

const number = ref("")
const baseNumber = ref(10)
const result = ref("")
const baseResult = ref(2)
const msg = ref("")

const allCharacters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const convert = () => {
  let fBaseNumber = parseFloat(baseNumber.value)
  let fBaseResult = parseFloat(baseResult.value)

  if (
    fBaseNumber < 2 ||
    fBaseNumber > 36 ||
    fBaseResult < 2 ||
    fBaseResult > 36 ||
    fBaseNumber % 1 !== 0 ||
    fBaseResult % 1 !== 0
  ) {
    msg.value = "Uniquement bases entières entre 2 et 36 supportées !"
    result.value = ""
    return
  }
  const allowedCharacters = allCharacters.substring(0, fBaseNumber)
  const forbiddenCharacters = []
  for (let c of number.value) {
    if (
      !forbiddenCharacters.includes(c) &&
      !allowedCharacters.includes(c.toUpperCase())
    ) {
      forbiddenCharacters.push(c)
    }
  }
  if (forbiddenCharacters.length) {
    let formatedForbidden = forbiddenCharacters.map((c) => `"${c}"`)
    if (forbiddenCharacters.length == 1) {
      msg.value = `Le caractère ${formatedForbidden} n'existe pas en base ${fBaseNumber}.`
    } else {
      const last = formatedForbidden.pop()
      formatedForbidden = formatedForbidden.join(", ") + " et " + last
      msg.value = `Les caractères ${formatedForbidden} n'existent pas en base ${fBaseNumber}.`
    }
    result.value = ""
    return
  }

  msg.value = ""
  result.value = parseInt(number.value, fBaseNumber).toString(fBaseResult)
}
</script>

<template>
  <div>
    <input type="text" v-model="number" @keyup="convert" />
    <span> en base </span>
    <input type="text" v-model="baseNumber" @keyup="convert" size="2" />
    <div class="text-lg text-center w-52">=</div>
    <input type="text" v-model="result" readonly />
    <span> en base </span>
    <input type="text" v-model="baseResult" @keyup="convert" size="2" />
    <p class="text-red-800">{{ msg }}</p>
  </div>
</template>

<style scoped>
input {
  @apply border rounded-md p-1;
}
</style>
