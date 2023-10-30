<script>
	import Thumbnails from "./thumbnails.svelte";
</script>

<div class="library--recents">
	<div class="library--recents__title">Tu biblioteca</div>
	<Thumbnails />
</div>

<style lang="scss">


	*{
        animation-name: fadein;
        animation-duration: var(--seconds-fadein);
        animation-timing-function: ease-in;
    }
	.library--recents {
		background-color: unset;
		border-bottom: 7px solid var(--text-color);
		padding-bottom: 100px;
		&__title {
			padding: 10rem;
			text-align: center;
			font-size: 80px;
			font-family: "Montserrat";
			font-weight: 600;
			color: var(--text-color);
			letter-spacing: -1px;
		}
	}
</style>
