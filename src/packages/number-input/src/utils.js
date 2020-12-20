/**
 * 将传入的字符串或数字转成价格的形式的字符串
 * @param {String|Number} num 需要被转为价格形式的字符串或数字
 * @param {String} 返回的是一个价格形式的字符串
 */
export function formatPrice(num, length = 2) {
  if (!num) { // 处理空值的情况
    return 0
  }
  const numArr = num.split('.')
  if (numArr.length > 1 && length) { // 找到小数点，对小数点后的长度做处理
    numArr[1] = numArr[1].slice(0, length)
    num = numArr[0] + '.' + numArr[1]
  }
  if (!numArr[0].length) { // 如果输入的第一个是小数点
    num = ''
  }
  return num
}
