/** 歌曲处理 */

import { formatSecond, getSongUrl } from './utils'

export default class Song {
  constructor({
    id,
    singer,
    name,
    album,
    duration,
    image,
    url,
    playCount,
    score
  }) {
    this.id = id
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
    this.playCount = playCount
    this.score = score
  }
}

export function createSong(musicData) {
  return new Song({
    id: musicData.id,
    singer: filterSinger(musicData.ar || musicData.artists),
    name: musicData.name,
    album: musicData.al ? musicData.al.name : musicData.album.name,
    duration: formatSecond(musicData.dt || musicData.duration),
    image: musicData.al
      ? musicData.al.picUrl
      : musicData.album.artist.img1v1Url,
    url: getSongUrl(musicData.id),
    playCount: musicData.playCount || '',
    score: musicData.score || ''
  })
}

// 歌手处理
function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.map(item => (
    ret.push(item.name)
  ))
  return ret.join(' / ')
}