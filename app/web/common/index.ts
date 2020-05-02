export const QINIU_HOST = 'http://q9o1c3w1a.bkt.clouddn.com';

/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
export function debounce(func: Function, wait: number, immediate = false): () => void {
  let timeout;

  return function () {
    const context = this;
    const args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };
}

/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 */
export function throttle(func: Function, wait: number) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    }
  };
}

/**
 * @desc 七牛云图片样式
 * @param origin
 * @param width
 * @param height
 * @param quality
 * @param isWatermark 是否显示水印
 */
export const getQiNiuImgUrl = (origin: string, width: number, height: number, quality = 80, isWatermark = true): string => {
  const watermark = '|watermark/1/image/aHR0cHM6Ly9kbi1vanBibHkxdW4ucWJveC5tZS9sb2dvLnBuZw==/dissolve/80/gravity/SouthWest/dx/10/dy/10';
  return `${QINIU_HOST}${origin}?imageView2/5/w/${width}/h/${height}/format/webp/interlace/1/q/${quality}${isWatermark ? watermark : ''}`;
};
