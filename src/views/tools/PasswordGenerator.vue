<template>
	<div>
		<h1>Générateur de mots de passes</h1>
		<strong>Longeur du mot de passe :</strong><br>
		<input type="range" min="4" max="32" v-model="length"><br>
		<input type="number" v-model="length">&nbsp;<span title="Pour une longueur supérieure à 32, utiliser ce champ">🛈</span><br>
		<input type="checkbox" id="useLower" v-model="useLower">&nbsp;<label for="useLower">Minuscules</label><br>
		<input type="checkbox" id="useUpper" v-model="useUpper">&nbsp;<label for="useUpper">Majuscules</label><br>
		<input type="checkbox" id="useNumbers" v-model="useNumbers">&nbsp;<label for="useNumbers">Chiffres</label><br>
		<input type="checkbox" id="useSymbols" v-model="useSymbols">&nbsp;<label for="useSymbols">Symboles</label><br>
		<input type="checkbox" id="avoidSimilar" v-model="avoidSimilar">&nbsp;<label for="avoidSimilar">Exclure les caractères similaires ({{ similar.split('').join(' ') }})</label><br>

		<button class="btn btn-primary" @click="generate()">Générer</button>

		<samp>{{ history[0] }}</samp>

		<details>
			<summary>Historique</summary>
			<ul>
				<li v-for="password of history" :key="password">{{ password }}</li>
			</ul>
		</details>
	</div>
</template>

<style scoped>
	samp {
		display: block;
		font-size: 150%;
		text-align: center;
	}
</style>

<script>
	export default {
		name: 'PasswordGenerator',
		data() {
			return {
				lower: 'abcdefghijklmnopqrstuvwxyz',
				upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
				numbers: '0123456789',
				symbols: '!#$%&*+-=?@',
				similar: '1lIioO0',
				length: 12,
				useLower: true,
				useUpper: true,
				useNumbers: true,
				useSymbols: true,
				avoidSimilar: true,
				history: [],
			}
		},
		methods: {
			generate() {
				let characters = '';

				if(this.useLower){
					characters += this.lower;
				}
				if(this.useUpper){
					characters += this.upper;
				}
				if(this.useNumbers){
					characters += this.numbers;
				}
				if(this.useSymbols){
					characters += this.symbols;
				}
				if(this.avoidSimilar){
					for (let i = 0; i < this.similar.length; i++) {
						characters = characters.replace(this.similar.charAt(i), '');
					}
				}

				let password = '';
				let charactersLength = characters.length;
				for (let i = 0; i < this.length; i++) {
					password += characters.charAt(Math.floor(Math.random() * charactersLength));
				}
				this.history.unshift(password);
			}
		},
	}
</script>
