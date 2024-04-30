/**
 * window.localStorage 浏览器永久缓存
 * @method set 设置永久缓存
 * @method get 获取永久缓存
 * @method remove 移除永久缓存
 * @method clear 移除全部永久缓存
 */
export const Local = {
	// 设置永久缓存
	set(key: string, val: any) {
		window.localStorage.setItem(key, JSON.stringify(val));
	},
	// 获取永久缓存
	get<T>(key: string): T | null {
		let jsonStr: string | null = window.localStorage.getItem(key);
		if (!jsonStr) {
			// 如果 localStorage 不存在该 key，可选择记录日志、返回默认值或抛出异常，这里选择返回 null
			return null;
		}

		try {
			// 尝试解析 JSON 字符串
			let jsonObj: T = JSON.parse(jsonStr);
			// 如果解析成功，返回解析后的对象
			return jsonObj;
		} catch (error) {
			// 如果解析失败，可选择记录错误日志，这里简单打印错误信息
			// console.error(`Error parsing JSON from localStorage for key "${key}":`, error);
			// 解析失败时返回 null，或根据具体场景选择其他错误处理策略
			return null;
		}
	},
	// 移除永久缓存
	remove(key: string) {
		window.localStorage.removeItem(key);
	},
	// 移除全部永久缓存
	clear() {
		window.localStorage.clear();
	},
};

/**
 * window.sessionStorage 浏览器临时缓存
 * @method set 设置临时缓存
 * @method get 获取临时缓存
 * @method remove 移除临时缓存
 * @method clear 移除全部临时缓存
 */
export const Session = {
	// 设置临时缓存
	set(key: string, val: any) {
		window.sessionStorage.setItem(key, JSON.stringify(val));
	},
	// 获取临时缓存
	get<T>(key: string): T | null {
		let jsonStr: string | null = window.sessionStorage.getItem(key);
		if (!jsonStr) {
			// 如果 sessionStorage 不存在该 key，可选择记录日志、返回默认值或抛出异常，这里选择返回 null
			return null;
		}

		try {
			// 尝试解析 JSON 字符串
			let jsonObj: T = JSON.parse(jsonStr);
			// 如果解析成功，返回解析后的对象
			return jsonObj;
		} catch (error) {
			// 如果解析失败，可选择记录错误日志，这里简单打印错误信息
			// console.error(`Error parsing JSON from sessionStorage for key "${key}":`, error);
			// 解析失败时返回 null，或根据具体场景选择其他错误处理策略
			return null;
		}
	},
	// 移除临时缓存
	remove(key: string) {
		window.sessionStorage.removeItem(key);
	},
	// 移除全部临时缓存
	clear() {
		window.sessionStorage.clear();
	},
};
