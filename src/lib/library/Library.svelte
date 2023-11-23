<script>
	import Recents from "./recents/Recents.svelte";
	import YourGames from "./yourgames/YourGames.svelte";
	import { onMount } from "svelte";

	onMount(() => {
		window.scrollTo(0, 0);
	});
</script>

<Recents />
<YourGames />

<style lang="scss">
</style>
