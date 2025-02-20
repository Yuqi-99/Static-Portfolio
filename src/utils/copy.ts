// export const copyToClipboard = (text: string) => {
// 	if (!navigator.clipboard) {
// 		// 如果 clipboard API 不可用，使用旧方法
// 		const textArea = document.createElement('textarea');
// 		textArea.value = text;
// 		document.body.appendChild(textArea);
// 		textArea.select();
// 		try {
// 			document.execCommand('copy');
// 		} catch (err) {
// 			console.error('无法复制文本', err);
// 		}
// 		document.body.removeChild(textArea);
// 	} else {
// 		navigator.clipboard.writeText(text).then(
// 			() => console.log('复制成功!'),
// 			(err) => console.error('复制失败', err)
// 		);
// 	}
// };

export function updateCopyIcon(success: { email: boolean; phone: boolean }) {
	const emailCopyIcon = document.getElementById('emailCopyIcon');
	const phoneCopyIcon = document.getElementById('phoneCopyIcon');
	if (emailCopyIcon && success.email) {
		emailCopyIcon.innerHTML = success ? '✅' : '📩';
		setTimeout(() => {
			emailCopyIcon.innerHTML = '📩';
		}, 2000);
	}
	if (phoneCopyIcon && success.phone) {
		phoneCopyIcon.innerHTML = success ? '✅' : '📩';
		setTimeout(() => {
			phoneCopyIcon.innerHTML = '📩';
		}, 2000);
	}
}

export function copyToClipboard(text: string, type: string) {
	if (!navigator.clipboard) {
		const textArea = document.createElement('textarea');
		textArea.value = text;
		document.body.appendChild(textArea);
		textArea.select();
		try {
			document.execCommand('copy');
			if (type === 'email') {
				updateCopyIcon({ email: true, phone: false });
			} else {
				updateCopyIcon({ email: false, phone: true });
			}
		} catch (err) {
			console.error('无法复制文本', err);
		}
		document.body.removeChild(textArea);
	} else {
		navigator.clipboard.writeText(text).then(
			() => {
				console.log('复制成功!');
				if (type === 'email') {
					updateCopyIcon({ email: true, phone: false });
				} else {
					updateCopyIcon({ email: false, phone: true });
				}
			},
			(err) => console.error('复制失败', err)
		);
	}
}
