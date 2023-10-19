<script>
	import Header from "../header/Header.svelte";
</script>

<Header />

<div class="main_biblioteca">
	<div class="main_biblioteca__title">Tu biblioteca</div>
	<div class="main_biblioteca__recientes">
		<div class="main_biblioteca__recientes-title">Jugado recientemente</div>
		<div class="main_biblioteca__recientes-thumbnails" >
            <div class="main_biblioteca__recientes-thumbnails__large"></div>
            <div class="main_biblioteca__recientes-thumbnails__small"></div>
            <div class="main_biblioteca__recientes-thumbnails__small"></div>
            <div class="main_biblioteca__recientes-thumbnails__small"></div>
            <div class="main_biblioteca__recientes-thumbnails__small"></div>
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

    $cyan-gradient: linear-gradient(30deg, rgba(0,255,224,1) 0%, rgba(2,0,36,1) 100%); 

	.main_biblioteca {
		background-color: unset;

		&__title {
			padding: 10rem;
			text-align: center;
			font-size: 5rem;
			font-family: "Montserrat";
			font-weight: 600;
			color: $topbar-text-color;
		}

		&__recientes {
            width: 80%;
            margin: 0 auto;

			&-title {
				font-family: "Montserrat";
				font-weight: 600;
				color: $topbar-text-color;
				font-size: 2rem;
			}

            &-thumbnails{

                &__large {
                    
                    background: $cyan-gradient;
                    height: 250px;
                    
                }

                &__small {

                }
            }
		}
	}
</style>
