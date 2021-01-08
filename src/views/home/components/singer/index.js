import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getHotSingerAction } from '@/store/home/actionCreators';
import SingerItem from '@/components/singer-item'

import {
  RecommendSingerWrapper
} from './style'

const RecommendSinger = memo(() => {

  const { singers } = useSelector(state => ({
    singers: state.getIn(["home", "singers"])
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotSingerAction())
  }, [dispatch])

  return (
    <RecommendSingerWrapper className="recommend-singer">
      <h2 className="title">热门歌手</h2>
      <ul className="singer-list">
        {
          singers.map(item => {
            return <SingerItem key={ item.id } item={item} />
          })
        }        
      </ul>
    </RecommendSingerWrapper>
  );
});

export default RecommendSinger;