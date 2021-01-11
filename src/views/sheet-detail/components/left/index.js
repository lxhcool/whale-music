import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux'
import { imageSize, dateFormat } from '@/utils/utils';
import {
  SheetDetailLeftWrapper
} from './style';

import SongList from '@/components/song-list'

const SheetDetailLeft = memo(() => {

  // 获取数据
  const { sheetDetail } = useSelector(state => ({
    sheetDetail: state.getIn(["sheet", "sheetDetail"])
  }), shallowEqual)

  const cover = (sheetDetail && imageSize(sheetDetail.coverImgUrl, 200))
  const avatar = sheetDetail && sheetDetail.creator && imageSize(sheetDetail.creator.avatarUrl, 100)
  const author = sheetDetail && sheetDetail.creator && sheetDetail.creator.nickname
  const createTime = sheetDetail && dateFormat(sheetDetail.createTime)
  const tags = (sheetDetail && sheetDetail.tags) || []

  return (
    <SheetDetailLeftWrapper className="shadow">
      <div className="top">
        <div className="cover">
          <img src={cover} alt=""/>
        </div>
        <div className="info">
          <div className="title flex-between ellipsis-two">{ sheetDetail.name }</div>
          <div className="user flex-row">
            <div className="avatar">
              <img src={avatar} alt="" />
            </div>
            <p className="nickname">{author}</p>
            <p className="createTime">{createTime}创建</p>
          </div>
          <div className="tag flex-row">
            标签：
            {
              tags.map(item => {
                return <span key={item}>{item}</span>
              })
            }
          </div>
          <div className="desc">
            <p className="ellipsis-two" dangerouslySetInnerHTML={{__html: sheetDetail.description}}></p>
            <span>全部<i className="niceicon niceiconfontyoujiantou-copy-copy-copy-copy"></i></span>
          </div>
        </div>
      </div>
      <div className="content">
        <SongList />
      </div>
    </SheetDetailLeftWrapper>
  );
});

export default SheetDetailLeft;