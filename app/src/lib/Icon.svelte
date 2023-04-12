<script>
	import feather from 'feather-icons/dist/icons.json';
	import icons from './icons';

	export let name = '';
	export let size = 24;
	export let color = '#000000';
</script>

{#if icons[name]}
	<svg width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		{@html feather[icons[name]]}
	</svg>
{/if}
