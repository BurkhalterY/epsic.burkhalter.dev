<template>
	<div class="text-center">
		<button type="button" class="btn btn-outline-secondary settings" data-toggle="modal" data-target="#settingsModal">⚙</button>
		<h1 v-if="state == 'waitNext'">{{ current.kana }}</h1>
		<h1 v-if="state == 'waitAnswer'">{{ current.romaji }}</h1>
		<vue-drawing-canvas ref="c" width="400" height="400" backgroundColor="beige"/>
		<br>
		<button @click.prevent="$refs.c.undo()" class="btn btn-outline-danger text-sm">↺</button>
		<button v-if="state == 'waitAnswer'" @click.prevent="validate" class="btn btn-outline-primary text-lg">OK!</button>
		<button v-if="state == 'waitNext'" @click.prevent="next" class="btn btn-outline-primary">Next →</button>
		<button @click.prevent="$refs.c.redo()" class="btn btn-outline-success text-sm">↻</button>
		<br>
		<button v-if="state == 'waitNext' && isWrongable" @click.prevent="wrong" class="btn btn-outline-danger">❌</button>

		<div class="modal fade" id="settingsModal" tabindex="-1" role="dialog" aria-labelledby="settingsModalTitle" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="settingsModalTitle">Paramètres ⚙</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div v-for="group in defaults" :key="group.title">
							<h2>{{ group.title }} <button class="btn btn-outline-primary" @click="toggleGroup(group)">Tout sélectionner</button></h2>

							<div class="group mb-3">
								<button v-for="char in group.characters" :key="char.romaji" class="btn" :class="{ 'btn-primary': char.selected, 'btn-outline-primary': !char.selected }" :title="char.romaji" @click="toggleCharacter(char)">{{ char.kana }}</button>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
						<button type="button" class="btn btn-primary" data-dismiss="modal" @click="populate">Confirmer</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	canvas {
		border: 1px solid black;
		cursor: crosshair;
	}
	.text-sm {
		font-size: 75%;
	}
	.text-lg {
		font-size: 120%;
	}
	button.settings {
		position: absolute;
		right: 0;
		top: 5px;
	}
	.group {
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
	}
</style>

