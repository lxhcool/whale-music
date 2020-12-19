import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

// import { imageSize } from '@/utils/utils'
import { getHotSingerAction } from '../../store/actionCreators';

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
      {singers.length}
    </RecommendSingerWrapper>
  );
});

export default RecommendSinger;