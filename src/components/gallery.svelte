<script>
	import { X, ChevronLeft, ChevronRight } from '@lucide/svelte';

	let showMore = false;
	let currentImageIndex = 0;
	let lightboxOpen = false;

	// 로컬 갤러리 이미지
	import p1 from '../lib/assets/photo/(1).JPG';
	import p2 from '../lib/assets/photo/(2).jpg';
	import p3 from '../lib/assets/photo/(3).JPG';
	import p4 from '../lib/assets/photo/(4).jpg';
	import p5 from '../lib/assets/photo/(5).jpg';
	import p6 from '../lib/assets/photo/(6).jpg';
	import p7 from '../lib/assets/photo/(7).JPG';
	import p8 from '../lib/assets/photo/(8).JPG';
	import p9 from '../lib/assets/photo/(9).JPG';
	import p10 from '../lib/assets/photo/(10).JPG';
	import p11 from '../lib/assets/photo/(11).JPG';
	import p12 from '../lib/assets/photo/(12).JPG';
	import p13 from '../lib/assets/photo/(13).jpg';
	import p14 from '../lib/assets/photo/(14).JPG';

	const galleryImages = [
		{ id: 1, src: p1, alt: '웨딩 사진 1' },
		{ id: 2, src: p2, alt: '웨딩 사진 2' },
		{ id: 3, src: p3, alt: '웨딩 사진 3' },
		{ id: 4, src: p4, alt: '웨딩 사진 4' },
		{ id: 5, src: p5, alt: '웨딩 사진 5' },
		{ id: 6, src: p6, alt: '웨딩 사진 6' },
		{ id: 7, src: p7, alt: '웨딩 사진 7' },
		{ id: 8, src: p8, alt: '웨딩 사진 8' },
		{ id: 9, src: p9, alt: '웨딩 사진 9' },
		{ id: 10, src: p10, alt: '웨딩 사진 10' },
		{ id: 11, src: p11, alt: '웨딩 사진 11' },
		{ id: 12, src: p12, alt: '웨딩 사진 12' },
		{ id: 13, src: p13, alt: '웨딩 사진 13' },
		{ id: 14, src: p14, alt: '웨딩 사진 14' }
	];

	function toggleMore() {
		showMore = !showMore;
	}

	// 초기에는 9개만 보여주고, 더보기 클릭 시 나머지도 보여줌
	$: displayedImages = showMore ? galleryImages : galleryImages.slice(0, 9);

	function openLightbox(index) {
		currentImageIndex = index;
		lightboxOpen = true;
		if (typeof document !== 'undefined') {
			document.body.style.overflow = 'hidden';
		}
	}

	function closeLightbox() {
		lightboxOpen = false;
		if (typeof document !== 'undefined') {
			document.body.style.overflow = '';
		}
	}

	function prevImage() {
		currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
	}

	function nextImage() {
		currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
	}

	function handleKeydown(e) {
		if (!lightboxOpen) return;
		if (e.key === 'Escape') closeLightbox();
		if (e.key === 'ArrowLeft') prevImage();
		if (e.key === 'ArrowRight') nextImage();
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<section class="gallery">
	<div class="gallery-header">
		<div class="gallery-badge">GALLERY</div>
		<div class="gallery-title">웨딩 갤러리</div>
	</div>

	<div class="gallery-grid">
		{#each displayedImages as image, i}
			<div class="gallery-item">
				<button class="thumb-btn" on:click={() => openLightbox(i)} aria-label={`확대 보기: ${image.alt}`}>
					<img 
						src={image.src} 
						alt={image.alt}
						loading="lazy"
					/>
				</button>
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

	{#if lightboxOpen}
		<div class="lightbox-overlay" on:click={closeLightbox}>
			<div class="lightbox-content" on:click|stopPropagation>
				<button class="lightbox-close" on:click={closeLightbox} aria-label="닫기">
					<X size={22} />
				</button>
				<button class="lightbox-nav prev" on:click={prevImage} aria-label="이전 사진">
					<ChevronLeft size={28} />
				</button>
				<img class="lightbox-image" src={galleryImages[currentImageIndex].src} alt={galleryImages[currentImageIndex].alt} />
				<button class="lightbox-nav next" on:click={nextImage} aria-label="다음 사진">
					<ChevronRight size={28} />
				</button>
			</div>
		</div>
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
		gap: 0.3em;
		margin-bottom: 1.5em;
	}

	.gallery-item {
		aspect-ratio: 1;
		overflow: hidden;
		border-radius: 8px;
		transition: transform 0.2s;

		&:hover {
			transform: scale(1.02);
		}

		.thumb-btn {
			display: block;
			padding: 0;
			margin: 0;
			background: none;
			border: none;
			cursor: pointer;
			width: 100%;
			height: 100%;
		}

		.thumb-btn img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: transform 0.3s;

			.thumb-btn:hover & {
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

	/* 라이트박스 */
	.lightbox-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0,0,0,0.85);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
	}

	.lightbox-content {
		position: relative;
		max-width: 95vw;
		max-height: 90vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.lightbox-image {
		max-width: 95vw;
		max-height: 88vh;
		border-radius: 8px;
		box-shadow: 0 8px 24px rgba(0,0,0,0.4);
	}

	.lightbox-close {
		position: absolute;
		top: -40px;
		right: 0;
		background: none;
		border: none;
		color: #fff;
		cursor: pointer;
		padding: 8px;
	}

	.lightbox-nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(0,0,0,0.4);
		border: none;
		color: #fff;
		cursor: pointer;
		padding: 10px;
		border-radius: 999px;
	}
	.lightbox-nav.prev { left: -40px; }
	.lightbox-nav.next { right: -40px; }

	/* 반응형 디자인 */
	@media (max-width: 768px) {
		.gallery {
			padding: 1.5em 1em;
		}

		.gallery-grid {
			gap: 0.2em;
		}

		.gallery-title {
			font-size: 1.3rem;
		}
	}
</style>
