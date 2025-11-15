<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { localeStore } from '../i18n.svelte';

	const nameDivider = `
    <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="1.5" cy="1.5" r="1.5" fill="#B99493"/>
    </svg>`;
</script>

<section class="letter">
	<div class="header">
		<div class="invitation-text">INVITATION</div>
		<h2 class="title {localeStore.locale}">두 사람의 결혼식에 초대합니다</h2>
	</div>

	<div class="letter-container">
		<div class="letter-content {localeStore.locale}">
			<p>“이러므로 사람이 그 부모를 떠나 그 둘이 한몸이 될찌니라 이러한즉 이제 둘이 아니요 한몸이니(마가복음10:7-8)”</p>
		</div>

		<div class="divider"></div>

		<div class="family-description kr">
			<p>최철순 · 임흥순 <span class="relationship">의 아들</span><span class="name-gap"></span>최믿음</p>
			<p>신포식 · 곽주연 <span class="relationship">의 딸</span><span class="name-gap"></span>신동은</p>
		</div>
	</div>
</section>

<style lang="scss">
	section.letter {
		padding: 4.5em 3.5em 3em 3.5em;
	}

	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 4em;
	}

	.invitation-text {
		font-size: 0.9em;
		color: #8b7355;
		font-weight: 400;
		letter-spacing: 2px;
		text-transform: uppercase;
		font-family: 'Helvetica Neue', 'Arial', sans-serif;
		margin-bottom: 0.8em;
	}

	.title {
		color: $primary-color;
		font-size: 1.6em;
		font-weight: 500;
		font-family: 'Noto Serif KR', serif;
		letter-spacing: 0.5px;
		text-align: center;
		line-height: 1.4;

		&.kr {
			@extend .title-font-kr;
			margin-bottom: 0.4em;
		}

		&.en {
			@extend .title-font-en;
			margin-bottom: 0.2em;
		}
	}

	p.letter {
		text-align: center;
		&.kr {
			line-height: 2.3em;
			font-size: 0.9rem;
		}
		&.en {
			line-height: 1.8em;
			font-size: 1.2rem;
		}
	}

	.letter-signature {
		margin-top: 2em;

		p {
			text-align: right;
			font-size: 1.2rem;
		}
	}

	.family-description {
		margin-top: 2em;
		text-align: center;
		
		p {
			color: $font-color-default;
			margin-bottom: 0.2em;
			font-size: 0.9rem;
			line-height: 1.8;
		}
		
		.relationship {
			color: #d4a5a5;
		}
		
		.name-gap {
			display: inline-block;
			width: 0.5em;
		}
	}

	.letter-content {
		text-align: center;
		margin-top: 2em;
		margin-bottom: 2.5em;
		
		p {
			margin-bottom: 0.8em;
			line-height: 1.8;
			
			&.kr {
				line-height: 2.3em;
				font-size: 0.9rem;
			}
			&.en {
				line-height: 1.8em;
				font-size: 1.2rem;
			}
		}
	}

	.divider {
		width: 1px;
		height: 40px;
		background-color: #ddd;
		margin: 2em auto;
	}
</style>
