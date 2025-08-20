<script>
	import { Calendar, MapPin, Navigation } from '@lucide/svelte';
	import { X } from '@lucide/svelte';
	import wreathImage from '../lib/assets/wdd.png';

	let showModal = false;

	function toggleModal() {
		showModal = !showModal;
	}

	function closeModal() {
		showModal = false;
	}

	function openFlowerWreath() {
		window.open('https://agent.maruw.co.kr/mobile/product-type01?goods_div_idx=1', '_blank');
	}
</script>

<section class="flower-wreath">
	<div class="wreath-card" on:click={toggleModal}>
		<div class="wreath-content">
			<div class="wreath-text">
				<div class="wreath-title">축하 화환 보내기</div>
				<div class="wreath-subtitle">축하의 마음을 전해보세요</div>
			</div>
			<div class="wreath-icon">
				<img src={wreathImage} alt="화환" class="wreath-image" />
			</div>
		</div>
	</div>
</section>

<!-- Modal -->
{#if showModal}
	<div class="modal-overlay" on:click={closeModal}>
		<div class="modal-content" on:click|stopPropagation>
			<div class="modal-header">
				<span class="modal-title">축하 화환 보내기</span>
				<button class="close-btn" on:click={closeModal}>
					<X size={20} />
				</button>
			</div>
			
			<div class="modal-body">
				<div class="description">
					<p>신랑, 신부의 새로운 시작을 축하해주세요.</p>
					<p>화환은 예식일에 맞춰 웨딩홀로 배송됩니다.</p>
				</div>

				<div class="event-info">
					<div class="info-item">
						<Calendar size={18} />
						<span>2025년 12월 13일 토요일 오후 4시</span>
					</div>
					<div class="info-item">
						<MapPin size={18} />
						<span>충청북도 청주시 흥덕구 가경동 1234-5</span>
					</div>
					<div class="info-item">
						<Navigation size={18} />
						<span>청주 메리다 컨벤션 달리아홀</span>
					</div>
				</div>

				<button class="send-wreath-btn" on:click={openFlowerWreath}>
					축하 화환 보내기
				</button>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.flower-wreath {
		padding: 1em 1.5em;
        margin-top : 1em;
	}

	.wreath-card {
		background-color: #BFA8A8;
		border-radius: 12px;
		padding: 1.5em;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		cursor: pointer;
		transition: transform 0.2s, box-shadow 0.2s;

		&:hover {
			transform: translateY(-2px);
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		}
	}

	.wreath-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.wreath-text {
		flex: 1;
	}

	.wreath-title {
		font-size: 1.1rem;
		font-weight: 600;
		color: #555;
		margin-bottom: 0.5em;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	.wreath-subtitle {
		font-size: 0.9rem;
		color: #888;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	.wreath-icon {
		width: 60px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.wreath-image {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	/* Modal Styles */
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.modal-content {
		background-color: white;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
		width: 90%;
		max-width: 400px;
		max-height: 80vh;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.2em 1.5em 1em;
		border-bottom: 1px solid #eee;

		.modal-title {
			font-size: 1.2rem;
			font-weight: 600;
			color: #333;
			text-align: center;
			flex: 1;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		}

		.close-btn {
			background: none;
			border: none;
			padding: 0.5em;
			cursor: pointer;
			color: #666;
			transition: color 0.2s;

			&:hover {
				color: #333;
			}
		}
	}

	.modal-body {
		padding: 1.5em;
		overflow-y: auto;
		flex-grow: 1;
	}

	.description {
		text-align: center;
		margin-bottom: 2em;

		p {
			color: #333;
			font-size: 0.95rem;
			line-height: 1.5;
			margin-bottom: 0.5em;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}

	.event-info {
		margin-bottom: 2em;
	}

	.info-item {
		display: flex;
		align-items: center;
		gap: 0.8em;
		margin-bottom: 1em;
		padding: 0.8em;
		background-color: #f8f9fa;
		border-radius: 8px;

		&:last-child {
			margin-bottom: 0;
		}

		svg {
			color: #666;
			flex-shrink: 0;
		}

		span {
			color: #333;
			font-size: 0.9rem;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		}
	}

	.send-wreath-btn {
		width: 100%;
		padding: 1em;
		background-color: #BFA8A8;
		color: white;
		border: none;
		border-radius: 8px;
		font-size: 1rem;
		font-weight: 600;
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
</style>
