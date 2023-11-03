<script>
	import user from "../../../../data/testuser.json";
	import { fade } from "svelte/transition";
	import Select from "./select.svelte";

	let games = user.gamesOwned;
	sortBy("Nombre");

	function sortBy(selectedValue) {
		if (selectedValue === "Nombre") {
			games.sort((a, b) => {
				if (a.name < b.name) return -1;
				if (a.name > b.name) return 1;
				if (a.name === b.name) return 0;
			});
		}
		if (selectedValue === "Más jugados") {
			games.sort((a, b) => {
				return -(a.hrsPlayed - b.hrsPlayed);
			});
		}
		if (selectedValue === "Fecha adq.") {
			/*
			So, basically: Games need (or at least it would be best) to have their dates as a Unix timestamp, because when we add more games to the user, the 
			Date.now() method returns the Unix timestamp of this exact moment, and parsing back and forth would be pointless (can be done with Date.parse(), 
			but it would mean going timestamp -> string,  and then the other way around when comparing or doing anything).
			
			Methods that might be useful:
				Date.now();
				Date.parse();
				prototype.toLocaleString();

			*/

			games.sort((a, b) => {
				return -(a.adqDate - b.adqDate);
			})
		}
		games = games;
	}
</script>

<span class="library--urgames__title">Tus juegos</span>

<Select
	label="Ordenar por"
	values={["Nombre", "Más jugados", "Fecha adq."]}
	selectedValue="Nombre"    
	eventClick={sortBy}
/>

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
		letter-spacing: -1px;
	}
</style>
