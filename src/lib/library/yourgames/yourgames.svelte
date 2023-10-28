<script>
	import Gamelist from "./content_insides/gamelist.svelte";
import Select from "./content_insides/select.svelte";
</script>

<div class="library--urgames">
	<div class="library--urgames__title">
		<span>Tus juegos</span>
		<Select />
		<br><br>
		<div class="library--urgames__content">
			<Gamelist />
		</div>
	</div>
</div>

<style lang="scss">
	$text-color: rgb(209, 51, 100);
	.library--urgames {

        padding-top: 100px;
		width: 80%;
		margin: 0 auto;

		&__title span {
			font-family: "Montserrat";
			font-weight: 600;
			color: $text-color;
			font-size: 2.5rem;

			letter-spacing: 1px;
		}
	}
</style>
