<script>
    
</script>

<div class="main_biblioteca__recientes">
	<div class="main_biblioteca__recientes-title">Jugado recientemente</div>
	<div class="main_biblioteca__recientes-thumbnails">
		<div class="main_biblioteca__recientes-thumbnails__large" />
		<div class="main_biblioteca__recientes-thumbnails__small" />
		<div class="main_biblioteca__recientes-thumbnails__small" />
		<div class="main_biblioteca__recientes-thumbnails__small" />
		<div class="main_biblioteca__recientes-thumbnails__small" />
	</div>
</div>

<style lang="scss">

	$greenish-gradient: linear-gradient(
		30deg,
		rgb(0, 255, 170) 0%,
		rgb(0, 0, 0) 100%
	);
	$purplish-gradient: linear-gradient(
		30deg,
		rgb(153, 0, 255) 0%,
		rgb(0, 0, 0) 100%
	);

    .main_biblioteca__recientes {
        $topbar-text-color: rgb(209, 51, 100);
		width: 80%;
		margin: 0 auto;

		&-title {
			font-family: "Montserrat";
			font-weight: 600;
			color: $topbar-text-color;
			font-size: 2.5rem;
			margin-bottom: 20px;
			letter-spacing: 1px;
		}

		&-thumbnails {
			&__large {
				background: $greenish-gradient;
				background-size: 150%;
				border-radius: 2%;
				height: 350px;
				width: 400px;
				display: inline-block;
			}

			&__small {
				background: $purplish-gradient;
				background-size: 200%;
				border-radius: 3%;
				height: 250px;
				width: 175px;
				margin-left: 30px;
				display: inline-block;
			}
		}
    }
</style>
