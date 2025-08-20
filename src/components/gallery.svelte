<script>
	import { ChevronDown } from '@lucide/svelte';

	let showMore = false;
	let currentImageIndex = 0;

	// 임의의 갤러리 이미지 데이터 (실제로는 실제 사진으로 교체)
	const galleryImages = [
		{
			id: 1,
			src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
			alt: '신랑 신부 커플샷 1'
		},
		{
			id: 2,
			src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop',
			alt: '신랑 신부 커플샷 2'
		},
		{
			id: 3,
			src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop',
			alt: '신랑 신부 커플샷 3'
		},
		{
			id: 4,
			src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop',
			alt: '신랑 신부 커플샷 4'
		},
		{
			id: 5,
			src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
			alt: '신랑 신부 커플샷 5'
		},
		{
			id: 6,
			src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop',
			alt: '신랑 신부 커플샷 6'
		},
		{
			id: 7,
			src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop',
			alt: '신랑 신부 커플샷 7'
		},
		{
			id: 8,
			src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
			alt: '신랑 신부 커플샷 8'
		},
		{
			id: 9,
			src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop',
			alt: '신랑 신부 커플샷 9'
		},
		// 더보기로 추가될 이미지들
		{
			id: 10,
			src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop',
			alt: '신랑 신부 커플샷 10'
		},
		{
			id: 11,
			src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
			alt: '신랑 신부 커플샷 11'
		},
		{
			id: 12,
			src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop',
			alt: '신랑 신부 커플샷 12'
		},
		{
			id: 13,
			src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop',
			alt: '신랑 신부 커플샷 13'
		},
		{
			id: 14,
			src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
			alt: '신랑 신부 커플샷 14'
		},
		{
			id: 15,
			src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop',
			alt: '신랑 신부 커플샷 15'
		}
	];

	function toggleMore() {
		showMore = !showMore;
	}

	// 초기에는 9개만 보여주고, 더보기 클릭 시 나머지도 보여줌
	$: displayedImages = showMore ? galleryImages : galleryImages.slice(0, 9);
</script>

<section class="gallery">
	<div class="gallery-header">
		<div class="gallery-badge">GALLERY</div>
		<div class="gallery-title">웨딩 갤러리</div>
	</div>

	<div class="gallery-grid">
		{#each displayedImages as image}
			<div class="gallery-item">
				<img 
					src={image.src} 
					alt={image.alt}
					loading="lazy"
					on:click={() => {
						// 클릭 시 이미지 확대 기능 (선택사항)
						console.log('Image clicked:', image.alt);
					}}
				/>
			</div>
		{/each}
	</div>

	{#if !showMore}
		<button class="view-more-btn" on:click={toggleMore}>
			더 보기
		</button>
	{:else}
		<button class="view-more-btn" on:click={toggleMore}>
			접기
		</button>
	{/if}
</section>

<style lang="scss">
	.gallery {
		padding: 2em 1.5em;
	}

	.gallery-header {
		text-align: center;
		margin-bottom: 2em;
	}

	.gallery-badge {
		display: inline-block;
		background-color: transparent;
		padding: 0.5em 1.5em;
		font-size: 0.8rem;
		font-weight: 600;
		color: #8B7355;
		text-transform: uppercase;
		letter-spacing: 1px;
		margin-bottom: 1em;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	.gallery-title {
		font-size: 1.3rem;
		font-weight: 500;
		color: #D4A5A5;
		font-family: 'Noto Serif KR', serif;
	}

	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.5em;
		margin-bottom: 2em;
	}

	.gallery-item {
		aspect-ratio: 1;
		overflow: hidden;
		border-radius: 8px;
		cursor: pointer;
		transition: transform 0.2s;

		&:hover {
			transform: scale(1.02);
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: transform 0.3s;

			&:hover {
				transform: scale(1.05);
			}
		}
	}

	.view-more-btn {
		display: block;
		width: 100%;
		max-width: 200px;
		margin: 0 auto;
		padding: 0.8em 1.5em;
		background-color: #BFA8A8;
		color: white;
		border: none;
		border-radius: 8px;
		font-size: 0.9rem;
		font-weight: 500;
		cursor: pointer;
		transition: background-color 0.2s;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

		&:hover {
			background-color: #A89A9A;
		}

		&:active {
			background-color: #A89A9A;
		}
	}

	/* 반응형 디자인 */
	@media (max-width: 768px) {
		.gallery {
			padding: 1.5em 1em;
		}

		.gallery-grid {
			gap: 0.3em;
		}

		.gallery-title {
			font-size: 1.3rem;
		}
	}
</style>