<script>
	import VueDrawingCanvas from 'vue-drawing-canvas';
	import 'bootstrap/dist/js/bootstrap.js'

	export default {
		name: 'Kana',
		components: {
			VueDrawingCanvas,
		},
		data() {
			return {
				state: 'waitNext',
				isWrongable: false,
				current: { romaji: '', kana: '' },
				list: [],
				defaults: [
					{
						title: 'Hiragana',
						characters: [
							{ romaji: 'a', kana: 'あ' },
							{ romaji: 'i', kana: 'い' },
							{ romaji: 'u', kana: 'う' },
							{ romaji: 'e', kana: 'え' },
							{ romaji: 'o', kana: 'お' },
							{ romaji: 'ka', kana: 'か' },
							{ romaji: 'ki', kana: 'き' },
							{ romaji: 'ku', kana: 'く' },
							{ romaji: 'ke', kana: 'け' },
							{ romaji: 'ko', kana: 'こ' },
							{ romaji: 'sa', kana: 'さ' },
							{ romaji: 'shi', kana: 'し' },
							{ romaji: 'su', kana: 'す' },
							{ romaji: 'se', kana: 'せ' },
							{ romaji: 'so', kana: 'そ' },
							{ romaji: 'ta', kana: 'た' },
							{ romaji: 'chi', kana: 'ち' },
							{ romaji: 'tsu', kana: 'つ' },
							{ romaji: 'te', kana: 'て' },
							{ romaji: 'to', kana: 'と' },
							{ romaji: 'na', kana: 'な' },
							{ romaji: 'ni', kana: 'に' },
							{ romaji: 'nu', kana: 'ぬ' },
							{ romaji: 'ne', kana: 'ね' },
							{ romaji: 'no', kana: 'の' },
							{ romaji: 'ha', kana: 'は' },
							{ romaji: 'hi', kana: 'ひ' },
							{ romaji: 'fu', kana: 'ふ' },
							{ romaji: 'he', kana: 'へ' },
							{ romaji: 'ho', kana: 'ほ' },
							{ romaji: 'ma', kana: 'ま' },
							{ romaji: 'mi', kana: 'み' },
							{ romaji: 'mu', kana: 'む' },
							{ romaji: 'me', kana: 'め' },
							{ romaji: 'mo', kana: 'も' },
							{ romaji: 'ya', kana: 'や' },
							{ romaji: 'yu', kana: 'い' },
							{ romaji: 'yo', kana: 'よ' },
							{ romaji: 'ra', kana: 'ら' },
							{ romaji: 'ri', kana: 'り' },
							{ romaji: 'ru', kana: 'る' },
							{ romaji: 're', kana: 'れ' },
							{ romaji: 'ro', kana: 'ろ' },
							{ romaji: 'wa', kana: 'わ' },
							{ romaji: 'wo', kana: 'を' },
							{ romaji: 'n', kana: 'ん' },
						],
					}, {
						title: 'Katakana',
						characters: [
							{ romaji: 'A', kana: 'ア' },
							{ romaji: 'I', kana: 'イ' },
							{ romaji: 'U', kana: 'ウ' },
							{ romaji: 'E', kana: 'エ' },
							{ romaji: 'O', kana: 'オ' },
							{ romaji: 'KA', kana: 'カ' },
							{ romaji: 'KI', kana: 'キ' },
							{ romaji: 'KU', kana: 'ク' },
							{ romaji: 'KE', kana: 'ケ' },
							{ romaji: 'KO', kana: 'コ' },
							{ romaji: 'SA', kana: 'サ' },
							{ romaji: 'SHI', kana: 'シ' },
							{ romaji: 'SU', kana: 'ス' },
							{ romaji: 'SE', kana: 'セ' },
							{ romaji: 'SO', kana: 'ソ' },
							{ romaji: 'TA', kana: 'タ' },
							{ romaji: 'CHI', kana: 'チ' },
							{ romaji: 'TSU', kana: 'ツ' },
							{ romaji: 'TE', kana: 'テ' },
							{ romaji: 'TO', kana: 'ト' },
							{ romaji: 'NA', kana: 'ナ' },
							{ romaji: 'NI', kana: 'ニ' },
							{ romaji: 'NU', kana: 'ヌ' },
							{ romaji: 'NE', kana: 'ネ' },
							{ romaji: 'NO', kana: 'ノ' },
							{ romaji: 'HA', kana: 'ハ' },
							{ romaji: 'HI', kana: 'ヒ' },
							{ romaji: 'FU', kana: 'フ' },
							{ romaji: 'HE', kana: 'ヘ' },
							{ romaji: 'HO', kana: 'ホ' },
							{ romaji: 'MA', kana: 'マ' },
							{ romaji: 'MI', kana: 'ミ' },
							{ romaji: 'MU', kana: 'ム' },
							{ romaji: 'ME', kana: 'メ' },
							{ romaji: 'MO', kana: 'モ' },
							{ romaji: 'YA', kana: 'ヤ' },
							{ romaji: 'YU', kana: 'ユ' },
							{ romaji: 'YO', kana: 'ヨ' },
							{ romaji: 'RA', kana: 'ラ' },
							{ romaji: 'RI', kana: 'リ' },
							{ romaji: 'RU', kana: 'ル' },
							{ romaji: 'RE', kana: 'レ' },
							{ romaji: 'RO', kana: 'ロ' },
							{ romaji: 'WA', kana: 'ワ' },
							{ romaji: 'WO', kana: 'ヲ' },
							{ romaji: 'N', kana: 'ン' },
						],
					}, {
						title: 'Katakana accentués',
						characters: [
							{ romaji: 'ga', kana: 'が' },
							{ romaji: 'gi', kana: 'ぎ' },
							{ romaji: 'gu', kana: 'ぐ' },
							{ romaji: 'ge', kana: 'げ' },
							{ romaji: 'go', kana: 'ご' },
							{ romaji: 'za', kana: 'ざ' },
							{ romaji: 'ji', kana: 'じ' },
							{ romaji: 'zu', kana: 'ず' },
							{ romaji: 'ze', kana: 'ぜ' },
							{ romaji: 'zo', kana: 'ぞ' },
							{ romaji: 'da', kana: 'だ' },
							{ romaji: 'de', kana: 'で' },
							{ romaji: 'do', kana: 'ど' },
							{ romaji: 'ba', kana: 'ば' },
							{ romaji: 'bi', kana: 'び' },
							{ romaji: 'bu', kana: 'ぶ' },
							{ romaji: 'be', kana: 'べ' },
							{ romaji: 'bo', kana: 'ぼ' },
							{ romaji: 'pa', kana: 'ぱ' },
							{ romaji: 'pi', kana: 'ぴ' },
							{ romaji: 'pu', kana: 'ぷ' },
							{ romaji: 'pe', kana: 'ぺ' },
							{ romaji: 'po', kana: 'ぽ' },
						],
					}, {
						title: 'Hiragana accentués',
						characters: [
							{ romaji: 'GA', kana: 'ガ' },
							{ romaji: 'GI', kana: 'ギ' },
							{ romaji: 'GU', kana: 'グ' },
							{ romaji: 'GE', kana: 'ゲ' },
							{ romaji: 'GO', kana: 'ゴ' },
							{ romaji: 'ZA', kana: 'ザ' },
							{ romaji: 'JI', kana: 'ジ' },
							{ romaji: 'ZU', kana: 'ズ' },
							{ romaji: 'ZE', kana: 'ゼ' },
							{ romaji: 'ZO', kana: 'ゾ' },
							{ romaji: 'DA', kana: 'ダ' },
							{ romaji: 'DE', kana: 'デ' },
							{ romaji: 'DO', kana: 'ド' },
							{ romaji: 'BA', kana: 'バ' },
							{ romaji: 'BI', kana: 'ビ' },
							{ romaji: 'BU', kana: 'ブ' },
							{ romaji: 'BE', kana: 'ベ' },
							{ romaji: 'BO', kana: 'ボ' },
							{ romaji: 'PA', kana: 'パ' },
							{ romaji: 'PI', kana: 'ピ' },
							{ romaji: 'PU', kana: 'プ' },
							{ romaji: 'PE', kana: 'ペ' },
							{ romaji: 'PO', kana: 'ポ' },
						],
					}, {
						title: 'Depreacated',
						characters: [
							{ romaji: 'wi', kana: 'ゐ' },
							{ romaji: 'we', kana: 'ゑ' },
							{ romaji: 'WI', kana: 'ヰ' },
							{ romaji: 'WE', kana: 'ヱ' },
						],
					},
				],
			};
		},
		mounted() {
			const previousValues = JSON.parse(localStorage.getItem('selectedKana') || '{}');
			const firstTime = Object.keys(previousValues).length !== 0;
			for(let group of this.defaults){
				for(let char of group.characters){
					if(firstTime){
						char.selected = previousValues[char.romaji];
					} else {
						char.selected = true;
						previousValues[char.romaji] = true;
					}
				}
			}
			localStorage.setItem('selectedKana', JSON.stringify(previousValues));
			this.next();
		},
		methods: {
			validate() {
				this.state = 'waitNext';
				this.isWrongable = true;
			},
			next() {
				this.$refs.c.reset();
				if(this.list.length > 0){
					this.current = this.list.splice(Math.floor(Math.random() * this.list.length), 1)[0];
					this.state = 'waitAnswer';
				} else {
					if(this.populate()) {
						this.next();
					}
				}
			},
			toggleCharacter(character) {
				character.selected = !character.selected;
				const previousValues = JSON.parse(localStorage.getItem('selectedKana'));
				previousValues[character.romaji] = character.selected;
				localStorage.setItem('selectedKana', JSON.stringify(previousValues));
			},
			toggleGroup(group) {
				for(let char of group.characters){
					this.toggleCharacter(char);
				}
			},
			wrong() {
				this.list.push(this.current);
				this.isWrongable = false;
			},
			populate() {
				this.list = [];
				for(let group of this.defaults){
					for(let char of group.characters){
						if(char.selected){
							this.list.push(char);
						}
					}
				}
				return this.list.length > 0;
			},
		},
	}
</script>
