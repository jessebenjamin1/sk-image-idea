<script context="module">
	import Image from '../lib/components/Image.svelte';
	import firstMeta from '../static/images/car.jpg?width=300&metadata';
	const firstWidth = firstMeta.width;
	const firstHeight = firstMeta.height;
	const firstSrc = firstMeta.src;
	import firstPlaceholder from '../static/images/car.jpg?w=10&blur=10&quality=5';
	import firstSrcset from '../static/images/car.jpg?w=288;576;900;1280;1920&format=webp;jpg&srcset&quality=80';
</script>

<div>
	<Image
		loading="eager"
		srcset={firstSrcset}
		src={firstSrc}
		width={firstWidth}
		height={firstHeight}
		alt="car wreck with light trails"
		placeholder={firstPlaceholder}
	/>
	<h1>This is an Image Component test</h1>
</div>

<style>
	div {
		padding-top: 4rem;
		margin-inline-start: auto;
		margin-inline-end: auto;
		width: 87%;
		max-width: 48rem;
	}
</style>
