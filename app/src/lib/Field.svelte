<script>
	import Icon from './Icon.svelte';
	export let field = {};
</script>

<div class="field {field.type}" style:grid-column="span {field.options.width}">
	<Icon name="field:{field.type}" size="22" />
	{field.name}
</div>

<style>
	.field {
		height: 52px;
		display: flex;
		align-items: center;
		border-radius: 6px;
		border: solid 1px #8C8C8C;
		padding: 0 21px;
		background-color: #FFFFFF;
		box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.1);
		color: rgba(0, 0, 0, .7);
		gap: 10px;
		cursor: pointer;
	}
</style>
