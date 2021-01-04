import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import SheetItem from '@/components/sheet-item'
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
      <div className="sheet-list">
        {
          recommends.map(item => {
            return <SheetItem key={ item.id } item={item} />
          })
        }  
      </div>
    </RecommendSheetWrapper>
  );
});

export default RecommendSheet;