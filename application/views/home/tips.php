<script src="https://unpkg.com/vue@next"></script>
<script src="<?=base_url('assets/js/jquery-3.6.0.min.js')?>"></script>

<link rel="stylesheet" href="<?=base_url('assets/css/prism.css')?>" />
<script src="<?=base_url('assets/js/prism-full.js')?>"></script>

<style>
	.card, .form-control {
		border-color: black;
	}

	.tips {
		display: inline-flex;
		flex-direction: column;
		flex-wrap: wrap;
		width: 100%;
		height: calc(100vh - 250px);
		align-content: flex-start;
	}

	.tip {
		width: 15%;
	}

	@media only screen and (max-width: 600px) {
		.tips {
			display: block;
		}
		.tip {
			width: 100%;
		}
	}
</style>

<div id="app" class="m-3">
	<input type="text" class="form-control" v-model="search" @input="applySearch()">
	<span v-for="category in categories" @click="toggleCategory(category.name)" class="badge badge-pill mr-1" :class="categoriesFilter.includes(category.name) ? 'badge-primary' : 'badge-secondary'">{{ category.name }}</span>
	<hr>
	<div class="tips">
		<div class="tip m-1" v-for="tip in filteredTips">
			<div class="card my-1">
				<img class="card-img-top img-fluid" v-if="tip.image" v-bind:src="'<?=base_url('medias/home/tips/')?>'+tip.image" v-bind:alt="tip.title"/>
				<div class="card-body text-justify">
					<h5 class="card-title">{{ tip.title }}</h5>
					<p class="card-text" v-html="tip.html"></p>
					<span v-for="(category, index) in tip.categories" @click.stop="toggleCategory(category)" class="badge badge-pill mr-1" :class="categoriesFilter.includes(category) ? 'badge-primary' : 'badge-secondary'">{{ category }}</span>
				</div>
			</div>
		</div>
	</div>
</div>

<script>
	const App = {
		data() {
			return {
				json: null,
				filteredTips: [],
				categories: [],
				categoriesFilter: [],
				search: ""
			}
		},
		methods: {
			toggleCategory(category) {
				let index = this.categoriesFilter.indexOf(category);
				if(index == -1){
					this.categoriesFilter.push(category);
				} else {
					this.categoriesFilter.splice(index, 1);
				}
				this.applySearch();
			},
			applySearch() {
				this.filteredTips = [];
				for(let tip of this.json.tips){
					let active = true;
					for(let categoryFilter of this.categoriesFilter){
						if(!tip.categories.includes(categoryFilter)){
							active = false;
						}
					}
					if(!(tip.title+tip.content+tip.categories.join()).toLowerCase().includes(this.search.toLowerCase())){
						active = false;
					}
					if(active){
						this.filteredTips.push(tip);
					}
				}
			}
		},
		mounted() {
			$.getJSON("<?=base_url('assets/data/tips.json')?>", json => {
				this.json = json;
				this.json.tips.sort((a, b) => 0.5 - Math.random());
				for(let tip of this.json.tips){
					
					tip.categories.sort((a, b) => 0.5 - Math.random());

					for(let category of tip.categories){
						if(this.categories.filter(e => e.name == category) == 0){
							this.categories.push({ name: category, count: 1 });
						} else {
							this.categories.find(e => e.name == category).count++;
						}
					}

					let el = document.createElement('span');
					el.innerHTML = tip.content;
					Prism.highlightAllUnder(el);
					tip.html = el.innerHTML;
				}
				this.categories.sort((a, b) => b.count - a.count);
				this.applySearch();
			});
		}
	}
	Vue.createApp(App).mount('#app')
</script>