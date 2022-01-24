<template>
	<div>
		<h1>Les nouvelles combinaisons<YouTubeLink url="1vmzhmTobXc"/></h1>
		<table class="table table-responsive text-center">
			<tr>
				<td></td>
				<td>イィ<br>YI</td>
				<td></td>
				<td>イェ<br>YE</td>
				<td></td>
			</tr>
			<tr>
				<td>ウァ<br>WA</td>
				<td>ウィ<br>WI</td>
				<td>ウゥ<br>WU</td>
				<td>ウェ<br>WE</td>
				<td>ウォ<br>WO</td>
				<td></td>
				<td>ウュ<br>WYU</td>
			</tr>
			<tr>
				<td>ヴァ<br>VA</td>
				<td>ヴィ<br>VI</td>
				<td>ヴ<br>VU</td>
				<td>ヴェ<br>VE</td>
				<td>ヴォ<br>VO</td>
				<td>ヴャ<br>VYA</td>
				<td>ヴュ<br>VYU</td>
				<td>ヴィェ<br>VYE</td>
				<td>ヴョ<br>VYO</td>
			</tr>
			<tr>
				<td colspan="5"></td>
				<td colspan="2"></td>
				<td>キェ<br>KYE</td>
			</tr>
			<tr>
				<td colspan="5"></td>
				<td colspan="2"></td>
				<td>ギェ<br>GYE</td>
			</tr>
			<tr>
				<td>クァ／クヮ<br>KWA</td>
				<td>クィ<br>KWI</td>
				<td></td>
				<td>クェ<br>KWE</td>
				<td>クォ<br>KWO</td>
			</tr>
			<tr>
				<td>グァ／グヮ<br>GWA</td>
				<td>グィ<br>GWI</td>
				<td></td>
				<td>グェ<br>GWE</td>
				<td>グォ<br>GWO</td>
			</tr>
			<tr>
				<td></td>
				<td>スィ<br>SI</td>
				<td colspan="3" class="separate"></td>
			</tr>
			<tr>
				<td></td>
				<td>ズィ<br>ZI</td>
				<td colspan="3" class="separate"></td>
			</tr>
			<tr>
				<td colspan="5"></td>
				<td colspan="2"></td>
				<td>シェ<br>SHE</td>
			</tr>
			<tr>
				<td colspan="5"></td>
				<td colspan="2"></td>
				<td>ジェ<br>JE</td>
			</tr>
			<tr>
				<td></td>
				<td>ティ<br>TI</td>
				<td>トゥ<br>TU</td>
				<td colspan="2" class="separate"></td>
				<td class="no"></td>
				<td>テュ<br>TYU</td>
			</tr>
			<tr>
				<td></td>
				<td>ディ<br>DI</td>
				<td>ドゥ<br>DU</td>
				<td colspan="2" class="separate"></td>
				<td class="no"></td>
				<td>デュ<br>DYU</td>
			</tr>
			<tr>
				<td>ツァ<br>TSA</td>
				<td>ツィ<br>TSI</td>
				<td></td>
				<td>ツェ<br>TSE</td>
				<td>ツォ<br>TSO</td>
				<td></td>
				<td>ツュ<br>TSYU</td>
			</tr>
			<tr>
				<td colspan="5"></td>
				<td colspan="2"></td>
				<td>ニェ<br>NYE</td>
			</tr>
			<tr>
				<td colspan="2"></td>
				<td>ホゥ<br>HU</td>
				<td colspan="2" class="separate"></td>
				<td colspan="2"></td>
				<td class="no">ヒェ<br>HYE</td>
			</tr>
			<tr>
				<td colspan="5"></td>
				<td colspan="2"></td>
				<td>ビェ<br>BYE</td>
			</tr>
			<tr>
				<td colspan="5"></td>
				<td colspan="2"></td>
				<td>ピェ<br>PYE</td>
			</tr>
			<tr>
				<td>ファ<br>FA</td>
				<td>フィ<br>FI</td>
				<td></td>
				<td>フェ<br>FE</td>
				<td>フォ<br>FO</td>
				<td>フャ<br>FYA</td>
				<td>フュ<br>FYU</td>
				<td>フィェ<br>FYE</td>
				<td>フョ<br>FYO</td>
			</tr>
			<tr>
				<td colspan="5"></td>
				<td colspan="2"></td>
				<td>ミェ<br>MYE</td>
			</tr>
			<tr>
				<td colspan="5"></td>
				<td colspan="2"></td>
				<td>リェ<br>RYE</td>
			</tr>
			<tr>
				<td>ラ゜<br>LA</td>
				<td>リ゜<br>LI</td>
				<td>ル゜<br>LU</td>
				<td>レ゜<br>LE</td>
				<td>ロ゜<br>LO</td>
				<td>リ゜ャ<br>LYA</td>
				<td>リ゜ュ<br>LYU</td>
				<td>リ゜ェ<br>LYE</td>
				<td>リ゜ョ<br>LYO</td>
			</tr>
		</table>
	</div>
</template>

<style scoped>
	td.separate, td:not([colspan]):nth-child(5), td[colspan="5"] {
		border-right: 2px double black;
	}
	td.no {
		border-right: none !important;
	}
</style>

<script>
	import YouTubeLink from '../../../../components/YouTubeLink.vue'

	export default {
		name: 'NouvellesCombinaisons',
		components: {
			YouTubeLink,
		},
	}
</script>
