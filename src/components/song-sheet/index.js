import React, { memo } from 'react';
import { tranNumber, imageSize } from "@/utils/utils"
import { Image } from 'antd';
import defaultImg from '@/assets/images/default.png';

import {
  SongSheetWrapper
} from './style';

const SongSheet = memo((props) => {
  const {list}  = props
  return (
    <SongSheetWrapper className="song-sheet">
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
                    <span>{tranNumber(item.playCount)}</span>
                  </div>
                </div>
              </div>
              <div className="info">
                <h2 className="name ellipsis-two">
                  {item.name}
                </h2>
              </div>
            </div>
          )
        })
      }
    </SongSheetWrapper>
  );
});

export default SongSheet;