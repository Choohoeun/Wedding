<script>
	import { ChevronDown, ChevronUp, Copy, CreditCard } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let groomExpanded = false;
	let brideExpanded = false;

	// 계좌번호 데이터
	const groomAccounts = [
		{ bank: '농협', number: '3025800409611', name: '김민수' },
		{ bank: '농협', number: '3521267783813', name: '김철수' },
		{ bank: '농협', number: '81508652255741', name: '박영희' }
	];

	const brideAccounts = [
		{ bank: '신한', number: '110558769720', name: '이지은' },
		{ bank: '우리', number: '69909095902101', name: '최미영' }
	];

	function copyToClipboard(text) {
		navigator.clipboard.writeText(text).then(() => {
			// 복사 성공 알림 (선택사항)
			alert('계좌번호가 복사되었습니다!');
		}).catch(err => {
			console.error('복사 실패:', err);
		});
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
		padding: 0 20em;
		margin-top: 2em;
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
		margin-bottom: 1em;

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
