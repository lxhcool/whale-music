import React, { memo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { getSearchId } from '@/utils/utils';
import {
  SheetDetailWrapper
} from './style';
import { getSheetDetail, getSheetSubscribers, getSheetRelateds, getSheetComments } from '@/store/sheet/actionCreators'
import SheetDetailLeft from './components/left'
import SheetDetailRight from './components/right'

const SheetDetail = memo(() => {
  const { sheetId } = getSearchId(useLocation().search)
  const dispatch = useDispatch()

  // 发送请求
  useEffect(() => {
    dispatch(getSheetDetail(sheetId, false))
    dispatch(getSheetSubscribers(sheetId))
    dispatch(getSheetRelateds(sheetId))
    dispatch(getSheetComments(sheetId))
  }, [dispatch, sheetId])

  return (
    <SheetDetailWrapper className="container">
      <SheetDetailLeft />
      <SheetDetailRight />
    </SheetDetailWrapper>
  );
});

export default SheetDetail;