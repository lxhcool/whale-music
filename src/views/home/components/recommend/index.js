import React, { memo, useEffect } from 'react';
import { tranNumber } from "@/utils/utils"
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getRecommendAction } from '../../store/actionCreators';
import { Skeleton, Space } from 'antd';

import {
  RecommendWrapper
} from './style';

const Recommend = memo(() => {
  // 获取数据
  const { recommends } = useSelector(state => ({
    recommends: state.getIn(["home", "recommends"])
  }), shallowEqual)

  // 发送请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRecommendAction(24))
  }, [dispatch])
  const items = []
  for(let i = 0; i < 24; i++) {
    items.push(<Skeleton.Avatar style={{ width: 140.5, height: 140.5 }}  active={true} size="default" shape="square" />)
  }
  return (
    <RecommendWrapper className="recommend-wrap">
      {
        recommends.length > 0 ?
        <div>
          {
            recommends.map(item => {
              return(
                <div key={item.id}>{tranNumber(item.playCount)}</div>
              )
            })
          }
        </div>
        :
        <Space>
          {items}       
        </Space>
      }
    </RecommendWrapper>
  );
});

export default Recommend;