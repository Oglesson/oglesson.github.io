<script lang="ts">
	import Projectpg from '$lib/projectpg.svelte';

	/** TO DO : Add screenshots and more interesting visuals
	 * Find somewhere to host the app so it will function. Vercel? Netilfy? hmmm
	 */
</script>

<Projectpg
	pTitle="Chronology"
	pTechList={[
		'React',
		'React Router',
		'React Query',
		'TypeScript',
		'Jest',
		'Vite',
		'Tailwind',
		'Node'
	]}
>
	<p>
		Based loosely on more recent projects, this showcases added UI components built for an
		extensive project based on a system used to assist manfacturing businesses study their
		processes and find inefficiencies.
	</p>
	<p>
		The original API endpoints were built from a long standing legacy Delphi/SQL Server backend
		that had been developed over many years but contained very specialist algorhithms based on
		specific industry knowledge.
	</p>

	<ul>
		<li>
			<a href="https://github.com/Oglesson/chronology" rel="external noopener"
				>Source code on github - Currently Private</a
			>
		</li>
		<li>This will be a link to the hosted version eventually!</li>
	</ul>
</Projectpg>
