<script context="module">
	import Image from '../lib/components/Image.svelte';
	import firstMeta from '../static/images/car.jpg?width=300&metadata';
	const firstWidth = firstMeta.width;
	const firstHeight = firstMeta.height;
	const firstSrc = firstMeta.src;
	import firstPlaceholder from '../static/images/car.jpg?w=10&blur=10&quality=5';
	import firstSrcset from '../static/images/car.jpg?w=288;576;900;1280;1920&format=webp;jpg&srcset&quality=80';
	import secondMeta from '../static/images/bee.jpg?width=300&metadata';
	const secondWidth = secondMeta.width;
	const secondHeight = secondMeta.height;
	const secondSrc = secondMeta.src;
	import secondPlaceholder from '../static/images/bee.jpg?w=10&blur=10&quality=5';
	import secondSrcset from '../static/images/bee.jpg?w=288;576;900;1280;1920&format=webp;jpg&srcset&quality=80';
	import thirdMeta from '../static/images/bee.jpg?width=300&metadata';
	const thirdWidth = thirdMeta.width;
	const thirdHeight = thirdMeta.height;
	const thirdSrc = thirdMeta.src;
	import thirdPlaceholder from '../static/images/boat.jpg?w=10&blur=10&quality=5';
	import thirdSrcset from '../static/images/boat.jpg?w=288;576;900;1280;1920&format=webp;jpg&srcset&quality=80';
	import fourthMeta from '../static/images/mussels.jpg?width=300&metadata';
	const fourthWidth = fourthMeta.width;
	const fourthHeight = fourthMeta.height;
	const fourthSrc = fourthMeta.src;
	import fourthPlaceholder from '../static/images/mussels.jpg?w=10&blur=10&quality=5';
	import fourthSrcset from '../static/images/mussels.jpg?w=288;576;900;1280;1920&format=webp;jpg&srcset&quality=80';
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
	<p>I will put in some sample text to space stuff out so you can get the lazy loading effect</p>
	<Image
		loading="eager"
		srcset={secondSrcset}
		src={secondSrc}
		width={secondWidth}
		height={secondHeight}
		alt="bee on a flower"
		placeholder={secondPlaceholder}
	/>
	<p>I will put in some sample text to space stuff out so you can get the lazy loading effect</p>
	<Image
		loading="eager"
		srcset={thirdSrcset}
		src={thirdSrc}
		width={thirdWidth}
		height={thirdHeight}
		alt="boat on water with trees in background"
		placeholder={thirdPlaceholder}
	/>
	<p>I will put in some sample text to space stuff out so you can get the lazy loading effect</p>
	<Image
		loading="eager"
		srcset={fourthSrcset}
		src={fourthSrc}
		width={fourthWidth}
		height={fourthHeight}
		alt="black mussels on a rock"
		placeholder={fourthPlaceholder}
	/>
</div>

<style>
	div {
		padding: 4rem 0;
		margin-inline-start: auto;
		margin-inline-end: auto;
		width: 87%;
		max-width: 48rem;
		display: grid;
		gap: 3rem;
	}
</style>
