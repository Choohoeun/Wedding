<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { localeStore } from '../i18n.svelte';
	import { Phone, Mail, X } from '@lucide/svelte';

	let showModal = false;

	function openPhone() {
		window.open('tel:000-0000-0000');
	}

	function openSMS() {
		window.open('sms:000-0000-0000');
	}

	function toggleModal() {
		showModal = !showModal;
	}

	function closeModal() {
		showModal = false;
	}
</script>

<section class="rsvp">
	<div class="contact-container">
		<div class="contact-row">
			<div class="contact-info">
				<span class="parents">김철수 · 이영희</span>
				<span class="relationship">의 아들</span>
				<span class="name">최믿음</span>
			</div>
			<div class="contact-actions">
				<div class="three-dots">
					<span class="dot"></span>
					<span class="dot"></span>
					<span class="dot"></span>
				</div>
				<button class="contact-btn phone" on:click={openPhone}>
					<Phone size="16" />
				</button>
				<button class="contact-btn email" on:click={openSMS}>
					<Mail size="16" />
				</button>
			</div>
		</div>

		<div class="contact-row">
			<div class="contact-info">
				<span class="parents">박영수 · 최미영</span>
				<span class="relationship">의 딸</span>
				<span class="name">신동은</span>
			</div>
			<div class="contact-actions">
				<div class="three-dots">
					<span class="dot"></span>
					<span class="dot"></span>
					<span class="dot"></span>
				</div>
				<button class="contact-btn phone" on:click={openPhone}>
					<Phone size="16" />
				</button>
				<button class="contact-btn email" on:click={openSMS}>
					<Mail size="16" />
				</button>
			</div>
		</div>

		<button class="contact-hosts-btn" on:click={toggleModal}>
			혼주에게 연락하기
		</button>
	</div>
</section>

<!-- Modal -->
{#if showModal}
	<div class="modal-overlay" on:click={closeModal}>
		<div class="modal-content" on:click|stopPropagation>
			<div class="modal-header">
				<span class="modal-title">혼주에게 연락하기</span>
				<button class="close-btn" on:click={closeModal}>
					<X size="20" />
				</button>
			</div>
			
			<div class="modal-body">
				<div class="hosts-section">
					<h3 class="hosts-title">신랑측 혼주</h3>
					<div class="host-contact">
						<span class="host-name">장홍기</span>
						<div class="host-actions">
							<button class="host-btn phone" on:click={openPhone}>
								<Phone size="16" />
							</button>
							<button class="host-btn email" on:click={openSMS}>
								<Mail size="16" />
							</button>
						</div>
					</div>
					<div class="host-contact">
						<span class="host-name">이진미</span>
						<div class="host-actions">
							<button class="host-btn phone" on:click={openPhone}>
								<Phone size="16" />
							</button>
							<button class="host-btn email" on:click={openSMS}>
								<Mail size="16" />
							</button>
						</div>
					</div>
				</div>
				
				<div class="hosts-section">
					<h3 class="hosts-title">신부측 혼주</h3>
					<div class="host-contact">
						<span class="host-name">최광선</span>
						<div class="host-actions">
							<button class="host-btn phone" on:click={openPhone}>
								<Phone size="16" />
							</button>
							<button class="host-btn email" on:click={openSMS}>
								<Mail size="16" />
							</button>
						</div>
					</div>
					<div class="host-contact">
						<span class="host-name">황은숙</span>
						<div class="host-actions">
							<button class="host-btn phone" on:click={openPhone}>
								<Phone size="16" />
							</button>
							<button class="host-btn email" on:click={openSMS}>
								<Mail size="16" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	section.rsvp {
		padding: 4.5em 3.5em;
	}

	.contact-container {
		max-width: 500px;
		margin: 0 auto;
	}

	.contact-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.5em;
		padding: 1em 0;
		border-bottom: 1px solid #eee;
	}

	.contact-info {
		display: flex;
		align-items: center;
		gap: 0.1em;
		font-size: 1rem;
		color: #333;
		text-align: center;
		flex: 1;

		.parents {
			font-weight: 500;
			min-width: 140px;
			text-align: center;
		}

		.relationship {
			color: $primary-color;
			font-size: 0.9rem;
			min-width: 80px;
			text-align: center;
		}

		.name {
			font-weight: 600;
			min-width: 100px;
			text-align: center;
		}
	}

	.contact-actions {
		display: flex;
		align-items: center;
		gap: 0.5em;
		margin-right:1.6em;

		.dots {
			color: #999;
			font-size: 0.8rem;
		}

		.three-dots {
			display: flex;
			align-items: center;
			gap: 0.2em;
			color: #999;
			font-size: 0.8rem;
		}

		.dot {
			display: inline-block;
			width: 4px;
			height: 4px;
			background-color: #999;
			border-radius: 50%;
		}

		.contact-btn {
			background: none;
			border: none;
			padding: 0.5em;
			cursor: pointer;
			color: #333;
			border-radius: 4px;
			transition: background-color 0.2s;

			&:hover {
				background-color: #f5f5f5;
			}

			&.phone:hover {
				color: #007AFF;
			}

			&.email:hover {
				color: #34C759;
			}
		}
	}

	.contact-hosts-btn {
		display: block;
		width: 100%;
		padding: 1em;
		margin-top: 2em;
		background-color: #8B7373;
		color: $white;
		border: none;
		border-radius: 4px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: background-color 0.2s;

		&:hover {
			background-color: #7A6666;
		}

		&:active {
			background-color: #7A6666;
		}
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
		background-color: $white;
		border-radius: 8px;
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
		background-color: $primary-color;
		border-radius: 8px 8px 0 0;

		.modal-title {
			font-size: 1.1rem;
			font-weight: 300;
			color: $white;
			text-align: center;
			flex: 1;
		}

		.close-btn {
			background: none;
			border: none;
			padding: 0.5em;
			cursor: pointer;
			color: $white;
			transition: color 0.2s;

			&:hover {
				color: #f0f0f0;
			}
		}
	}

	.modal-body {
		padding: 1.2em 1.5em 1.5em;
		overflow-y: auto;
		flex-grow: 1;
	}

	.hosts-section {
		margin-bottom: 1.5em;

		&:last-child {
			margin-bottom: 0;
		}

		.hosts-title {
			font-size: 1rem;
			font-weight: 500;
			color: #333;
			margin-bottom: 0.8em;
			padding-bottom: 0.3em;
			border-bottom: 1px solid #eee;
			text-align: center;
		}

		.host-contact {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 0.8em;
			padding-bottom: 0.8em;
			border-bottom: 1px solid #eee;

			&:last-child {
				border-bottom: none;
				margin-bottom: 0;
				padding-bottom: 0;
			}

			.host-name {
				font-size: 0.95rem;
				font-weight: 400;
				color: #333;
				min-width: 120px;
				text-align: center;
			}

			.host-actions {
				display: flex;
				align-items: center;
				gap: 0.3em;
			}

			.host-btn {
				background: none;
				border: none;
				padding: 0.4em;
				cursor: pointer;
				color: #333;
				border-radius: 4px;
				transition: background-color 0.2s;

				&:hover {
					background-color: #f5f5f5;
				}

				&.phone:hover {
					color: #007AFF;
				}

				&.email:hover {
					color: #34C759;
				}
			}
		}
	}
</style>
