<script lang="ts">
	import { onMount } from 'svelte';
	
	let daysUntilWedding = 0;
	let hoursUntilWedding = 0;
	let minutesUntilWedding = 0;
	let secondsUntilWedding = 0;
	
	onMount(() => {
		const weddingDate = new Date('2025-12-13T16:00:00');
		
		const updateCountdown = () => {
			const now = new Date();
			const diff = weddingDate.getTime() - now.getTime();
			
			if (diff > 0) {
				daysUntilWedding = Math.floor(diff / (1000 * 60 * 60 * 24));
				hoursUntilWedding = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				minutesUntilWedding = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
				secondsUntilWedding = Math.floor((diff % (1000 * 60)) / 1000);
			} else {
				daysUntilWedding = 0;
				hoursUntilWedding = 0;
				minutesUntilWedding = 0;
				secondsUntilWedding = 0;
			}
		};
		
		updateCountdown();
		const interval = setInterval(updateCountdown, 1000);
		
		return () => clearInterval(interval);
	});
</script>

<section class="calendar">
	<div class="wedding-header">
		<div class="wedding-day-badge">WEDDING DAY</div>
		<div class="wedding-date">12 / 13</div>
		<div class="wedding-time">토요일 오후 16시</div>
	</div>
	
	<div class="divider"></div>
	
	<div class="calendar-grid">
		<div class="day-header">
			<span class="day-label sunday">일</span>
			<span class="day-label">월</span>
			<span class="day-label">화</span>
			<span class="day-label">수</span>
			<span class="day-label">목</span>
			<span class="day-label">금</span>
			<span class="day-label">토</span>
		</div>
		
		<div class="dates-grid">
			<!-- Week 1: 11월 30일부터 시작 -->
			<span class="date prev-month">30</span>
			<span class="date">1</span>
			<span class="date">2</span>
			<span class="date">3</span>
			<span class="date">4</span>
			<span class="date">5</span>
			<span class="date">6</span>
			
			<!-- Week 2 -->
			<span class="date sunday">7</span>
			<span class="date">8</span>
			<span class="date">9</span>
			<span class="date">10</span>
			<span class="date">11</span>
			<span class="date">12</span>
			<span class="date highlighted">13</span>
			
			<!-- Week 3 -->
			<span class="date sunday">14</span>
			<span class="date">15</span>
			<span class="date">16</span>
			<span class="date">17</span>
			<span class="date">18</span>
			<span class="date">19</span>
			<span class="date">20</span>
			
			<!-- Week 4 -->
			<span class="date sunday">21</span>
			<span class="date">22</span>
			<span class="date">23</span>
			<span class="date">24</span>
			<span class="date">25</span>
			<span class="date">26</span>
			<span class="date">27</span>
			
			<!-- Week 5 -->
			<span class="date sunday">28</span>
			<span class="date">29</span>
			<span class="date">30</span>
			<span class="date">31</span>
			<span class="date next-month">1</span>
			<span class="date next-month">2</span>
			<span class="date next-month">3</span>
		</div>
	</div>
	
	<div class="divider"></div>
	
	<div class="countdown-section">
		<div class="countdown-boxes">
			<div class="countdown-box">
				<div class="countdown-label">DAYS</div>
				<div class="countdown-number">{daysUntilWedding}</div>
			</div>
			<div class="countdown-separator">:</div>
			<div class="countdown-box">
				<div class="countdown-label">HOUR</div>
				<div class="countdown-number">{hoursUntilWedding.toString().padStart(2, '0')}</div>
			</div>
			<div class="countdown-separator">:</div>
			<div class="countdown-box">
				<div class="countdown-label">MIN</div>
				<div class="countdown-number">{minutesUntilWedding.toString().padStart(2, '0')}</div>
			</div>
			<div class="countdown-separator">:</div>
			<div class="countdown-box">
				<div class="countdown-label">SEC</div>
				<div class="countdown-number">{secondsUntilWedding.toString().padStart(2, '0')}</div>
			</div>
		</div>
		
		<div class="wedding-message">
			믿음 ❤️ 동은의 결혼식이 <span class="highlight-number">{daysUntilWedding + 1}</span>일 남았습니다.
		</div>
	</div>
</section>

