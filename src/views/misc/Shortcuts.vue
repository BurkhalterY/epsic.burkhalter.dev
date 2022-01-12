<template>
	<h2>{{ app.name }}</h2>
	<table class="table table-responsive">
		<tr>
			<th>Raccourci</th>
			<th>Description</th>
		</tr>
		<tr v-for="shortcut in shortcuts" :key="shortcut">
			<td>
				<span v-for="(key, index) in shortcut.keys" :key="key">
					<span v-if="index > 0"> + </span>
					<kbd>{{ key }}</kbd>
				</span>
			</td>
			<td>{{ shortcut.description }}</td>
		</tr>
	</table>
</template>

<script>
	import { applications, shortcuts } from '../../assets/data/shortcuts.json'

	export default {
		name: 'Shortcuts',
		data() {
			const app = applications.find(x => x.path == this.$route.params.app);
			const keptShortcuts = [];
			for(let i = 0; i < shortcuts.length; i++){
				if(shortcuts[i].softwares.includes(app.name)){
					keptShortcuts.push(shortcuts[i]);
				}
			}

			keptShortcuts.sort((a, b) => {
				const aStr = a.keys.join(' + ');
				const bStr = b.keys.join(' + ');

				if (aStr < bStr) {
					return -1;
				}
				if (aStr > bStr) {
					return 1;
				}
				return 0;
			});

			return {
				app,
				shortcuts: keptShortcuts,
			}
		}
	}
</script>
