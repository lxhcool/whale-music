import React, { memo } from 'react';
import { Image } from 'antd'
import { imageSize } from '@/utils/utils'
import { SingerItemWrapper } from './style'

import defaultImg from '@/assets/images/default.png';

const SingerItem = memo((props) => {
  const { item } = props
  return (
    <SingerItemWrapper>
      <div className="cover">
        <Image src={imageSize(item.img1v1Url)} preview={false} 
          placeholder={
            <Image
              preview={false}
              src={defaultImg}
            />
          }
        />
      </div>
      <p className="name">{item.name}</p>
    </SingerItemWrapper>
  );
});

export default SingerItem;