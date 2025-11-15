<script>
	import { onMount, onDestroy } from 'svelte';
	import { Play, Pause, Music2 } from '@lucide/svelte';
	import defaultMusic from '../lib/assets/music/Brian Crain - Butterfly Waltz (Overhead Camera) - Brian Crain.mp3';

	let audioEl;
	let isPlaying = false;
	let userInteracted = false;
	const src = import.meta.env.VITE_BGM_URL || defaultMusic;

	function tryPlay() {
		if (!audioEl) return;
		audioEl.play().then(() => {
			isPlaying = true;
			try {
				localStorage.setItem('bgmEnabled', 'true');
			} catch {}
		}).catch(() => {
			// Autoplay blocked; will retry on first interaction
		});
	}

	function togglePlay() {
		if (!audioEl) return;
		if (isPlaying) {
			audioEl.pause();
			isPlaying = false;
			try {
				localStorage.setItem('bgmEnabled', 'false');
			} catch {}
		} else {
			tryPlay();
		}
	}

	function onFirstInteraction() {
		if (userInteracted) return;
		userInteracted = true;
		// Always attempt to start on first interaction (iOS policy)
		tryPlay();
		detachInteractionListeners();
	}

	function onEnded() {
		// Ensure loop behavior across some mobile browsers
		if (!audioEl) return;
		audioEl.currentTime = 0;
		audioEl.play().catch(() => {});
	}

	function attachInteractionListeners() {
		// Use only a single lightweight trigger to avoid interfering with other clicks
		window.addEventListener('pointerdown', onFirstInteraction, { passive: true, once: true });
		document.addEventListener('visibilitychange', () => {
			if (document.visibilityState === 'visible' && !isPlaying) {
				tryPlay();
			}
		});
	}

	function detachInteractionListeners() {
		window.removeEventListener('pointerdown', onFirstInteraction);
	}

	onMount(() => {
		// Try immediate autoplay on mount (best effort).
		// Many browsers will still block until the first gesture, but this enables
		// autoplay where it is allowed (e.g., Android Chrome with user engagement).
		setTimeout(() => {
			tryPlay();
		}, 50);

		// Prepare autoplay after first user interaction (covering more event types)
		attachInteractionListeners();

		// Keep UI in sync with real audio events
		if (audioEl) {
			audioEl.addEventListener('play', () => {
				isPlaying = true;
			});
			audioEl.addEventListener('pause', () => {
				isPlaying = false;
			});
		}
	});

	onDestroy(() => {
		detachInteractionListeners();
	});
</script>

{#if src}
	<audio bind:this={audioEl} src={src} preload="auto" autoplay playsinline on:ended={onEnded}></audio>
	<div class="bgm-toggle" role="group" aria-label="배경 음악 제어">
		<button class="toggle-btn" on:click={togglePlay} aria-pressed={isPlaying} aria-label={isPlaying ? '배경 음악 일시정지' : '배경 음악 재생'}>
			<div class="icon">
				<Music2 size={16} />
			</div>
			{#if isPlaying}
				<Pause size={16} />
				<span class="label">BGM 끄기</span>
			{:else}
				<Play size={16} />
				<span class="label">BGM 켜기</span>
			{/if}
		</button>
	</div>
{/if}

<style lang="scss">
	.bgm-toggle {
		position: fixed;
		right: 12px;
		bottom: 12px;
		z-index: 1001;
	}

	.toggle-btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: rgba(0, 0, 0, 0.65);
		color: #fff;
		border: none;
		border-radius: 999px;
		padding: 8px 12px;
		cursor: pointer;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
		font-size: 12px;
	}

	.toggle-btn .icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: #F0E68C;
	}

	.label {
		font-weight: 600;
	}

	audio {
		display: none;
	}
</style>


