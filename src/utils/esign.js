/**
 * 图片旋转
 */
export function rotateBase64Img(src, edg, fileName, fileType, callback) {
	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');

	var imgW; // 图片宽度
	var imgH; // 图片高度
	var size; // canvas初始大小

	if (edg % 90 !== 0) {
		console.error('旋转角度必须是90的倍数!');
		return '旋转角度必须是90的倍数!';
	}
	edg < 0 && (edg = (edg % 360) + 360);
	const quadrant = (edg / 90) % 4; // 旋转象限
	const cutCoor = { sx: 0, sy: 0, ex: 0, ey: 0 }; // 裁剪坐标

	var image = new Image();
	image.crossOrigin = 'Anonymous';
	image.src = src;

	image.onload = () => {
		imgW = image.width;
		imgH = image.height;
		size = imgW > imgH ? imgW : imgH;

		canvas.width = size * 2;
		canvas.height = size * 2;
		switch (quadrant) {
			case 0:
				cutCoor.sx = size;
				cutCoor.sy = size;
				cutCoor.ex = size + imgW;
				cutCoor.ey = size + imgH;
				break;
			case 1:
				cutCoor.sx = size - imgH;
				cutCoor.sy = size;
				cutCoor.ex = size;
				cutCoor.ey = size + imgW;
				break;
			case 2:
				cutCoor.sx = size - imgW;
				cutCoor.sy = size - imgH;
				cutCoor.ex = size;
				cutCoor.ey = size;
				break;
			case 3:
				cutCoor.sx = size;
				cutCoor.sy = size - imgW;
				cutCoor.ex = size + imgH;
				cutCoor.ey = size + imgW;
				break;
		}

		ctx.translate(size, size);
		ctx.rotate((edg * Math.PI) / 180);
		ctx.drawImage(image, 0, 0);

		var imgData = ctx.getImageData(
			cutCoor.sx,
			cutCoor.sy,
			cutCoor.ex,
			cutCoor.ey,
		);

		if (quadrant % 2 === 0) {
			canvas.width = imgW;
			canvas.height = imgH;
		} else {
			canvas.width = imgH;
			canvas.height = imgW;
		}

		ctx.putImageData(imgData, 0, 0);
		callback(dataURLtoFile(canvas.toDataURL(), fileName, fileType));
		// callback(canvas.toDataURL())
	};
}
/**
 * 将 base64 转换为 file 对象
 *    dataURL：base64 格式
 *    fileName：文件名
 *    fileType：文件格式
 */
export function dataURLtoFile(dataURL, fileName, fileType) {
	// const arr = dataURL.split(',')
	// const mime = arr[0].match(/:(.*?);/)[1]
	// const bstr = atob(arr[1])
	// let n = bstr.length
	// const u8arr = new Uint8Array(n)
	// while (n--) {
	//   u8arr[n] = bstr.charCodeAt(n)
	// }
	return new File([u8arr], fileName, { type: fileType || 'image/jpg' });
}
