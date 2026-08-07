<script>
	import Mainlayout from '$lib/mainlayout.svelte';
	import Hero from '$lib/hero.svelte';
	import Projects from '$lib/projects.svelte';
	import Skills from '$lib/skills.svelte';
	import { SITE_URL, SITE_NAME } from '$lib/site';

	const title = 'Sophie Oglesson | Product Developer & Web Strategist';
	const description =
		'Sophie Oglesson is a product developer and strategist with 20+ years of experience in web development and digital planning, building better user experiences across industries.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={SITE_URL + '/'} />
</svelte:head>

<Mainlayout>
	<Hero />
	<Skills />
	<Projects />
</Mainlayout>
