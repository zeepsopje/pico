<script>
	import Field from './Field.svelte';
	import EmptySpace from './EmptySpace.svelte';
	import DashedBorder from './helper/DashedBorder.svelte';
	export let fields = [];

	const componentMap = {
		'empty-space': DashedBorder,
		'default': Field,
	};
</script>

<div class="fields">
	{#each fields as field, i}
		<svelte:component
			this={componentMap[field.type] || componentMap['default']}
			bind:field
		/>
	{/each}
</div>

<style>
	.fields {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: repeat(auto, 1fr);
		gap: 16px;
		flex-wrap: wrap;
	}
</style>
