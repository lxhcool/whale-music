import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { imageSize } from '@/utils/utils'
import { getHotSongAction } from '../../store/actionCreators';

import {
  RecommendSongWrapper
} from './style';

const RecommendSong = memo(() => {

  // 获取数据
  const { songs } = useSelector(state => ({
    songs: state.getIn(["home", "songs"])
  }), shallowEqual)


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotSongAction())
  }, [dispatch])

  return (
    <RecommendSongWrapper className="recommend-song">
      <h2 className="title">新歌推荐</h2>
      <div className="list">
        {
          songs.map(item => {
            return (
              <div className="item" key={item.id}>
                <div className="wrapper flex-center">
                  <div className="index-container flex-center">
                    <div className="cover">
                      <img className="cover-img" src={imageSize(item.picUrl)} alt=""/>
                    </div>
                    <div className="play-icon">
                      <div className="line" style={{animationDelay: "-1.2s"}}></div>
                      <div className="line"></div>
                      <div className="line" style={{animationDelay: "-1.5s"}}></div>
                      <div className="line" style={{animationDelay: "-0.9s"}}></div>
                      <div className="line" style={{animationDelay: "-0.6s"}}></div>
                    </div>
                    <i className="niceicon nicebofang2 play-btn"></i>
                    <i className="niceicon nicezanting1 pause-btn"></i>
                  </div>
                  <div className="info flex-between">
                    <div className="left">
                      <p className="name">{ item.name }</p>
                      <p className="flex-row author ellipsis">
                        <span>一棵小葱戚琦</span>
                      </p>
                    </div>
                    <p className="duration transition">
                      03:25
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