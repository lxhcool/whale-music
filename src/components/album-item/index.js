import React, { memo } from 'react';
import { imageSize } from "@/utils/utils"
import { Image } from 'antd';
import defaultImg from '@/assets/images/default.png';
import {
  AlbumItemWrapper
} from './style';

const AlbumItem = memo((props) => {
  const {item}  = props
  return (
    <AlbumItemWrapper>
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
            <span>{item.size}首</span>
          </div>
          <button title="播放" className="play flex-center">
            <i className="niceicon niceOutlined_Play"></i>
          </button>
        </div>
      </div>
      <div className="info">
        <h2 className="name ellipsis">
          {item.name}
        </h2>
        <p className="singer ellipsis">
          {
            item.artists.map(singer => {
              return (
                <span key={singer.id}>
                  {singer.name}
                </span>
              )
            })
          }
        </p>
      </div>
    </AlbumItemWrapper>
  );
});

export default AlbumItem;