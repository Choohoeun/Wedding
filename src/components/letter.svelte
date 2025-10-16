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
			<p>새 계명을 너희에게 주노니 서로 사랑하라</p>
			<p>내가 너희를 사랑한 것 같이</p>
			<p>너희도 서로 사랑하라</p>
			<p>하나님의 신실한 계획 아래</p>
			<p>있는 그대로 사랑할 사람을 만나</p>
			<p>믿음으로 한 가정을 이루고자 합니다.</p>
			<p>저희가 하나되는 자리에 오셔서</p>
			<p>따뜻한 마음으로 축복해주세요.</p>
		</div>

		<div class="divider"></div>

		<div class="family-description kr">
			<p>백현철 · 김동자 <span class="relationship">의 아들</span><span class="name-gap"></span>최믿음</p>
			<p>홍수철 · 박순자 <span class="relationship">의 딸</span><span class="name-gap"></span>신동은</p>
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
		margin-bottom: 2em;
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
			margin-bottom: 0.5em;
			font-size: 0.9rem;
			line-height: 2.2;
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
		margin-bottom: 2em;
		
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
