<script>
	export let title;
</script>

<div class="sidebar">
	{#if title}
		<header>
			<h2>{title}</h2>
		</header>
	{/if}
</div>

<style>
	header {
		height: 137px;
		padding: 0 0 28px var(--page-padding);
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		border-bottom: solid 1px var(--border-color);
	}

	.sidebar {
		grid-area: sidebar;
		padding: 0 var(--page-padding) 0 0;
	}
</style>
