<script lang="ts">
	import Calendar from '../components/calendar.svelte';
	import Letter from '../components/letter.svelte';
	import Rsvp from '../components/rsvp.svelte';
	import Cover from '../components/cover.svelte';
	import Location from '../components/location.svelte';
	import AccountInfo from '../components/account-info.svelte';
	import FlowerWreath from '../components/flower-wreath.svelte';
	import Gallery from '../components/gallery.svelte';
	import Share from '../components/share.svelte';

	let form = null;
</script>

<Cover />
<Letter />
<Rsvp {form} />
<Calendar />
<Gallery />
<Location />
<AccountInfo />
<FlowerWreath />
<Share />
