<script>
	import { fade } from "svelte/transition";
	import user from "../../../../data/testuser.json";
	import Select from "./select.svelte";
	import { flip } from "svelte/animate";
	import { cubicOut, elasticInOut, expoInOut } from "svelte/easing";

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
			});
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

{#each games as game (game.id)}
	<div
		class="gamelist__content"
		style="background-image: url('{game.cover}');"
		animate:flip={{ duration: 400, delay: 20 * game.id, easing: expoInOut }}
	>
		&nbsp;
		<div class="gamelist__content_shine">&nbsp;</div>
		<span class="gamelist__content_title" in:fade={{ duration: 800 }}>
			{game.name}
		</span>
	</div>
{/each}

<style lang="scss">
	.gamelist__content {
		height: 375px;
		width: 275px;
		display: inline-block;
		margin-right: 30px;
		margin-bottom: 10px;
		background-size: contain;
		background-repeat: round;
		margin-top: 30px;
		border-radius: 8px;
		transition: all 0.2s;

		&:hover {
			scale: 1.05;
			transition: all 0.4s;
		}
		&:hover &_title {
			opacity: 95%;
			transition-duration: 0.75s;
		}

		&_title {
			background-color: var(--topbar-background-color);
			padding: 6% 10%;
			color: var(--selected-text-color);
			position: relative;
			text-align: center;
			opacity: 0;
			transition: all 0.25s;
			font-weight: 900;
			border-radius: 0px 16px 16px 0px;
			font-size: 1.2rem;
			top: 65%;
			display: inline-table;
		}
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
