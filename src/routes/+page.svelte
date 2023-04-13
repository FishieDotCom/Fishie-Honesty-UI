<script>
	// import {Icon} from '@iconify/svelte';
	// import {FaTelegramPlane} from 'svelte-icons/fa';

	// i know this is the solution, but i dont know why it no wooooork

	import { Login } from 'sveltegram';
	// import IframeLoader from "svelte-iframe-loader";

	// const iframeSrc = "https://telegram.org/js/telegram-widget.js?22";
</script>

<section>
	<div class="container">
		<div class="text-center my-40">
			<h1 class="text-3xl sm:text-4xl font-bold">Honesty</h1>
			<sub class="text-sm">By Fishie</sub>
		</div>
	</div>
	<div class="p-10 sm:p-20" />
	<div class="p-10" />

	<div class="relative mx-auto h-10 w-72">
		<div class="absolute left-0 top-0 mx-auto inset-0 -z-50 w-5 h-auto">
			<div class="inline-flex items-center my-auto space-x-2 animate-pulse">
				<div class="w-4 h-4 rounded-full bg-gray-400" />
				<div class="w-4 h-4 rounded-full bg-gray-400" />
				<div class="w-4 h-4 rounded-full bg-gray-400" />
			</div>
		</div>
		<div class="absolute left-0 top-0 mx-auto w-72">
			<Login
				size="large"
				username="Fishie_Honesty_bot"
				requestAccess={true}
				on:auth={(...args) => {
					console.log(args);
				}}
			/>
		</div>
		<!-- <iframe class="w-full h-full" src={iframeSrc}  title="Telegram logger"/> -->
	</div>

	<footer class="container mx-auto">
		<div class="flex justify-center items-center">
			<!-- <button class="btn btn-error">
				<a href="">Login via Telegram</a>
				Click here to login
			</button>
			<script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="Fishie_Honesty_bot" data-size="large" data-auth-url="/" data-request-access="write"></script>
			<Login
				username="Fishie_Honesty_bot"
				requestAccess=true
				size="large"
				/> -->
		</div>
	</footer>
</section>
