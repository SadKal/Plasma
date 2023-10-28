<script>

</script>

<div class="library--recents">
	<div class="library--recents__title">Jugado recientemente</div>
	<div class="library--recents__thumbnails">
		<div class="library--recents__thumbnails thumbnail--large" />
		<div class="library--recents__thumbnails thumbnail--small" />
		<div class="library--recents__thumbnails thumbnail--small" />
		<div class="library--recents__thumbnails thumbnail--small" />
		<div class="library--recents__thumbnails thumbnail--small" />
	</div>
</div>

<style lang="scss">

	$cyanish-gradient: linear-gradient(
		30deg,
		rgb(0, 255, 170) 0%,
		rgb(0, 0, 0) 100%
	);
	$purplish-gradient: linear-gradient(
		30deg,
		rgb(153, 0, 255) 0%,
		rgb(0, 0, 0) 100%
	);

    .library--recents {
		$text-color: rgb(209, 51, 100);
		width: 80%;
		margin: 0 auto;

		&__title {
			font-family: "Montserrat";
			font-weight: 600;
			color: $text-color;
			font-size: 2.5rem;
			margin-bottom: 20px;
			letter-spacing: 1px;
		}
    }
	.thumbnail {
		&--large {
				background: $cyanish-gradient;
				background-size: 150%;
				border-radius: 2%;
				height: 425px;
				width: 500px;
				display: inline-block;
			}

			&--small {
				background: $purplish-gradient;
				background-size: 200%;
				border-radius: 3%;
				height: 300px;
				width: 225px;
				margin-left: 1vw;
				display: inline-block;
			}
	}
</style>
