<script>
	import Select from "./select.svelte";
</script>

<div class="urgames_biblioteca">
	<div class="urgames_biblioteca__title">
		<span>Tus juegos</span>
		<Select />
		<br><br>
		<div class="urgames_biblioteca__content">
			<div class="urgames_biblioteca__content-row" />
			<div class="urgames_biblioteca__content-row" />
			<div class="urgames_biblioteca__content-row" />
		</div>
	</div>
</div>

<style lang="scss">
	$text-color: rgb(209, 51, 100);
	.urgames_biblioteca {

        padding-top: 100px;
		width: 75%;
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
