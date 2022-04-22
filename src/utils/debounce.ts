export function debounce(func: any, wait: number) {
	let timeout: ReturnType<typeof setTimeout>;
	return function () {
		clearTimeout(timeout);
		timeout = setTimeout(func, wait);
	};
}

