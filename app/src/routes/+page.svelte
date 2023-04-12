<script>
	import Sidebar from '$lib/Sidebar.svelte';
	import TopBar from '$lib/TopBar.svelte';
</script>

<div
	class="layout"
	style:--sidebar-width="700px"
>
	<TopBar />
	<div class="builder">
	</div>
	<Sidebar title="Catalogue" />
	<div class="bottom-bar">
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

	.builder {
		background-color: #F9F9F9;
		border-right: solid 1px var(--border-color);
		grid-area: builder;
		padding: 58px var(--page-padding) 0;
	}

	.bottom-bar {
		grid-area: bottom-bar;
		border-top: solid 1px var(--border-color);
	}
</style>
