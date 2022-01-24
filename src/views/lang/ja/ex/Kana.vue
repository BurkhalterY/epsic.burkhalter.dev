<template>
	<div>
		<vue-drawing-canvas v-for="i in characters" :key="i" ref="c" :canvasId="'c'+i" width="200" height="200" class="border"/>
		<button @click="recognize">OK</button>
		<button @click="characters++">+</button>
		<span>{{ setence }}</span>
	</div>
</template>

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
				characters: 1,
				setence: '',
			};
		},
		methods: {
			async recognize() {
				const requests = [];
				for (let i = 0; i < this.characters; i++) {
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
				}
				const data = {
					options: "enable_pre_space",
					requests: requests,
				};
				const res = await axios.post("https://www.google.com.tw/inputtools/request?ime=handwriting&app=mobilesearch&cs=1&oe=UTF-8", data);
				this.setence = '';
				for (let char of res.data[1]) {
					this.setence += char[1][0];
				}
			},
		},
	}
</script>
