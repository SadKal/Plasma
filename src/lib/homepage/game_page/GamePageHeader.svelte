<script>
	import cartStore from "$stores/cart";
	import shopGameStore from "$stores/shopGame";
	import libraryStore from "$stores/library";
	import GamePageContent from "./GamePageContent.svelte";
	import { onMount } from "svelte";

	let game = $shopGameStore.currentShopGame;
	let gameInCart = false;
	let gameOwned = false;

	$: if ($libraryStore.gamesInLibrary.includes(game)) {
		gameOwned = true;
	}

	$: if ($cartStore.gamesInCart.includes(game)) {
		gameInCart = true;
	} else {
		gameInCart = false;
	}
	function setGameInCart() {
		if (!gameOwned) {
			cartStore.addGameToCart(game);
			gameInCart = true;
			setTimeout(() => {
				$cartStore.cartActive = true;
			}, 350);
			setTimeout(() => {
				$cartStore.cartActive = false;
			}, 2000);
		}
	}

	onMount(() => {
		window.scrollTo(0, 0);
	});
</script>

<div class="shopGame__container">
	<div class="shopGame__gameBG" style="background-image: url({game.image});" />
	<div
		class="shopGame__coverArt"
		class:active={gameInCart}
		style="background-image: url({game.cover});"
	/>
	<div class="shopGame__title">
		<span>{game.name}</span>
	</div>
</div>

<div class="shopGame__toCart" on:click={setGameInCart}>
	{#if gameOwned}
		Ya tienes este juego.
	{:else if gameInCart}
		Juego ya en el carrito.
	{:else}
		Añadir al carrito: {game.price / 100}€
	{/if}
</div>

<GamePageContent />

<style lang="scss">
	* {
		animation-name: fadein;
		animation-duration: var(--seconds-fadein);
		animation-timing-function: ease-in;
	}
	.shopGame__container {
		position: relative;
		width: 100%;
		margin: 0 auto;
	}
	.shopGame__gameBG {
		height: 60vh;
		background-repeat: round;
		background-size: cover;
		filter: blur(1.5rem);
		position: relative;
		z-index: 0;
		
		margin: 25px 0px 0px -25px;
		@media (max-width: 650px) {
			height: 40vh;
		}
	}
	.shopGame__coverArt {
		height: 23vw;
		width: 18%;
		position: absolute;
		top: 20%;
		left: 70%;

		background-size: cover;
		background-repeat: round;
		border-radius: 1%;
		transition: all 0.4s ease-in-out;
		opacity: 100%;
		@media (max-width: 1050px) {
			height: 50%;
			width: 30%;
			left: 62.5%;
		}
		@media (max-width: 650px) {
			height: 43vw;
			width: 33%;
			left: 55%;
			top: 10%;
		}

		&.active {
			opacity: 0;
			top: -10%;
			width: 0;
			height: 0;
			left: 100%;
		}
	}
	.shopGame__title {
		background-color: var(--game-title-background-color);

		color: var(--selected-text-color);
		padding: .75rem 2rem;
		top: 40%;
		left: 10%;
		clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
		font-size: 2rem;
		position: absolute;
		@media (max-width: 650px) {
			font-size: 2rem;
			margin: 0 auto;
			top: 10%;
			padding: 3% 7%;
		}
	}
	.shopGame__toCart {
		background-color: var(--add-to-cart-button-background);

		color: var(--search-result-hover-color);
		font-size: 1.35rem;
		text-align: center;
		margin: 0 auto;
		width: 15%;
		margin-top: 14px;
		position: absolute;
		top: 45%;
		left: 10%;
		padding: .75rem 2rem;
		clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
		cursor: pointer;
		user-select: none;
		@media (max-width: 650px) {
			top: 30%;
			width: 25%;
			font-size: 1rem;
		}

		&:hover {
			scale: 1.1;
		}
		transition: all 0.2s;
	}
</style>
