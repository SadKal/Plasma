<script>
	export let label = "Ordenar por";
	export let values = [
		"Ordenar por",
		"Más jugados",
		"Nombre",
		"Fecha de adquisición",
	];
	export let selectedValue = "Ordenar por";
	export let disabled = false;
	export let eventClick = (_) => {};

	function selectValue(value) {
		selectedValue = value === selectedValue ? undefined : value;
		eventClick(selectedValue);
	}
</script>


	<select
		aria-label={label}
		value={selectedValue}
		{disabled}
		on:click={() => selectValue()}
	>
		{#each values as value (value)}
			<option
				{disabled}
				on:click|stopPropagation={() => selectValue(value)}
				{value}>{value}</option
			>
		{/each}
	</select>


<style>
	select {
		width: 120px;
		overflow: hidden;
		outline: none;
	}
</style>
