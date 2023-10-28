<script>
	import user from "../../../../data/testuser.json";
    import Select from "./select.svelte"; 

	let games = Object.values(user.gamesOwned);
</script>

{#each games as game}
	<div
		class="gamelist__thumbnail"
		style="background-image: url('{game.cover}');"
	>
		&nbsp;
	</div>
{/each}

<style>
	.gamelist__thumbnail {
		height: 375px;
		width: 275px;
		display: inline-block;
		margin-right: 30px;
        margin-bottom: 20px;
		background-size: contain;
		background-repeat: round;
        margin-top: 30px;
        border-radius: 8px;
	}
</style>
