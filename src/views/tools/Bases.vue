<template>
  <div>
    <h1>Conversion de bases</h1>
    <span>
      <input type="text" v-model="value" @keyup="convert()" />
      en base
      <input
        type="number"
        style="width: 60px"
        v-model="base"
        @change="convert()"
      />
    </span>
    <p class="text-danger">{{ msg }}</p>

    <samp>
      <span v-for="result of results" :key="result">
        = {{ result.value }}<sub>{{ result.base }}</sub
        ><br
      /></span>
    </samp>
  </div>
</template>

<style scoped>
samp {
  font-size: 125%;
}
</style>

<script>
export default {
  name: "Bases",
  data() {
    return {
      base: 10,
      value: "",
      msg: "",
      results: [],
    };
  },
  methods: {
    convert() {
      let base = parseFloat(this.base);

      if (base >= 2 && base <= 36 && base % 1 === 0) {
        this.results = [];
        let last = "";
        for (let i = 2; i <= 36; i++) {
          let intValue = parseInt(this.value, base);
          let value = intValue.toString(i);
          if (value == last || isNaN(intValue)) {
            break;
          }
          last = value;
          this.results.push({ base: i, value: value });
        }
        this.msg = "";
      } else {
        this.results = [];
        this.msg = "Uniquement bases entières entre 2 et 36 supportées !";
      }
    },
  },
};
</script>
