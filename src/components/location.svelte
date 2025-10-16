<script>
	import { MapPin } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import naverMapIcon from '../lib/assets/navermapsvg.svg';
	import kakaoMapIcon from '../lib/assets/kakaomap_basic.png';

	// 지도 관련 변수 제거 (직접 표시)

	function openNaverMap() {
		window.open('https://map.naver.com/p/search/청주%20메리다%20컨벤션', '_blank');
	}

	function openKakaoMap() {
		window.open('https://map.kakao.com/link/map/청주메리다컨벤션,36.6375,127.4297', '_blank');
	}
</script>

<section class="location">
	<div class="venue-header">
		<div class="location-label">LOCATION</div>
		<div class="title kr">오시는 길</div>
		<div class="venue-info">
			<div class="venue-name kr">청주 메리다 컨벤션 달리아홀</div>
			<div class="venue-address kr">충청북도 청주시 흥덕구 가경동 1234-5</div>
		</div>
	</div>

	<div class="map-section">
		<div class="map-container">
			<div class="static-map">
				<div class="map-background">
					<div class="venue-marker">
						<div class="marker-pin"></div>
						<div class="marker-label">청주 메리다 컨벤션</div>
					</div>
					<div class="map-overlay">
						<div class="map-info">
							<div class="venue-name">청주 메리다 컨벤션 달리아홀</div>
							<div class="venue-address">충청북도 청주시 흥덕구 가경동 1234-5</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="map-app-selection">
			<button class="app-option" on:click={openNaverMap}>
				<div class="app-icon naver-icon">
					<img src={naverMapIcon} alt="네이버 지도" />
				</div>
				<span>네이버 지도</span>
			</button>
			<div class="app-divider"></div>
			<button class="app-option" on:click={openKakaoMap}>
				<div class="app-icon kakao-icon">
					<img src={kakaoMapIcon} alt="카카오 내비" />
				</div>
				<span>카카오 내비</span>
			</button>
		</div>
	</div>

	<div class="transportation-info">
		<div class="transport-section">
			<div class="transport-title">지하철</div>
			<div class="transport-content">청주역 1번 출구에서 도보 10분 또는 택시 이용</div>
		</div>

		<div class="transport-section">
			<div class="transport-title">버스</div>
			<div class="transport-content">
				<div class="bus-item">- 메리다 컨벤션 정류장 하차</div>
				<div class="bus-category">
					<div class="category-title">일반 :</div>
					<div class="bus-numbers">11번, 12번, 13번, 14번, 15번</div>
				</div>
				<div class="bus-category">
					<div class="category-title">좌석 :</div>
					<div class="bus-numbers">100번, 101번, 102번</div>
				</div>
				<div class="bus-category">
					<div class="category-title">마을 :</div>
					<div class="bus-numbers">청주-1번, 청주-2번</div>
				</div>
			</div>
		</div>

		<div class="transport-section">
			<div class="transport-title">자가용</div>
			<div class="transport-content">청주시 흥덕구 가경동 1234-5 (무료 주차장 완비)</div>
		</div>

		<div class="transport-section">
			<div class="transport-title">기타 교통정보</div>
			<div class="transport-content">하객 주차 무료 (예약 시 주차권 제공)</div>
		</div>
	</div>
</section>

