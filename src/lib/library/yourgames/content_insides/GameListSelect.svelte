<script>
	export let label = "";
	export let values = [];
	export let selectedValue = "";
	export let disabled = false;
	export let eventClick = (_) => {};

	function selectValue(value) {
		eventClick(selectedValue);
	}
</script>

<select
	aria-label={label}
	bind:value={selectedValue}
	{disabled}
	on:change={() => selectValue()}
	{...$$restProps}
>
	{#each values as value (value)}
		<option
			{disabled}
			on:click|stopPropagation={() => selectValue(value)}
			{value}>{value}</option
		>
	{/each}
</select>

<style lang="scss">
	*,
	*::after,
	*::before {
		appearance: none;
		background-color: transparent;
		border: none;
		padding: 0 1em 0 0;
		margin: 0;
		width: 100%;
		font-family: inherit;
		font-size: inherit;
		cursor: inherit;
		line-height: inherit;
	}
	select {
		position: absolute;
		transform: translate(300px, -40px);
		font-size: 16px;
		margin-left: 20px;
		font-weight: 600;
		padding: 10px;
		vertical-align: bottom;
		color: var(--text-color);
		border: 4px solid var(--text-color);
		width: 150px;
		overflow: hidden;
		cursor: pointer;
		background-color: transparent;
		@media (max-width: 1080px) and (orientation: portrait) {
			//mobile
			transform: translate(200px, -50px);
		}
		@media (max-width: 450px) and (orientation: portrait) {
			//mobile
			transform: translate(175px, -50px);
		}
	}
</style>
