<script>
	import { onMount, onDestroy } from "svelte";
	import Header from "$header/Header.svelte";
	import Page from "$utils/Page.svelte";
	import games from "$data/games.json"
	import pagesStore from "$stores/pages";
	import libraryStore from "$stores/library";
	import Footer from "./lib/footer/Footer.svelte";
	import cartStore from "$stores/cart";
	import Login from "./lib/login/Login.svelte";
	import Register from "./lib/login/Register.svelte";
  import Profile from "$profile/Profile.svelte";

	$: {
		if ($pagesStore.active == "Inicio") {
			scrollOnLoad();
		}
	}

	function scrollOnLoad() {
		requestAnimationFrame(() => {
			if (window.matchMedia("(max-width: 420px)").matches) {
				window.scrollTo(0, 400);
			} else {
				window.scrollTo(0, 90);
			}
		});
	}

	onMount(() => {
		//Odio los navegadores modernos
		//El navegador tiene en el historial una variable que hace que vuelva al inicio de la pagina al cargar
		if ("scrollRestoration" in history) {
			history.scrollRestoration = "manual";
		}
		$libraryStore.recentlyPlayed = $libraryStore.fetchRecents(0, (games.data.length - 1))
		$libraryStore.gamesInLibrary = $libraryStore.fetchOwned(0, (games.data.length - 1))
	});
</script>

<div class="main">
	<Header />
	<Page />
	<Footer />
</div>

<style lang="scss">
</style>
