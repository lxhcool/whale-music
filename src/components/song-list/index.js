import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux'
import { formatZero, formatTime } from '@/utils/utils';
import { SongListWrapper } from './style'

const SongList = memo(() => {

  // 获取数据
  const { playList } = useSelector(state => ({
    playList: state.getIn(["player", "playList"])
  }), shallowEqual)
  console.log(playList)
  return (
    <SongListWrapper>
      <div className="tool-head">
        <div className="item play-item">
          <i className="niceicon niceOutlined_Play"></i> 播放全部
        </div>
        <div className="item collect-item">
          <i className="niceicon niceshoucang"></i>
          收藏
        </div>
      </div>
      <table className="list-table">
        <thead>
          <tr>
            <th className="th-index">序号</th>
            <th className="th-name">歌曲</th>
            <th className="th-artist">歌手</th>
            <th className="th-album">专辑</th>
            <th className="th-duration">时长</th>
          </tr>
        </thead>
        <tbody>
          {
            playList.length > 0 && playList.map((item, index) => {
              return (
                <tr>
                  <td>
                    <div className="index-container flex-center">
                      <span className="num">{formatZero(index + 1, 2)}</span>
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
                  </td>
                  <td>
                    <div className="name-container">
                      <p className="name ellipsis" title={item.name}>{item.name}</p>
                    </div>
                  </td>
                  <td>
                    <div className="artist-container">
                      <p className="author ellipsis" title={item.singer}>{item.singer}</p>
                    </div>
                  </td>
                  <td>
                    <div className="album-container">
                      <p className="ellipsis" title={item.album}>{item.album}</p>
                    </div>
                  </td>
                  <td>
                    <div className="duration-container">
                      <p>{formatTime(item.duration)}</p>
                      <div className="song-tools">
                        <i className="niceicon niceicon-heart" title="喜欢"></i>
                        <i className="niceicon nicexiazai" title="下载"></i>
                        <i className="niceicon nicedot" title="更多"></i>
                      </div>
                    </div>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </SongListWrapper>
  );
});

export default SongList;