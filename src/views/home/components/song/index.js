import React, { memo, useEffect, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import classNames from 'classnames'
import { imageSize, formatTime } from '@/utils/utils'
import { getHotSongAction } from '../../store/actionCreators';
import { selectPlayAction, selectPlayState } from '../../../player/store/actionCreators';

import {
  RecommendSongWrapper
} from './style';

const RecommendSong = memo(() => {

  // 发送请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotSongAction())
  }, [dispatch])

  // 获取数据
  const { songs, currentSong, currentIndex, playingState } = useSelector(state => ({
    songs: state.getIn(["home", "songs"]),
    currentSong: state.getIn(["player", "currentSong"]),
    currentIndex: state.getIn(["player", "currentIndex"]),
    playingState: state.getIn(["player", "playingState"]),
  }), shallowEqual)

  // 播放歌曲
  const playSong = useCallback((item, index) => {    
    dispatch(selectPlayAction(songs, index))
  }, [dispatch, songs])

  const pauseSong = useCallback(() => {
    dispatch(selectPlayState(false))
  }, [dispatch])

  return (
    <RecommendSongWrapper className="recommend-song">
      <h2 className="title">新歌推荐</h2>
      <div className="list">
        {
          songs.map((item, index) => {
            return (
              <div className={classNames({"playing": index === currentIndex && currentSong.id === item.id && playingState}, "item")} key={item.id}>
                <div className="wrapper flex-center">
                  <div className="index-container flex-center">
                    <div className="cover">
                      <img className="cover-img" src={imageSize(item.image)} alt=""/>
                    </div>
                    <div className="play-icon">
                      <div className="line" style={{animationDelay: "-1.2s"}}></div>
                      <div className="line"></div>
                      <div className="line" style={{animationDelay: "-1.5s"}}></div>
                      <div className="line" style={{animationDelay: "-0.9s"}}></div>
                      <div className="line" style={{animationDelay: "-0.6s"}}></div>
                    </div>
                    <i className="niceicon nicebofang2 play-btn" onClick={() => playSong(item, index)}></i>
                    <i className="niceicon nicezanting1 pause-btn" onClick={pauseSong}></i>
                  </div>
                  <div className="info flex-row">
                    <div className="left">
                      <p className="name">{ item.name }</p>
                      <p className="flex-row author ellipsis">
                        <span>{item.singer}</span>
                      </p>
                    </div>
                    <p className="duration transition">
                      {formatTime(item.duration)}
                    </p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </RecommendSongWrapper>
  );
});

export default RecommendSong;