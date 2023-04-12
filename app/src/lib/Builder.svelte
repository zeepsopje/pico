<script>
	import FieldList from '$lib/FieldList.svelte';

	export let app;
</script>

<div class="builder">
	<header>
		<h2>{$app.name}</h2>
	</header>
	<FieldList bind:fields={$app.fields} />
</div>

<style>
	.builder {
		background-color: #F9F9F9;
		border-right: solid 1px var(--border-color);
		grid-area: builder;
		padding: 58px var(--page-padding) 0;
	}

	header {
		margin-bottom: 48px;
		display: block;
	}
</style>
