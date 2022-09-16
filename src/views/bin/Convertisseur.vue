<template>
	<div>
		<h1>Convertisseur</h1>
		<input type="text" v-model="number" @keyup="convert()">
		<span> en base </span>
		<input type="text" v-model="baseNumber" @keyup="convert()" size="2">
		<br><span>=</span><br>
		<input type="text" v-model="result" readonly>
		<span> en base </span>
		<input type="text" v-model="baseResult" @keyup="convert()" size="2">
		<p class="text-danger">{{ msg }}</p>
	</div>
</template>

<script>
	export default {
		name: 'Convertisseur',
		data() {
			return {
				number: '',
				baseNumber: 10,
				result: '',
				baseResult: 2,
				msg: '',
			}
		},
		methods: {
			convert() {
				let baseNumber = parseFloat(this.baseNumber);
				let baseResult = parseFloat(this.baseResult);

				if(baseNumber >= 2 && baseNumber <= 36 && baseResult >= 2 && baseResult <= 36 && baseNumber % 1 === 0 && baseResult % 1 === 0){
					this.msg = "";
					this.result = parseInt(this.number, baseNumber).toString(baseResult);
				} else {
					this.msg = "Uniquement bases entières entre 2 et 36 supportées !";
				}
			}
		}
	}
</script>
