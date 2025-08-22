<script>
	import { MessageCircle, Link } from '@lucide/svelte';

	function shareKakaoTalk() {
		// 카카오톡 공유 기능
		const shareUrl = window.location.href;
		const shareTitle = '최믿음 & 신동은의 결혼식에 초대합니다';
		const shareDescription = '저희 결혼식에 함께해 주세요!';

		// 카카오톡 앱으로 직접 공유 (친구 선택 화면으로 이동)
		const kakaoShareUrl = `kakaotalk://send?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle + '\n' + shareDescription)}`;

		// 카카오톡 앱 실행 시도
		window.location.href = kakaoShareUrl;

		// 카카오톡 앱이 없는 경우를 위한 폴백 (3초 후)
		setTimeout(() => {
			// 카카오톡 앱이 열리지 않았다면 카카오톡 다운로드 페이지로 이동
			window.open('https://www.kakaocorp.com/service/KakaoTalk', '_blank');
		}, 3000);
	}

	function copyInvitationLink() {
		const invitationUrl = window.location.href;
		
		navigator.clipboard.writeText(invitationUrl).then(() => {
			alert('청첩장 주소가 복사되었습니다!');
		}).catch(err => {
			console.error('복사 실패:', err);
			// 폴백: 텍스트 영역을 사용한 복사
			const textArea = document.createElement('textarea');
			textArea.value = invitationUrl;
			document.body.appendChild(textArea);
			textArea.select();
			document.execCommand('copy');
			document.body.removeChild(textArea);
			alert('청첩장 주소가 복사되었습니다!');
		});
	}
</script>

<section class="share">
	<div class="share-divider"></div>
	
	<div class="share-options">
		<button class="share-option" on:click={shareKakaoTalk}>
			<MessageCircle size={20} />
			<span>카카오톡으로 공유하기</span>
		</button>
		
		<button class="share-option" on:click={copyInvitationLink}>
			<Link size={20} />
			<span>청첩장 주소 복사하기</span>
		</button>
	</div>
</section>

<style lang="scss">
	.share {
		padding: 1em 20em;
	}

	.share-divider {
		width: 100%;
		height: 1px;
		background-color: #e0e0e0;
		margin-bottom: 1.5em;
	}

	.share-options {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

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

		.share-option {
			padding: 0.6em 0;
		}

		.share-option span {
			font-size: 0.9rem;
		}
	}
</style>
