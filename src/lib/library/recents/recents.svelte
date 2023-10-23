<script>
	import Thumbnails from "./thumbnails.svelte";
</script>

<div class="main_biblioteca">
	<div class="main_biblioteca__title">Tu biblioteca</div>
	<Thumbnails />
</div>

<style lang="scss">
	$text-color: rgb(209, 51, 100);
	.main_biblioteca {
		background-color: unset;
		border-bottom: 7px solid $text-color;
		padding-bottom: 100px;

		&__title {
			padding: 10rem;
			text-align: center;
			font-size: 80px;
			font-family: "Montserrat";
			font-weight: 600;
			color: $text-color;
			letter-spacing: 3px;
		}
	}
</style>
