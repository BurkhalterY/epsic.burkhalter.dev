<template>
	<div>
		<h1>Les hiragana<YouTubeLink url="_PCJnq_-oT8"/></h1>
		<p>Les hiragana sont un alphabet de syllabes et non pas de sons comme nous avons en français.</p>
		<table class="table table-responsive text-center">
			<tr>
				<td>あ<br>a</td>
				<td>い<br>i</td>
				<td>う<br>u</td>
				<td>え<br>e</td>
				<td>お<br>o</td>
				<td class="text-left"><br>Voyelles seules</td>
			</tr>
			<tr>
				<td>か<br>ka</td>
				<td>き<br>ki</td>
				<td>く<br>ku</td>
				<td>け<br>ke</td>
				<td>こ<br>ko</td>
				<td class="text-left"><br>Les voyelles se combinent avec une consonne pour former une syllabe</td>
			</tr>
			<tr>
				<td>さ<br>sa</td>
				<td>し<br>shi</td>
				<td>す<br>su</td>
				<td>せ<br>se</td>
				<td>そ<br>so</td>
				<td class="text-left"><br>Attention: s + i = shi</td>
			</tr>
			<tr>
				<td>た<br>ta</td>
				<td>ち<br>chi</td>
				<td>つ<br>tsu</td>
				<td>て<br>te</td>
				<td>と<br>to</td>
				<td class="text-left"><br>Attention: t + i = chi; t + u = tsu</td>
			</tr>
			<tr>
				<td>な<br>na</td>
				<td>に<br>ni</td>
				<td>ぬ<br>nu</td>
				<td>ね<br>ne</td>
				<td>の<br>no</td>
			</tr>
			<tr>
				<td>は<br>ha</td>
				<td>ひ<br>hi</td>
				<td>ふ<br>fu</td>
				<td>へ<br>he</td>
				<td>ほ<br>ho</td>
				<td class="text-left"><br>Attention: h + u = fu</td>
			</tr>
			<tr>
				<td>ま<br>ma</td>
				<td>み<br>mi</td>
				<td>む<br>mu</td>
				<td>め<br>me</td>
				<td>も<br>mo</td>
			</tr>
			<tr>
				<td>ざ<br>ya</td>
				<td></td>
				<td>ず<br>yu</td>
				<td></td>
				<td>ぞ<br>yo</td>
				<td class="text-left"><br>Pas de yi ni de ye</td>
			</tr>
			<tr>
				<td>ら<br>ra</td>
				<td>リ<br>ri</td>
				<td>る<br>ru</td>
				<td>れ<br>re</td>
				<td>ろ<br>ro</td>
				<td class="text-left"><br>Prononciation entre l et r</td>
			</tr>
			<tr>
				<td>わ<br>wa</td>
				<td style="background-color: #ccc;">ゐ<br>wi</td>
				<td></td>
				<td style="background-color: #ccc;">ゑ<br>we</td>
				<td>を<br>wo</td>
				<td class="text-left"><br>wo se prononce comme o; wi et we n'existent plus</td>
			</tr>
			<tr>
				<td colspan="4"></td>
				<td>ん<br>n</td>
			</tr>
		</table>
	</div>
</template>

<script>
	import YouTubeLink from '../../../../components/YouTubeLink.vue'

	export default {
		name: 'Hiragana',
		components: {
			YouTubeLink,
		},
	}
</script>