<style lang="scss">
	section.location {
		padding: 2em 1.5em;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	.venue-header {
		text-align: center;
		margin-bottom: 2em;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	.location-label {
		color: #8B7355;
		font-size: 0.9rem;
		font-weight: 400;
		margin-bottom: 0.5em;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		letter-spacing: 1.5px;
		text-transform: uppercase;
		text-align: center;
	}

	.title {
		color: #D4A5A5;
		font-size: 1rem;
		margin-bottom: 1.5em;
		line-height: 2;
		text-align: center;
	}

	.venue-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		width: 100%;
		max-width: 400px;

		.venue-name {
			font-size: 1rem;
			color: #616161;
			margin-bottom: 0.3em;
			line-height: 2;
		}

		.venue-address {
			font-size: 1rem;
			color: #616161;
			line-height: 2;
		}
	}

	.map-section {
		margin-bottom: 2em;

		.map-container {
			width: 100%;
			height: 350px;
			background-color: #f8f9fa;
			border-radius: 8px;
			overflow: hidden;
			margin-bottom: 0;
			position: relative;
		}

		.map-placeholder {
			width: 100%;
			height: 100%;
			background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 8px;
		}

		.placeholder-content {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.5em;
			color: #6c757d;
		}

		.placeholder-content svg {
			color: #adb5bd;
		}

		.static-map {
			width: 100%;
			height: 100%;
			position: relative;
			border-radius: 8px;
			overflow: hidden;
			display: block;
			visibility: visible;
		}

		.static-map .map-background {
			width: 100%;
			height: 100%;
			background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			min-height: 350px;
		}

		.static-map .venue-marker {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 10;
		}

		.static-map .venue-marker .marker-pin {
			width: 32px;
			height: 32px;
			background: #ff4757;
			border-radius: 50% 50% 50% 0;
			transform: rotate(-45deg);
			box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
			position: relative;
		}

		.static-map .venue-marker .marker-pin::after {
			content: "";
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%) rotate(45deg);
			width: 12px;
			height: 12px;
			background: white;
			border-radius: 50%;
		}

		.static-map .venue-marker .marker-label {
			position: absolute;
			top: 40px;
			left: 50%;
			transform: translateX(-50%);
			background: rgba(0, 0, 0, 0.8);
			color: white;
			padding: 4px 8px;
			border-radius: 4px;
			font-size: 0.8rem;
			white-space: nowrap;
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		}

		.static-map .map-overlay {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
			padding: 20px;
			color: white;
		}

		.static-map .map-info .venue-name {
			font-weight: 600;
			font-size: 1rem;
			margin-bottom: 4px;
		}

		.static-map .map-info .venue-address {
			font-size: 0.85rem;
			opacity: 0.9;
		}

		.naver-map-style {
			width: 100%;
			height: 100%;
			background-color: #f8f9fa;
			position: relative;
			border-radius: 8px;
			overflow: hidden;
		}

		.map-background {
			position: relative;
			width: 100%;
			height: 100%;
			background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
		}

		.roads {
			position: absolute;
			width: 100%;
			height: 100%;

			.road {
				position: absolute;
				border-radius: 2px;

				&.main-road {
					top: 50%;
					left: 0;
					width: 100%;
					height: 6px;
					background-color: #e0e0e0;
					border: 1px solid #d0d0d0;
					transform: translateY(-50%);
				}

				&.side-road {
					background-color: #f0f0f0;
					border: 1px solid #e0e0e0;
					border-radius: 1px;

					&.road-1 {
						top: 25%;
						left: 10%;
						width: 80%;
						height: 3px;
					}

					&.road-2 {
						top: 75%;
						left: 10%;
						width: 80%;
						height: 3px;
					}

					&.road-3 {
						top: 10%;
						left: 50%;
						width: 3px;
						height: 80%;
						transform: translateX(-50%);
					}

					&.road-4 {
						top: 35%;
						left: 20%;
						width: 60%;
						height: 3px;
					}

					&.road-5 {
						top: 65%;
						left: 50%;
						width: 3px;
						height: 30%;
						transform: translateX(-50%);
					}
				}
			}
		}

		.buildings {
			position: absolute;
			width: 100%;
			height: 100%;

			.building {
				position: absolute;
				border-radius: 3px;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 0.5rem;
				color: white;
				font-weight: bold;
				text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
				box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

				&.apartment {
					background-color: #007AFF;
				}
				&.commercial {
					background-color: #FF6B6B;
				}

				&.building-1 {
					top: 15%;
					left: 15%;
					width: 45px;
					height: 30px;
				}

				&.building-2 {
					top: 15%;
					right: 15%;
					width: 40px;
					height: 28px;
				}

				&.building-3 {
					top: 30%;
					left: 25%;
					width: 35px;
					height: 25px;
				}

				&.building-4 {
					top: 30%;
					right: 25%;
					width: 38px;
					height: 26px;
				}

				&.building-5 {
					bottom: 15%;
					left: 50%;
					width: 42px;
					height: 30px;
					transform: translateX(-50%);
				}

				&.building-6 {
					bottom: 20%;
					left: 80%;
					width: 32px;
					height: 22px;
				}

				&.building-7 {
					bottom: 10%;
					right: 20%;
					width: 40px;
					height: 28px;
				}

				&.building-8 {
					bottom: 15%;
					left: 20%;
					width: 42px;
					height: 32px;
				}

				.building-label {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					background-color: rgba(0, 0, 0, 0.7);
					padding: 1px 4px;
					border-radius: 2px;
					white-space: nowrap;
					font-size: 0.4rem;
				}
			}
		}

		.venue-marker {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 10;

			.marker-pin {
				width: 28px;
				height: 28px;
				background-color: #007AFF;
				border-radius: 50% 50% 50% 0;
				transform: rotate(-45deg);
				position: relative;
				box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);

				&::after {
					content: '';
					position: absolute;
					top: 5px;
					left: 5px;
					width: 12px;
					height: 12px;
					background-color: white;
					border-radius: 50%;
				}
			}

			.marker-label {
				position: absolute;
				top: 30px;
				left: 50%;
				transform: translateX(-50%);
				background-color: #007AFF;
				color: white;
				padding: 4px 8px;
				border-radius: 4px;
				font-size: 0.6rem;
				white-space: nowrap;
				box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
			}
		}

		.poi-markers {
			position: absolute;
			width: 100%;
			height: 100%;

			.poi {
				position: absolute;
				z-index: 8;
				cursor: pointer;
				transition: transform 0.2s ease;

				&:hover {
					transform: scale(1.1);
				}

				.poi-icon {
					font-size: 1rem;
					text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
				}

				.poi-label {
					position: absolute;
					top: -18px;
					left: 50%;
					transform: translateX(-50%);
					background-color: rgba(0, 0, 0, 0.8);
					color: white;
					padding: 2px 6px;
					border-radius: 3px;
					font-size: 0.5rem;
					white-space: nowrap;
					pointer-events: none;
				}

				&.poi-1 {
					top: 20%;
					left: 30%;
					.poi-icon { color: #FF6B6B; }
				}
				&.poi-2 {
					top: 70%;
					left: 30%;
					.poi-icon { color: #007AFF; }
				}
				&.poi-3 {
					top: 40%;
					right: 20%;
					.poi-icon { color: #4CAF50; }
				}
			}
		}

		.map-scale {
			position: absolute;
			bottom: 8px;
			left: 8px;
			background-color: rgba(0, 0, 0, 0.7);
			color: white;
			padding: 3px 6px;
			border-radius: 3px;
			font-size: 0.6rem;
			display: flex;
			align-items: center;
			gap: 3px;
			z-index: 10;

			.scale-bar {
				width: 25px;
				height: 2px;
				background-color: white;
				border-radius: 1px;
			}

			.scale-text {
				font-weight: bold;
			}
		}
	}

	.map-app-selection {
		display: flex;
		background-color: #fafafa;
		border-radius: 0 0 16px 16px;
		overflow: hidden;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
		margin-top: 0;
		padding: 16px 12px;
		justify-content: space-between;
		gap: 8px;
	}

	.app-option {
		display: flex;
		align-items: center;
		gap: 6px;
		background: none;
		border: none;
		padding: 8px 8px;
		cursor: pointer;
		transition: all 0.2s;
		border-radius: 8px;
		min-width: auto;
		flex: 1;

		&:hover {
			background-color: #f0f0f0;
		}

		.app-icon {
			width: 24px;
			height: 24px;
			border-radius: 6px;
			display: flex;
			align-items: center;
			justify-content: center;
			box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
			overflow: hidden;
			flex-shrink: 0;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: 6px;
			}

			&.naver-icon {
				background: #03C75A;
			}

			&.kakao-icon {
				background: #FEE500;
			}

			&.tmap-icon {
				background: #6B4CE3;
			}
		}

		span {
			font-size: 12px;
			color: #333;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
			font-weight: 500;
			white-space: nowrap;
		}
	}

	.app-divider {
		width: 1px;
		background-color: #e0e0e0;
		margin: 8px 0;
		height: 24px;
	}

	.transportation-info {
		margin-top: 2em;
		padding: 0 1em;
	}

	.transport-section {
		margin-bottom: 1.5em;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.transport-title {
		color: #8B7355;
		font-size: 1rem;
		font-weight: 600;
		margin-bottom: 0.5em;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	.transport-content {
		color: #333;
		font-size: 0.9rem;
		line-height: 1.5;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	.bus-item {
		margin-bottom: 0.5em;
	}

	.bus-category {
		display: flex;
		margin-bottom: 0.3em;
		align-items: flex-start;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.category-title {
		font-weight: 500;
		margin-right: 0.5em;
		min-width: 40px;
	}

	.bus-numbers {
		flex: 1;
	}

	.transportation {
		.transport-section {
			margin-bottom: 1.5em;

			.transport-header {
				display: flex;
				align-items: center;
				gap: 0.5em;
				margin-bottom: 0.5em;

				.transport-icon {
					width: 24px;
					height: 24px;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 1rem;
				}

				.transport-title {
					font-size: 1rem;
					font-weight: 500;
					color: #333;
					font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
				}
			}

			.transport-info {
				.transport-line {
					font-size: 0.9rem;
					color: #333;
					margin-bottom: 0.3em;
					font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
					line-height: 1.4;

					&:last-child {
						margin-bottom: 0;
					}
				}
			}
		}
	}
</style>
