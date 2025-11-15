<script>
</script>

<section class="share">
	<div class="share-divider"></div>
	
	<div class="share-options"></div>
</section>

<style lang="scss">
	.share {
		padding: 1em 20em;
	}

	.share-divider {
		width: 100%;
		height: 1px;
		background-color: #e0e0e0;
		margin-bottom: 0.25em;
	}

	.share-options {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	/* 이미지 제거 */

	.share-option {
		display: flex;
		align-items: center;
		gap: 0.8em;
		background: none;
		border: none;
		padding: 1em 0;
		cursor: pointer;
		transition: background-color 0.2s;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		width: 100%;
		text-align: left;

		&:hover {
			background-color: #f8f8f8;
		}

		&:active {
			background-color: #f0f0f0;
		}

		svg {
			color: #333;
			flex-shrink: 0;
			width: 20px;
			height: 20px;
		}

		span {
			color: #333;
			font-size: 0.95rem;
			font-weight: 400;
			line-height: 1.4;
		}
	}

	/* 반응형 디자인 */
	@media (max-width: 768px) {
		.share {
			padding: 1em;
		}

		.emoji-holder { padding: 0.6em 0; }

		.share-option span {
			font-size: 0.9rem;
		}
	}
</style>
