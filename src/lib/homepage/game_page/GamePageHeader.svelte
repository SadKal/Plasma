<script>
    import cartStore from "$stores/cart";
	import shopGameStore from "$stores/shopGame";
	import GamePageContent from "./GamePageContent.svelte";
	import { onMount } from "svelte";

	let game = $shopGameStore.currentShopGame;
	let gameInCart = false;

	function setGameInCart(){
		cartStore.addGameToCart(game);
		gameInCart = true;
		setTimeout(() => {
			$cartStore.cartActive=true;
		}, 350);
		setTimeout(() => {
			$cartStore.cartActive=false;
		}, 2000);
		
	};

	onMount(() => {
        window.scrollTo(0, 0);
		if ($cartStore.gamesInCart.includes(game)){
			gameInCart=true;
		}
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

<div class="shopGame__toCart" on:click={setGameInCart}> <!-- once linked to library, check if already there and change accordingly-->
	Añadir al carrito: {game.price/100}€
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
		filter: blur(2rem);
		position: relative;
	}
	.shopGame__coverArt {
		height: 21vw;
		width: 16%;
		position: absolute;
		top: 15%;
		left: 70%;
		float: right;
		background-size: cover;
		background-repeat: round;
		border-radius: 1%;
		transition: all .4s ease-in-out;
		opacity: 100%;

		&.active{
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
		padding: 1% 4%;
		top: 50%;
		left: 10%;
		clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
		font-size: 2rem;
		position: absolute;
	}
	.shopGame__toCart {
		background-color: var(--add-to-cart-button-background);

		color: var(--search-result-hover-color);
		font-size: 1.35rem;
		text-align: center;
		margin: 0 auto;
		width: 10%;
		margin-top: 14px;
		position: absolute;
		top: 47%;
		left: 10%;
		padding: 1% 4%;
		clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
		cursor: pointer;
		user-select: none;
		
		&:hover {
			scale: 1.1;
		}
		transition: all .2s;
	}
</style>