import React, { memo } from 'react';
import { imageSize } from "@/utils/utils"
import { Image } from 'antd';
import defaultImg from '@/assets/images/default.png';
import {
  SongAlbumWrapper
} from './style';

const SongAlbum = memo((props) => {
  const {list}  = props
  console.log(list)
  return (
    <SongAlbumWrapper className="song-ablum">
      {
        list.map(item => {
          return (
            <div className="item" key={item.id}>
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
            </div>
          )
        })
      }
    </SongAlbumWrapper>
  );
});

export default SongAlbum;