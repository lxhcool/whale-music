// 补0方法
export const formatZero = (num, len) => {
  if (String(num).length > len) return num
  return (Array(len).join(0) + num).slice(-len)
}

/**
 * 数字转整数 如 100000 转为10万
 * @param {需要转化的数} num
 * @param {需要保留的小数位数} point
 */

export const tranNumber = (num, point = 0) => {
  let numStr = num.toString()
  // 十万以内直接返回
  if (numStr.length < 6) {
    return numStr
  }
  //大于8位数是亿
  else if (numStr.length > 8) {
    let decimal = numStr.substring(
      numStr.length - 8,
      numStr.length - 8 + point
    )
    return parseFloat(parseInt(num / 100000000) + '.' + decimal) + '亿'
  }
  //大于6位数是十万 (以10W分割 10W以下全部显示)
  else if (numStr.length > 5) {
    let decimal = numStr.substring(
      numStr.length - 4,
      numStr.length - 4 + point
    )
    return parseFloat(parseInt(num / 10000) + '.' + decimal) + '万'
  }
}

// 设置图片大小
export const imageSize = (imgUrl, size = 140)  => {
  return `${imgUrl}?param=${size}y${size}`
}

// 设置图片模糊
export const imageBlur = (imgUrl)  => {
  return `${imgUrl}?param=80y80&imageView&blur=40x20`
}

// 格式化时间毫秒转分秒
export const formatTime = (time) => {
  // 取整
  time = ~~time
  var formatTime
  if (time < 10) {
    formatTime = '00:0' + time
  } else if (time < 60) {
    formatTime = '00:' + time
  } else {
    var m = ~~parseInt((time % (1000 * 60 * 60)) / (1000 * 60))
    if (m < 10) {
      m = '0' + m
    }
    var s = ~~parseInt((time % (1000 * 60)) / 1000)
    if (s < 10) {
      s = '0' + s
    }
    formatTime = m + ':' + s
  }
  return formatTime
}