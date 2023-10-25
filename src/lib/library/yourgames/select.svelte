<script>
	export let label = "Ordenar por";
	export let values = [
		"Más jugados",
		"Nombre",
		"Fecha adq.",
	];
	export let selectedValue = values[0];
	export let disabled = false;
	export let eventClick = (_) => {};

	function selectValue(value) {
		selectedValue = value === selectedValue ? selectedValue : value;
		eventClick(selectedValue);
	}
</script>

<select
	aria-label={label}
	value={selectedValue}
	{disabled}

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
		$text-color: rgb(209, 51, 100);
		margin-left: 20px;
		padding: 10px;
		vertical-align: bottom;
		color: $text-color;
		border: 4px solid $text-color;
		width: 150px;
		overflow: hidden;
		cursor: pointer;
		background-color: transparent;
		font-family: "Montserrat";
	}
</style>
