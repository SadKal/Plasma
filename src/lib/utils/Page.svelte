<script>
    import pagesStore from "$stores/pages";
    import { onMount } from "svelte";

    export let id;
    export let pages;

    onMount(() => {
		if (!(id in $pagesStore)) {
			$pagesStore[id] = $pagesStore.active;
		}
	});
</script> 

{#each pages as { component }}
    {#if $pagesStore[id] == $pagesStore.active}
        <svelte:component this={component}/>
    {/if}
{/each}
