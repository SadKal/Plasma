<script>
	import Gamelist from "./content_insides/gamelist.svelte";
	import Select from "./content_insides/select.svelte";
</script>

<div class="library--urgames">
	<div class="library--urgames__title">

		<div class="library--urgames__content">
			<Gamelist />
		</div>
	</div>
</div>

<style lang="scss">
	$text-color: rgb(209, 51, 100);

	*{
        animation-name: fadein;
        animation-duration: var(--seconds-fadein);
        animation-timing-function: ease-in;
    }
	.library--urgames {

        padding-top: 100px;
		width: 80%;
		margin: 0 auto;

		&__title span {
			font-family: "Montserrat";
			font-weight: 600;
			color: var(--text-color);
			font-size: 3rem;
			letter-spacing: 1px;

		}
	}
</style>
