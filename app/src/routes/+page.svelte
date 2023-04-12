<script>
	import { writable, get } from 'svelte/store';
	import { Text, Label, EmptySpace } from 'field';
	import Sidebar from '$lib/Sidebar.svelte';
	import TopBar from '$lib/TopBar.svelte';
	import Builder from '$lib/Builder.svelte';

	let app = writable({
		name: 'My app',
		fields: [
			new Label('Description'),
			new Text('Description', { width: 1 }),
			new Text('Description', { width: 2 }),
		],
	});
</script>

<div
	class="layout"
	style:--sidebar-width="700px"
>
	<TopBar />
	<Builder bind:app={app} />
	<Sidebar title="Catalogue" />
	<div class="bottom-bar">
		<div class="dev">
			<button on:click={alert(JSON.stringify($app, null, 4))}>debug</button>
		</div>
	</div>
</div>

<style type="text/csss">
	.layout {
		height: 100%;
		display: grid;
		grid-template-columns: 1fr calc(var(--sidebar-width) + var(--page-padding));
		grid-template-rows: 85px 1fr 100px;
		grid-template-areas:
		"top-bar top-bar"
		"builder sidebar"
		"bottom-bar bottom-bar";
	}

	.bottom-bar {
		grid-area: bottom-bar;
		border-top: solid 1px var(--border-color);
	}
</style>
