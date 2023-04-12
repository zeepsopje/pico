<script>
	export let borderRadius = 8;
	export let rotate = false;
	export let field;

	let offset = 0;

	if (rotate) {
		setInterval(() => {
			offset++;
		}, 30);
	}
</script>

<div class="dashed-border">
	<svg
		width="100%"
		height="100%"
		xmlns="http://www.w3.org/2000/svg"
		style:border-radius={borderRadius}
	>
		<rect
			width="100%"
			height="100%"
			fill="none"
			rx="{borderRadius}px"
			ry="{borderRadius}px"
			stroke="#333"
			stroke-width="1"
			stroke-dasharray="8"
			stroke-dashoffset={offset}
			stroke-linecap="square"
		>
		</rect>
	</svg>
</div>

<style>
	.dashed-border {
		position: relative;
	}

	svg {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
