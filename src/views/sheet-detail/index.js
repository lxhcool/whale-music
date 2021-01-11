import React, { memo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { getSearchId } from '@/utils/utils';
import {
  SheetDetailWrapper
} from './style';
import { getSheetDetail } from '@/store/sheet/actionCreators'
import SheetDetailLeft from './components/left'

const SheetDetail = memo(() => {
  const { sheetId } = getSearchId(useLocation().search)
  const dispatch = useDispatch()

  // 发送请求
  useEffect(() => {
    dispatch(getSheetDetail(sheetId, false))
  }, [dispatch, sheetId])

  return (
    <SheetDetailWrapper className="container">
      <SheetDetailLeft />
      <div className="right shadow">
       a
      </div>
    </SheetDetailWrapper>
  );
});

export default SheetDetail;