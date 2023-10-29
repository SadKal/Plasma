<script>
	import user from "../../../data/testuser.json";
	let userLastPlayed = user.lastPlayed
	let games = Object.values(user.gamesOwned);

	let images = [];
    let i=0;
    while(i<5){
		if(!images.includes(userLastPlayed[i])){
			images.push(games[Number(userLastPlayed[i])-1].cover); // horrid type conversion from string to number
		i++;
		}
	}
</script>

<div class="library--recents">
	<div class="library--recents__title">Jugado recientemente</div>
	{#each images as img}
	<div
		class="library--recents__thumbnails thumbnail--small"
		style="background-image: url('{img}');"
	>
		&nbsp;
	</div>
{/each}

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
			font-size: 3rem;
			margin-bottom: 20px;
			letter-spacing: 1px;
		}
    }
	.thumbnail {
			&--small {
				border-radius: 3%;
				height: 300px;
				width: 225px;
				background-size: contain;
				background-repeat: round;
				margin-right: 12px;
				display: inline-block;
				transition: all .4s;

			}
			&--small:hover{
				border-radius: 2%;
				height: 550px;
				width: 425px;
				display: inline-block;
				background-size: contain;
				background-repeat: round;
				transition: all .2s;
				margin-right: 7px;
			}
	}
</style>
