<script lang="ts">
	import Projectpg from '$lib/projectpg.svelte';

	/** TO DO : Add screenshots and more interesting visuals
	 */
</script>

<Projectpg
	pTitle="Chore Tracker"
	pDescription="Chore Tracker is a React Native and Firebase mobile app by Sophie Oglesson for tracking kids' chores and rewarding them for points earned."
	pUrl="/chore-tracker"
	pTechList={[
		'React Native',
		'React',
		'Expo',
		'TypeScript',
		'React Navigation',
		'Firebase',
		'AsyncStorage',
		'Jest'
	]}
>
	<p>
		This is a mobile app to track the chores done by my daughter. It will keep a note of each
		chore and assign points based on completion and quality. When a points target is hit, this
		will prompt a parent to implement a reward. There are possibly apps that already exist to do
		this, but decided to take the opportunity to build something new and learn React Native as
		I'd always wanted to!
	</p>
	<p>To begin with, this should have two types of user: child and parent.</p>
	<ul>
		<li>
			Child users will be able to see their chores and points, and a history of past point
			levels achieved. They can press a button to alert a parent when a chore has been done
			but will be prevented from doing this again until a parent has set a verified status on
			that chore.
		</li>
		<li>
			Parent users will be able to add chores, verify when a chore is done then assign points
			based on completeness. They will also be prompted when a reward target has been reached.
		</li>
	</ul>

	<p>
		A future extension I may consider, depending on the risks vs user experience, is to set
		financial reward limits and transfer money between parent and child accounts when a points
		limit is reached. This may not be possible and has a definite risk so will need to be
		assessed for viability!
	</p>
	<ul>
		<li>
			<a href="https://github.com/Oglesson/chore-tracker" rel="external noopener"
				>Source code on github - Work in Progress!</a
			>
		</li>
		<li>I've no plans to distribute this project at this time.</li>
	</ul>
</Projectpg>
