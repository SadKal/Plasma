<script>
	import Recents from "./recents/Recents.svelte";
	import Library from "./yourgames/YourGames.svelte";
	import { onMount } from "svelte";

	onMount(() => {
		window.scrollTo(0, 0);
	});
</script>

<Recents />
<Library />

<style lang="scss">
</style>
