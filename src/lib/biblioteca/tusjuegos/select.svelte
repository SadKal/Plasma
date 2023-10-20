<script>
	export let label = 'Ordenar por';
	export let size = 3;
	export let values = ["Más jugados", "Nombre", "Fecha de adquisición"];
	export let selectedValue = 'Mas jugados';
	export let disabled = false;
	export let eventClick = (_) => {};

	function selectValue(value) {
		selectedValue =
			value === selectedValue ? undefined : value;
		eventClick(selectedValue);
	}
</script>

<label>
	<span>{label}</span>

	<select
		aria-label={label}
		value={selectedValue}
		{disabled}
		on:click={() => selectValue()}
		{...$$restProps}
	>
		{#each values as value (value)}
			<option
				{disabled}
				on:click|stopPropagation={() =>
					selectValue(value)}
				{value}>{value}</option
			>
		{/each}
	</select>
</label>

<style>
	label {
		margin-right: 20px;
	}
	select {
		width: 120px;
		overflow: hidden;
		outline: none;
	}
</style>