<style lang="scss">
	.calendar {
		background-color: #fffdfa;
		padding: 2em 1em;
		text-align: center;
		font-family: 'Helvetica Neue', 'Arial', sans-serif;
		max-width: 100%;
		margin: 0 auto;
		min-height: 100vh;
		box-sizing: border-box;
		
		@media (min-width: 768px) {
			max-width: 600px;
			padding: 3em 2em;
		}
		
		.wedding-header {
			margin-bottom: 1.5em;
			
			@media (min-width: 768px) {
				margin-bottom: 2em;
			}
			
			.wedding-day-badge {
				display: inline-block;
				border: 1px solid #333;
				border-radius: 20px;
				padding: 0.4em 1.2em;
				font-size: 0.7em;
				color: #333;
				margin-bottom: 0.8em;
				letter-spacing: 2px;
				font-weight: 300;
				text-transform: uppercase;
				font-family: 'Helvetica Neue', 'Arial', sans-serif;
				
				@media (min-width: 768px) {
					padding: 0.5em 1.5em;
					font-size: 0.75em;
					margin-bottom: 1em;
				}
			}
			
			.wedding-date {
				font-size: 2.8em;
				font-weight: 700;
				color: #333;
				margin-bottom: 0.4em;
				letter-spacing: 1px;
				font-family: 'Times New Roman', serif;
				
				@media (min-width: 768px) {
					font-size: 3.5em;
					margin-bottom: 0.5em;
				}
			}
			
			.wedding-time {
				margin-top: 0.9em;
				font-size: 0.9rem;
				color: #333;
				font-weight: 400;
				letter-spacing: 0.02em;
				font-family: 'Noto Serif KR', serif;
				
				@media (min-width: 768px) {
					font-size: 1rem;
				}
			}
		}
		
		.divider {
			height: 1px;
			background-color: #ddd;
			margin: 1.5em 0;
			
			@media (min-width: 768px) {
				margin: 2em 0;
			}
		}
		
		.calendar-grid {
			margin-bottom: 1.5em;
			
			@media (min-width: 768px) {
				margin-bottom: 2em;
			}
			
			.day-header {
				display: grid;
				grid-template-columns: repeat(7, 1fr);
				gap: 0.5em;
				margin-bottom: 1em;
				
				@media (min-width: 768px) {
					gap: 1em;
					margin-bottom: 1.5em;
				}
				
				.day-label {
					font-weight: 600;
					color: #333;
					font-size: 0.9em;
					letter-spacing: 0.5px;
					font-family: 'Helvetica Neue', 'Arial', sans-serif;
					
					@media (min-width: 768px) {
						font-size: 0.95em;
					}
					
					&.sunday {
						color: #ff0000;
					}
				}
			}
			
			.dates-grid {
				display: grid;
				grid-template-columns: repeat(7, 1fr);
				gap: 0.5em;
				
				@media (min-width: 768px) {
					gap: 1em;
				}
				
				.date {
					padding: 0.6em 0;
					font-weight: 500;
					font-size: 1em;
					color: #333;
					position: relative;
					letter-spacing: 0.3px;
					font-family: 'Helvetica Neue', 'Arial', sans-serif;
					
					@media (min-width: 768px) {
						padding: 0.8em 0;
						font-size: 1.05em;
					}
					
					&.sunday {
						color: #ff0000;
					}
					
					&.prev-month,
					&.next-month {
						color: #ccc;
					}
					
					&.highlighted {
						background-color: #333;
						color: white;
						border-radius: 50%;
						width: 2.2em;
						height: 2.2em;
						display: flex;
						align-items: center;
						justify-content: center;
						margin: 0 auto;
						font-weight: 700;
						font-size: 1em;
						
						@media (min-width: 768px) {
							width: 2.5em;
							height: 2.5em;
							font-size: 1.1em;
						}
					}
				}
			}
		}
		
		.countdown-section {
			.countdown-boxes {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 0.5em;
				margin-bottom: 1.5em;
				flex-wrap: wrap;
				
				@media (min-width: 768px) {
					gap: 1em;
					margin-bottom: 2em;
					flex-wrap: nowrap;
				}
				
				.countdown-box {
					background-color: white;
					border: 1px solid #ddd;
					border-radius: 8px;
					padding: 0.8em;
					min-width: 60px;
					flex: 1;
					
					@media (min-width: 768px) {
						padding: 1em;
						min-width: 80px;
						flex: none;
					}
					
					.countdown-label {
						font-size: 0.7em;
						color: #666;
						margin-bottom: 0.4em;
						font-weight: 500;
						letter-spacing: 1px;
						text-transform: uppercase;
						font-family: 'Helvetica Neue', 'Arial', sans-serif;
						
						@media (min-width: 768px) {
							font-size: 0.75em;
							margin-bottom: 0.5em;
						}
					}
					
					.countdown-number {
						font-size: 1.6em;
						font-weight: 700;
						color: #333;
						font-family: 'Times New Roman', serif;
						
						@media (min-width: 768px) {
							font-size: 1.9em;
						}
					}
				}
				
				.countdown-separator {
					font-size: 1.3em;
					font-weight: 700;
					color: #333;
					margin-top: -0.8em;
					font-family: 'Times New Roman', serif;
					
					@media (min-width: 768px) {
						font-size: 1.5em;
						margin-top: -1em;
					}
				}
			}
			
			.wedding-message {
				font-size: 1rem;
				color: #333;
				line-height: 3.6;
				font-weight: 400;
				letter-spacing: 0.02em;
				font-family: 'Noto Serif KR', serif;
				margin-bottom: 0.1em;
				
				@media (min-width: 768px) {
					font-size: 0.9rem;
				}
				
				.highlight-number {
					color: #ff6b35;
					font-weight: 600;
				}
			}
		}
	}
</style>
