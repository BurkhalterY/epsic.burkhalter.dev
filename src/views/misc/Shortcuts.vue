<template>
	<h2>{{ app.title }}</h2>
	<template v-for="group in groups" :key="group">
		<h3>{{ group.title }}</h3>
		<table class="table table-responsive">
			<tr>
				<th>Raccourci</th>
				<th>Description</th>
			</tr>
			<tr v-for="shortcut in group.shortcuts" :key="shortcut">
				<td>
					<KeyCode :keys="shortcut.keys"/>
				</td>
				<td>{{ shortcut.description }}</td>
			</tr>
		</table>
	</template>
</template>

<script>
	import KeyCode from '../../components/KeyCode.vue';

	export default {
		name: 'Shortcuts',
		components: {
			KeyCode,
		},
		data() {
			return {
				app: '',
				groups: [],
			};
		},
		async created() {
			const appName = this.$route.params.app;
			this.app = (await import(`../../assets/data/shortcuts/collections/${appName}/_index.json`)).data;
			document.title += ' - ' + this.app.title;

			for(let groupPath of this.app.groups){
				const group = await import(`../../assets/data/shortcuts/collections/${groupPath}.json`);
				this.groups.push(group);
			}
		},
	}
</script>
