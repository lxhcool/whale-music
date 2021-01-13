import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux'
import { imageSize, formatMsgTime } from '@/utils/utils';
import {
  SheetDetailRightWrapper
} from './style';

const SheetDetailLeft = memo(() => {

  // 获取数据
  const { subscribers, relateds, comments } = useSelector(state => ({
    subscribers: state.getIn(["sheet", "subscribers"]),
    relateds: state.getIn(["sheet", "relateds"]),
    comments: state.getIn(["sheet", "comments"])
  }), shallowEqual)

  return (
    <SheetDetailRightWrapper>
      <div className="like module shadow">
        <div className="card-header flex-row">
          <span>喜欢这个歌单的人</span>
        </div>
        <ul>
          {
            subscribers.length > 0 && subscribers.map(item => {
              return (
                <li key={item.userId}>
                  <div className="avatar">
                    <img
                      src={imageSize(item.avatarUrl)}
                      alt={item.nickname}
                      title={item.nickname}
                    />
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="related module shadow">
        <div className="card-header flex-row">
          <span>相关推荐</span>
        </div>
        <ul>
          {
            relateds.length > 0 && relateds.map(item => {
              return (
                <li key={item.id}>
                  <div className="avatar">
                    <img
                      src={imageSize(item.coverImgUrl)}
                      alt={item.nickname}
                      title={item.nickname}
                    />
                  </div>
                  <div className="info">
                    <h2 className="ellipsis" title={item.name}>{ item.name }</h2>
                    <span>By. <small> {item.creator.nickname}</small></span>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="comment module shadow">
        <div className="card-header flex-row">
          <span>精彩评论</span>
        </div>
        <ul>
          {
            comments.length > 0 && comments.map(item => {
              return (
                <li className="item" key={item.time}>
                  <div className="avatar">
                    <img
                      src={imageSize(item.user.avatarUrl)}
                      alt={item.user.nickname}
                      title={item.user.nickname}
                    />
                  </div>
                  <div className="info">
                    <h2>
                      { item.user.nickname}<small> · { formatMsgTime(item.time) }</small>
                    </h2>
                    <p>{ item.content }</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </SheetDetailRightWrapper>
  );
});

export default SheetDetailLeft;