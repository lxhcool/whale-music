import qs from 'qs'
import { createSong } from './song'
import { getSongDetail } from '@/apis/services/player';

// 补0方法
export const formatZero = (num, len) => {
  if (String(num).length > len) return num
  return (Array(len).join(0) + num).slice(-len)
}

// 日期格式化
export const dateFormat = (str, type='YYYY-MM-DD') => {
  let date = new Date(str)
  let year = date.getFullYear()
  let month = formatZero(date.getMonth() + 1, 2)
  let day = formatZero(date.getDate(), 2)
  let hour = formatZero(date.getHours(), 2)
  let minute = formatZero(date.getMinutes(), 2)
  let seconds = formatZero(date.getSeconds(), 2)
  if (type === 'YYYY-MM-DD') {
    return `${year}-${month}-${day}`
  } else if (type === 'YYYY-MM-DD HH:MM:SS') {
    return `${year}-${month}-${day} ${hour}:${minute}:${seconds}`
  } else if (type === 'MM/DD  HH:MM:SS') {
    return `${month}/${day} ${hour}:${minute}:${seconds}`
  }
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

// 获取歌曲播放链接
export const getSongUrl = id => {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

// 数组随机
export const shuffle = arr => {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}
export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


// 根据数组查找对应值
export const findIndex = (list, song) => {
  return list.findIndex(item => {
    return item.id === song.id
  })
}

// 获取歌曲详情
export const getSongDetails = async (lists) => {
  const timestamp = new Date().valueOf()
  const list = lists.map(item => {
    return item.id
  }).join(',')
  const newSongs = await getSongDetail(list, timestamp)  
  newSongs.songs.map(item => (
    newSongs.privileges.forEach(ytem => {
      if(ytem.id === item.id) {
        item.st = ytem.st
        item.fee = ytem.fee
        item.cs = ytem.cs
      }
    })
  ))
  const newLists = normalizeSongs(newSongs.songs)
  const filterList = newLists.filter(item => {
    return item.fee !== 1 && item.st !== -200 && !item.cs
  })
  return filterList
}

// 处理歌曲
export const normalizeSongs = list => {
  let ret = []
  list.forEach(item => {
    if (item.id) {
      ret.push(createSong(item))
    }
  })
  return ret
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

// 转换成秒
export const formatSecond = (time) => {
  // 取整
  time = ~~time
  var secondTime
  if (time < 10) {
    secondTime = '00:0' + time
  } else if (time < 60) {
    secondTime = '00:' + time
  } else {
    var m = ~~parseInt((time % (1000 * 60 * 60)) / (1000 * 60))
    var s = ~~parseInt((time % (1000 * 60)) / 1000)
    secondTime = Number(m * 60 + s)
  }
  return secondTime
}

// 秒转00:00
export const formatSecondTime = (interval) => {
  interval = interval | 0
  const m = (interval / 60) | 0
  const s = interval % 60
  return `${formatZero(m, 2)}:${formatZero(s, 2)}`
}

export const formatMsgTime = (dateTimeStamp) => {
  var result = ''
  var minute = 1000 * 60
  var hour = minute * 60
  var day = hour * 24
  var month = day * 30
  var now = new Date().getTime()
  var diffValue = now - dateTimeStamp
  if (diffValue < 0) return
  var monthC = diffValue / month
  var weekC = diffValue / (7 * day)
  var dayC = diffValue / day
  var hourC = diffValue / hour
  var minC = diffValue / minute
  if (monthC >= 1) {
    result = '' + parseInt(monthC) + '月前'
  } else if (weekC >= 1) {
    result = '' + parseInt(weekC) + '周前'
  } else if (dayC >= 1) {
    result = '' + parseInt(dayC) + '天前'
  } else if (hourC >= 1) {
    result = '' + parseInt(hourC) + '小时前'
  } else if (minC >= 1) {
    result = '' + parseInt(minC) + '分钟前'
  } else {
    result = '刚刚'
  }
  return result
}

// 截取参数id
export const getSearchId = (param) => {
  return qs.parse(param.replace("?", ""))
}