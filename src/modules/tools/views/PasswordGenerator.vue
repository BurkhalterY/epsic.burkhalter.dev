<script setup>
import { ref } from "vue"

const LOWER = "abcdefghijklmnopqrstuvwxyz",
  UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  NUMBERS = "0123456789",
  SYMBOLS = "!#$%&*+-=?@",
  SIMILAR = "1lIioO0"

const length = ref(12)
const useLower = ref(true)
const useUpper = ref(true)
const useNumbers = ref(true)
const useSymbols = ref(true)
const avoidSimilar = ref(true)
const history = ref([])

const generate = () => {
  let characters = ""

  if (useLower.value) characters += LOWER
  if (useUpper.value) characters += UPPER
  if (useNumbers.value) characters += NUMBERS
  if (useSymbols.value) characters += SYMBOLS

  if (avoidSimilar.value) {
    for (let i = 0; i < SIMILAR.length; i++) {
      characters = characters.replace(SIMILAR.charAt(i), "")
    }
  }

  let password = ""
  let charactersLength = characters.length
  for (let i = 0; i < length.value; i++) {
    password += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  history.value.unshift(password)
}
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-wrap sm:flex-row gap-y-1 gap-x-12">
      <strong>Longeur du mot de passe :</strong>
      <div class="flex gap-1 sm:order-last">
        <span
          title="Pour une longueur supérieure à 32, utiliser le champ texte."
          class="text-blue-500"
          >🛈</span
        >
        <input type="number" v-model="length" class="border w-16" />
      </div>
      <input type="range" min="4" max="32" v-model="length" />
    </div>
    <div class="flex gap-1">
      <input type="checkbox" id="useLower" v-model="useLower" />
      <label for="useLower">Minuscules</label>
    </div>
    <div class="flex gap-1">
      <input type="checkbox" id="useUpper" v-model="useUpper" />
      <label for="useUpper">Majuscules</label>
    </div>
    <div class="flex gap-1">
      <input type="checkbox" id="useNumbers" v-model="useNumbers" />
      <label for="useNumbers">Chiffres</label>
    </div>
    <div class="flex gap-1">
      <input type="checkbox" id="useSymbols" v-model="useSymbols" />
      <label for="useSymbols">Symboles</label>
    </div>
    <div class="flex gap-1">
      <input type="checkbox" id="avoidSimilar" v-model="avoidSimilar" />
      <label for="avoidSimilar"
        >Exclure les caractères similaires ({{
          SIMILAR.split("").join(" ")
        }})</label
      >
    </div>

    <button
      class="mx-auto w-min my-5 px-3 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg"
      @click="generate()"
    >
      Générer
    </button>
    <samp class="text-center">{{ history[0] }}</samp>

    <details>
      <summary>Historique</summary>
      <ul>
        <li v-for="password of history" :key="password">{{ password }}</li>
      </ul>
    </details>

    <div class="alert-danger text-start">
      <h3 class="inline alert-title">DON'T TRUST, VERIFY</h3>
      <div>
        Les mots de passe sont générés uniquement par votre navigateur et ne
        parviennent jamais au serveur. Vous être libre de vérifier cela par
        vous-même depuis le
        <a
          target="_blank"
          href="https://github.com/BurkhalterY/epsic.burkhalter.dev/blob/vue3/src/modules/tools/views/PasswordGenerator.vue"
          >code source</a
        >. <strong>Néanmoins</strong>, cet outil n'est pas une solution
        certifiée et ne devrait pas être utilisé pour générer des mots de passe
        destinés à protéger des éléments critiques !
      </div>
    </div>
  </div>
</template>
