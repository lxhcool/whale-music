import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import SongSheet from '@/components/song-sheet'
import { getRecommendAction } from '../../store/actionCreators';

import {
  RecommendSheetWrapper
} from './style';

const RecommendSheet = memo(() => {
  // 获取数据
  const { recommends } = useSelector(state => ({
    recommends: state.getIn(["home", "recommends"])
  }), shallowEqual)

  // 发送请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRecommendAction(24))
  }, [dispatch])
  
  return (
    <RecommendSheetWrapper className="recommend-sheet">
      <h2 className="title">推荐歌单</h2>
      <SongSheet list={ recommends } />
    </RecommendSheetWrapper>
  );
});

export default RecommendSheet;