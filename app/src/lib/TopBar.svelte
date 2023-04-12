<script context="module">
	import { page } from '$app/stores';

	const nav = [
		{ label: 'My apps', href: '/' },
		{ label: 'Explore', href: '/explore' },
	];
</script>

<div class="top-bar">
	<div class="logo">
		<h2>PICO</h2>
	</div>
	<nav>
		{#each nav as item}
			<a
				href={item.href}
				class:current={item.href === $page.url.pathname}
			>
				{item.label}
			</a>
		{/each}
	</nav>
</div>

<style>
	.top-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 var(--page-padding);
		border-bottom: solid 1px var(--border-color);
		grid-area: top-bar;
	}

	.logo h2 {
		font-weight: bold;
		font-size: 24px;
	}

	nav {
		display: flex;
		gap: 43px;
	}

	nav a {
		text-decoration: none;
		color: #000;
	}

	nav a:not(.current) {
		opacity: .4;
	}
</style>
