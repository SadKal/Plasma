<script>
	import libraryStore from "$stores/library";

</script>

<div class="library--recents">
	<div class="library--recents__title">Jugado recientemente</div>
	{#each $libraryStore.recentlyPlayed as img}
		<div
			class="library--recents__thumbnails thumbnail--small"
			style="background-image: url('{img.cover}');"
		/>
	{/each}
</div>

<style lang="scss">
	.library--recents {
		width: 90%;
		margin: 0 auto;

		&__title {
			font-weight: 600;
			color: var(--text-color);
			font-size: 3rem;
			margin-bottom: 20px;
			letter-spacing: 1px;
			@media (max-width: 1080px) and (orientation: portrait) {
				// "jugado recientemente"
				//mobile
				font-size: 2rem;
				&:hover {
					scale: 1.05;
				}
			}
		}
	}
	.thumbnail {
		&--small {
			border-radius: 1%;
			height: 22vw;
			width: 18%;
			background-size: contain;
			background-repeat: round;
			margin-right: 2%;
			margin-bottom: 1%;
			display: inline-block;
			transition: all 0.4s;
			@media (max-width: 1750px) and (orientation: landscape) {
				//usual desktop width (1080p)
				height: 25vw;
				width: 23%;
			}
			@media (max-width: 1366px) and (orientation: landscape) {
				//old desktop width
				width: 31%;
				height: 33vw;
			}
			@media (max-width: 1080px) and (orientation: portrait) {
				//thumbnails
				//mobile
				width: 46%;
				margin-right: 4%;
				margin-top: 2%;
				height: 56vw;
			}
		}
		&--small:hover,
		&--small:active {
			border-radius: 2%;
			scale: 1.05;
			display: inline-block;
			background-size: contain;
			background-repeat: round;
			transition: all 0.2s;
			margin-top: 1%;
			margin-bottom: 2%;
		}
	}
</style>
