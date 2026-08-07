<script lang="ts">
	import Projectpg from '$lib/projectpg.svelte';
	/** TO DO : Add screenshots and more interesting visuals
	 * Find somewhere to host the app so it will function. Vercel? Netlify? hmmm
	 */
</script>

<Projectpg
	pTitle="Chronology"
	pDescription="Chronology is a React, TypeScript and Tailwind CSS case study by Sophie Oglesson, showcasing UI components built for a manufacturing process-efficiency platform."
	pUrl="/chronology"
	pTechList={[
		'React',
		'React Router',
		'React Query',
		'TypeScript',
		'Jest',
		'Vite',
		'Tailwind',
		'SASS',
		'Express',
		'Auth0',
		'Storybook',
		'React Hook Form',
		'Zod',
		'Framer Motion',
		'i18next',
		'Recharts',
		'MSW',
		'Axios',
		'dnd-kit'
	]}
>
	<p>
		Based loosely on more recent projects, this showcases added UI components built for an
		extensive project based on a system used to assist manufacturing businesses study their
		processes and find inefficiencies.
	</p>
	<p>
		The original API endpoints were built from a long standing legacy Delphi/SQL Server backend
		that had been developed over many years but contained very specialist algorithms based on
		specific industry knowledge. I've setup a very basic Express server to mock the API
		endpoints to demonstrate the basic functionality whilst showcasing the front end components.
	</p>
	<p>
		I've no intention on building or extending this project, possibly just updating libraries if
		they pose a security risk.
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
