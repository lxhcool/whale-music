import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Image } from 'antd';
import { tranNumber, imageSize } from "@/utils/utils";
import { getSheetDetail } from '@/store/sheet/actionCreators';
import defaultImg from '@/assets/images/default.png';

import {
  SheetitemWrapper
} from './style';

const SongSheet = memo((props) => {
  const { item }  = props

  let history = useHistory();

  // 发送请求
  const dispatch = useDispatch()

  // 点击播放
  const playAll = (e, id) => {
    e.stopPropagation();
    dispatch(getSheetDetail(id, true))
  }

  // 详情
  const toDetail = (id) => {
    history.push(`/sheet-detail?sheetId=${id}`)
  }

  return (
    <SheetitemWrapper onClick={() => toDetail(item.id)}>
      <div className="wrapper">
        <div className="cover">
          <Image src={imageSize(item.picUrl)} preview={false} 
            placeholder={
              <Image
                preview={false}
                src={defaultImg}
              />
            }
          />
          <div className="count">
            <i className="arrow"></i>
            <span>{tranNumber(item.playCount)}</span>
          </div>
          <button title="播放" className="play flex-center" onClick={(e) => playAll(e, item.id)}>
            <i className="niceicon niceOutlined_Play"></i>
          </button>
        </div>
      </div>
      <div className="info">
        <h2 className="name ellipsis-two">
          {item.name}
        </h2>
      </div>
    </SheetitemWrapper>
  );
});

export default SongSheet;