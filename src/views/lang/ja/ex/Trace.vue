<template>
	<div>
		<div v-for="(character, i) in characters" :key="i" class="canvas-group">
			<vue-drawing-canvas ref="c" :canvasId="'c'+i" width="200" height="200" backgroundColor="beige" @mouseup="recognize(i)"/>
			<div class="buttons">
				<span class="space-gobber"></span>
				<button @click.prevent="$refs.c[i].undo(); recognize(i)" class="btn btn-outline-danger">↺</button>
				<select v-model="character.current">
					<option v-for="char in character.list" :key="char">{{ char }}</option>
				</select>
				<button @click.prevent="$refs.c[i].redo(); recognize(i)" class="btn btn-outline-success">↻</button>
				<span class="space-gobber"></span>
			</div>
		</div>
		<button class="btn btn-outline-primary button-add" @click="characters.push({ current: ' ', list: [] })">+</button>
		<p class="setence">{{ characters.map(c => c.current).join('') }}</p>
	</div>
</template>

<style scoped>
	.canvas-group {
		width: 200px;
		display: inline-block;
	}
	canvas {
		border: 1px solid black;
		cursor: crosshair;
	}
	.buttons {
		width: 100%;
		margin: auto;
	}
	.space-gobber {
		width: 10%;
		display: inline-block;
	}
	.buttons button {
		width: 20%;
	}
	.buttons select {
		width: 40%;
		height: 30px;
		border: 1px solid gray;
		background-color: white;
		text-align: center;
		-moz-appearance: none;
		-webkit-appearance: none;
		vertical-align: middle;
	}
	.button-add {
		vertical-align: top;
		width: 200px;
		height: 200px;
		font-size: 400%;
	}
	p.setence {
		font-size: 200%;
	}
</style>

<script>
	import VueDrawingCanvas from 'vue-drawing-canvas';
	import axios from 'axios';

	export default {
		name: 'Kana',
		components: {
			VueDrawingCanvas,
		},
		data() {
			return {
				number: 1,
				characters: [{ current: '', list: [] }],
			};
		},
		methods: {
			async recognize(i) {
				const requests = [];
				const traces = [];
				for (let stroke of this.$refs.c[i].getAllStrokes()) {
					const trace = [[], []];
					for (let coordinate of stroke.coordinates) {
						trace[0].push(coordinate.x);
						trace[1].push(coordinate.y);
					}
					traces.push(trace);
				}
				requests.push({
					writing_guide: {
						writing_area_width: 200,
						writing_area_height: 200,
					},
					ink: traces,
					language: "ja",
				});
				const data = {
					options: "enable_pre_space",
					requests: requests,
				};
				const res = await axios.post("https://www.google.com.tw/inputtools/request?ime=handwriting&app=mobilesearch&cs=1&oe=UTF-8", data);
				this.characters[i].current = res.data[1][0][1][0]
				for (let char of res.data[1]) {
					this.characters[i].list = char[1];
				}
			},
		},
	}
</script>
