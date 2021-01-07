import React, { memo, useMemo, useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Slider } from 'antd';
import classNames from 'classnames'
import { PlayerBarWrapper } from './style'
import { imageSize, formatTime } from '@/utils/utils';
import { playMode } from '@/common/playConfig'
import { selectPlayModeAction, selectPlayState, selectCurrentSong } from '../../views/player/store/actionCreators';
import defaultCover from '@/assets/images/default-cover.png';

const AppFooter = memo(() => {
  const [currentTime, setCurrentTime] = useState('00:00');
  const [progress, setProgress] = useState(0);
  const [progressState, setProgressState] = useState(false);
  const [songReady, setSongReady] = useState(false);
  const [volume, setVolume] = useState(0.2)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef();
  const dispatch = useDispatch();
  
  // 获取数据
  const { currentSong, playingState, mode  } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    playList: state.getIn(["player", "playList"]),
    playingState: state.getIn(["player", "playingState"]),
    currentIndex: state.getIn(["player", "currentIndex"]),
    sequenceList: state.getIn(["player", "sequenceList"]),
    mode: state.getIn(["player", "playMode"])
  }), shallowEqual)

  // 设置播放模式的图标
  const modeIcon = useMemo(() => {
    return mode === playMode.sequence
      ? 'nicexunhuanbofang24'
      : mode === playMode.loop
      ? 'nicebofangqidanquxunhuan'
      : 'nicebofangqisuijibofang'
  }, [mode])
  
  // 设置音量图标
  const mutedIcon = useMemo(() => {
    return isMuted ? 'nicejingyin1' : 'niceshengyin1'
  }, [isMuted])

  useEffect(() => {
    setSongReady(false)
    audioRef.current.src = currentSong.url
  }, [currentSong])

  // 监听播放状态
  useEffect(() => {
    playingState ? audioRef.current.play() : audioRef.current.pause()
  }, [songReady, playingState])

  const picUrl = currentSong.image || defaultCover
  const name = currentSong.name || '未选择歌曲'
  const singer = currentSong.singer || ''
  const duration = currentSong.duration || '00:00'

  // 歌曲播放准备完成
  const audioReady = () => {
    setSongReady(true)
  }

  // 歌曲 播放/暂停
  const togglePlaying = useCallback(() => {
    dispatch(selectPlayState(!playingState))
  }, [dispatch, playingState])

  // 歌曲 上一首/下一首
  const changeSong = (state) => {
    dispatch(selectCurrentSong(state))
    dispatch(selectPlayState(true))
  }
  
  // 单曲循环
  const loopSong = () => {
    audioRef.current.currentTime = 0
    audioRef.current.play()
    dispatch(selectPlayState(true))
  }

  // 监听歌曲播放时间改变
  const timeUpdate = (e) => {    
    if(!progressState) {
      setCurrentTime(e.target.currentTime * 1000)
      setProgress(currentTime / duration * 100)
    }    
  }

  // 改变歌曲进度拖动
  const changeProgress = useCallback(val => {
    setProgressState(true)
    const currentTime = val / 100 * duration
    setCurrentTime(currentTime)
    setProgress(val)
  }, [duration])

  // 改变歌曲进度抬起
  const changeProgressAfter = useCallback(val => {
    const currentTime = val / 100 * duration / 1000
    audioRef.current.currentTime = currentTime
    setCurrentTime(currentTime * 1000)
    setProgressState(false)
    if(!playingState) {
      togglePlaying()
    }
  }, [duration, playingState, togglePlaying])

  // 切换歌曲播放模式
  const changeMode = () => {
    const currentMode = (mode + 1) % 3
    dispatch(selectPlayModeAction(currentMode))
  }

  // 歌曲暂停
  const audioPaused = () => {
    selectPlayState(false)
  }

  // 歌曲播放结束
  const audioEnd = () => {
    setCurrentTime(0)
    if (mode === playMode.loop) {
      loopSong()
    } else {
      changeSong(1)
    }
  }

  // 歌曲播放错误
  const audioError = () => {
    setSongReady(true)
  }

  // 控制音量大小
  const changeVolume = (e) => {
    if (e === 0) {
      setIsMuted(true)
    } else {
      setIsMuted(false)
    }
    const volume = e / 100
    setVolume(volume)
    audioRef.current.volume = volume
  }

  // 控制是否静音
  const changeMuted = () => {
    isMuted ? mutedHandle(false, 0.5) : mutedHandle(true, 0)
  }
  // 控制是否静音操作
  const mutedHandle = (state, num) => {
    setIsMuted(state)
    setVolume(num)
    audioRef.current.volume = num
  }

  // 设置进度条tooltip
  const progressFormatter = (val) => {
    return formatTime(currentTime)
  }

  return (
    <PlayerBarWrapper className="player-bar shadow">
      <div className="container">
        <div className="wrapper flex-row">
          <div className="left flex-row">            
            <div className="player-btn">
              <i className="niceicon icon-prev nice1_music83" onClick={ () => changeSong(-1)}></i>
              <div className="icon-play flex-center" onClick={e => togglePlaying()}>
                <i className={classNames({"niceicon_play": !playingState},{"nice07zanting": playingState}, "niceicon")}></i>
              </div>
              <i className="niceicon icon-next nice1_music82" onClick={() => changeSong(1)}></i>              
            </div>
          </div>
          <div className="center">
            <img className="cover" src={imageSize(picUrl)} alt=""/>
            <div className="info">
              <div className="top flex-between">
                <h2 className="name">{name} <span>{singer}</span> </h2>
                <p className="time">{formatTime(currentTime)} / {formatTime(duration)}</p>
              </div>
              <div className="progress-wrap flex-row">
                <Slider value={progress} onChange={ changeProgress } onAfterChange={ changeProgressAfter } tipFormatter={ progressFormatter } />
              </div>
            </div>     
          </div>
          <div className="right flex-row">
            <div className="volume-wrap flex-row">
              <i className={classNames(mutedIcon, "niceicon volume-icon")} onClick={ changeMuted }></i>
              <Slider value={volume * 100} onChange={ changeVolume } />
            </div>
            <div className="tool">
              <i className={classNames(modeIcon, "niceicon")} onClick={ changeMode }></i>
              <i className="niceicon nicegeci32"></i>
              <i className="niceicon nicebofangliebiao24"></i>
            </div>
          </div>
          
        </div>
      </div>
      <audio
        ref={audioRef}
        onPlaying={ audioReady }
        onPause={ audioPaused }
        onTimeUpdate={ timeUpdate }
        onEnded={ audioEnd }
        onError={ audioError }
        muted={isMuted}
        volume={volume}
      />
    </PlayerBarWrapper>
  );
});

export default AppFooter;