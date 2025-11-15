<script>
	import { ChevronDown, ChevronUp, Copy, CreditCard } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let groomExpanded = false;
	let brideExpanded = false;

	// 계좌번호 데이터
	const groomAccounts = [
		{ bank: '신한', number: '110-452-182427', name: '최믿음' }
	];

	const brideAccounts = [
		{ bank: '신한', number: '110-513-135185', name: '신동은' }
	];

	function copyToClipboard(raw) {
		const text = String(raw);
		// 표준 API (지원 브라우저)
		if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
			navigator.clipboard.writeText(text).then(() => {
				alert('계좌번호가 복사되었습니다!');
			}).catch(fallbackCopy);
			return;
		}
		// 폴백
		fallbackCopy();

		function fallbackCopy() {
			try {
				// iOS Safari 대응: input 사용 + setSelectionRange
				const input = document.createElement('input');
				input.type = 'text';
				input.value = text;
				input.readOnly = true;
				input.style.position = 'fixed';
				input.style.left = '-9999px';
				input.style.opacity = '0';
				document.body.appendChild(input);
				input.focus();
				input.select();
				input.setSelectionRange(0, input.value.length);
				const ok = document.execCommand('copy');
				document.body.removeChild(input);
				if (ok) {
					alert('계좌번호가 복사되었습니다!');
				} else {
					throw new Error('execCommand copy failed');
				}
			} catch {
				alert('복사에 실패했습니다. 길게 눌러 복사해 주세요.');
			}
		}
	}

	function toggleGroom() {
		groomExpanded = !groomExpanded;
	}

	function toggleBride() {
		brideExpanded = !brideExpanded;
	}
</script>

<section class="account-info">
	<div class="section-title">마음을 전하는 곳</div>

	<!-- 신랑측 계좌번호 -->
	<div class="account-section">
		<div class="account-header" on:click={toggleGroom}>
			<span class="header-text">신랑측 계좌번호</span>
			{#if groomExpanded}
				<ChevronUp size={20} />
			{:else}
				<ChevronDown size={20} />
			{/if}
		</div>

		{#if groomExpanded}
			<div class="account-list">
				{#each groomAccounts as account}
					<div class="account-item">
						<div class="account-details">
							<div class="account-number">{account.bank} {account.number}</div>
							<div class="account-name">{account.name}</div>
						</div>
						<div class="account-actions">
							<button class="copy-btn" type="button" on:click={() => copyToClipboard(account.number)}>
								<Copy size={16} />
								<span>복사</span>
							</button>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>

	<!-- 신부측 계좌번호 -->
	<div class="account-section">
		<div class="account-header" on:click={toggleBride}>
			<span class="header-text">신부측 계좌번호</span>
			{#if brideExpanded}
				<ChevronUp size={20} />
			{:else}
				<ChevronDown size={20} />
			{/if}
		</div>

		{#if brideExpanded}
			<div class="account-list">
				{#each brideAccounts as account}
					<div class="account-item">
						<div class="account-details">
							<div class="account-number">{account.bank} {account.number}</div>
							<div class="account-name">{account.name}</div>
						</div>
						<div class="account-actions">
							<button class="copy-btn" on:click={() => copyToClipboard(account.number)}>
								<Copy size={16} />
								<span>복사</span>
							</button>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

<style lang="scss">
	.account-info {
		padding: 0 1.5em;
		margin-top: 1em;
	}

	.section-title {
		text-align: center;
		color: #8B7355;
		font-size: 0.9rem;
		font-weight: 600;
		margin-bottom: 1em;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	.account-section {
		margin-bottom: 1.2em;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.account-header {
		background-color: #BFA8A8;
		padding: 0.6em 1em;
		border-radius: 6px 6px 0 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		transition: background-color 0.2s;

		&:hover {
			background-color: #A89A9A;
		}

		.header-text {
			color: #333;
			font-weight: 500;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		}
	}

	.account-list {
		border: 1px solid #E0E0E0;
		border-top: none;
		border-radius: 0 0 6px 6px;
		overflow: hidden;
	}

	.account-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.6em 1em;
		border-bottom: 1px solid #F0F0F0;

		&:last-child {
			border-bottom: none;
		}
	}

	.account-details {
		flex: 1;
	}

	.account-number {
		color: #333;
		font-weight: 500;
		font-size: 0.9rem;
		margin-bottom: 0.2em;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	.account-name {
		color: #666;
		font-size: 0.85rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	.account-actions {
		display: flex;
		gap: 0.5em;
	}

	.copy-btn {
		display: flex;
		align-items: center;
		gap: 0.3em;
		background-color: #F5F5F5;
		border: none;
		padding: 0.4em 0.8em;
		border-radius: 6px;
		cursor: pointer;
		transition: background-color 0.2s;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		font-size: 0.8rem;
		color: #333;

		&:hover {
			background-color: #E8E8E8;
		}

		&:active {
			background-color: #D0D0D0;
		}
	}
</style>
