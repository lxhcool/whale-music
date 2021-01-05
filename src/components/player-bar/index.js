import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import classNames from 'classnames'
import { imageSize, formatTime, getSongUrl } from '@/utils/utils';
import { PlayerBarWrapper } from './style'

import { Slider } from 'antd';
import { getSongDetailAction } from '../../views/player/store/actionCreators';

const AppFooter = memo(() => {
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [progressState, setProgressState] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  // 获取数据
  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"])
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSongDetailAction(1332662300));
  }, [dispatch])

  useEffect(() => {
    audioRef.current.src = getSongUrl(currentSong.id)
  }, [currentSong])

  const picUrl = currentSong.al && currentSong.al.picUrl
  const singer = currentSong.ar && currentSong.ar[0].name
  const duration = currentSong.dt

  // 歌曲 播放/暂停
  const togglePlaying = useCallback(() => {    
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  // 监听歌曲播放时间改变
  const timeUpdate = (e) => {    
    if(!progressState) {
      setCurrentTime(e.target.currentTime * 1000)
      setProgress(currentTime / duration * 100)
    }    
  }

  // 改变歌曲进度
  const changeProgress = useCallback(val => {
    setProgressState(true)
    const currentTime = val / 100 * duration
    setCurrentTime(currentTime)
    setProgress(val)
  }, [duration])

  const changeProgressAfter = useCallback(val => {
    const currentTime = val / 100 * duration / 1000
    audioRef.current.currentTime = currentTime
    setCurrentTime(currentTime * 1000)
    setProgressState(false)
    if(!isPlaying) {
      togglePlaying()
    }
  }, [duration, isPlaying, togglePlaying])

  return (
    <PlayerBarWrapper className="player-bar shadow">
      <div className="container">
        <div className="wrapper flex-row">
          <div className="left flex-row">            
            <div className="player-btn">
              <i className="niceicon icon-prev nice1_music83"></i>
              <div className="icon-play flex-center" onClick={e => togglePlaying()}>
                <i className={classNames({"niceicon_play": !isPlaying},{"nice07zanting": isPlaying}, "niceicon")}></i>
              </div>
              <i className="niceicon icon-next nice1_music82"></i>              
            </div>
          </div>
          <div className="center">
            <img className="cover" src={imageSize(picUrl)} alt=""/>
            <div className="info">
              <div className="top flex-between">
                <h2 className="name">{currentSong.name} <span>（{singer}）</span> </h2>
                <p className="time">{formatTime(currentTime)} / {formatTime(currentSong.dt)}</p>
              </div>
              <div className="progress-wrap flex-row">
                <Slider value={progress} onChange={ changeProgress } onAfterChange={ changeProgressAfter } />
              </div>
            </div>     
          </div>
          <div className="right flex-row">
            <div className="volume-wrap flex-row">
              <i className="niceicon volume-icon niceshengyin1"></i>
              <Slider />
            </div>
            <div className="tool">
              <i className="niceicon nicexunhuanbofang24"></i>
              <i className="niceicon nicegeci32"></i>
              <i className="niceicon nicebofangliebiao24"></i>
            </div>
          </div>
          
        </div>
      </div>
      <audio ref={audioRef} onTimeUpdate={ timeUpdate } />
    </PlayerBarWrapper>
  );
});

export default AppFooter;