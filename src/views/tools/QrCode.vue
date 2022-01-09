<template>
	<div>
		<h1>Générateur de QR Code</h1>
		<textarea class="w-100" v-model="qrValue"></textarea>
		<br><br>
		<div class="text-center" v-if="qrValue"><vue-qrcode :value="qrValue"/></div>
	</div>
</template>

<script>
	import VueQrcode from '@chenfengyuan/vue-qrcode'

	export default {
		name: 'QrCode',
		components: {
			VueQrcode,
		},
		data() {
			return {
				qrValue: "",
			}
		},
	}
</script>
