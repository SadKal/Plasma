<script>
	import user from "../../../../data/testuser.json";
    import Select from "./select.svelte"; 

	let games = Object.values(user.gamesOwned);
	
	function sortBy(selectedValue){
		//placeholder
	}

</script>

<span class="library--urgames__title">Tus juegos</span>
<Select 
label = "Ordenar por"
values = {["Nombre", "Más jugados", "Fecha adq."]}
selectedValue = "Nombre"
eventClick={sortBy}/>
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
        margin-bottom: 10px;
		background-size: contain;
		background-repeat: round;
        margin-top: 30px;
        border-radius: 8px;
	}
	.library--urgames__title {
			position: absolute;
			margin-top: -50px;
			font-family: "Montserrat";
			font-weight: 600;
			color: var(--text-color);
			font-size: 3rem;
			letter-spacing: 1px;

	}
</style>
