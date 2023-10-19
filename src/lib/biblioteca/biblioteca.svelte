<script>
	import Header from "../header/Header.svelte";
</script>

<Header />

<div class="main_biblioteca">
	<div class="main_biblioteca__title">Tu biblioteca</div>
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
</div>
<div class="urgames_biblioteca">
	<div class="urgames_biblioteca__title" />
	<div class="urgames_biblioteca__content">
		<div class="urgames_biblioteca__content-row" />
		<div class="urgames_biblioteca__content-row" />
		<div class="urgames_biblioteca__content-row" />
	</div>
</div>

<style lang="scss">
	$topbar-text-color: rgb(209, 51, 100);
	$topbar-background-color: rgb(0, 74, 64);

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

	.main_biblioteca {
		background-color: unset;
        border-bottom: 7px solid $topbar-text-color;
        padding-bottom: 100px;

		&__title {
			padding: 10rem;
			text-align: center;
			font-size: 5rem;
			font-family: "Montserrat";
			font-weight: 600;
			color: $topbar-text-color;
            letter-spacing: 3px;
		}

		&__recientes {
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
	}
</style>
