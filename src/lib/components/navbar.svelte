<script>
	import Icon from 'svelte-icons-pack/Icon.svelte'
	import BiArrowBack from "svelte-icons-pack/bi/BiArrowBack";
	import BiSolidHome from "svelte-icons-pack/bi/BiSolidHome";
	import BsPerson from "svelte-icons-pack/bs/BsPerson";

</script>

<div class='border border-black rounded-lg'>
<div class="p-2">
<ul class="flex flex-row gap-2 items-center justify-between">
	<li><Icon src ={BiArrowBack} size={20} /></li>
	<li><Icon src={BiSolidHome} size={20} /></li>
	<li><Icon src={BsPerson} size={20} /></li>
</ul>
</div>
</div>
