import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import SongAlbum from '@/components/song-album'
import { getHotAlbumAction } from '../../store/actionCreators';
import {
  RecommendAlbumWrapper
} from './style';

const RecommendAlbum = memo(() => {

  // 获取数据
  const { albums } = useSelector(state => ({
    albums: state.getIn(["home", "albums"])
  }), shallowEqual)

  // 发送请求
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getHotAlbumAction())
  }, [dispatch])

  return (
    <RecommendAlbumWrapper className="recommend-music">
      <h2 className="title">推荐新碟</h2>
      <SongAlbum list={ albums } />
    </RecommendAlbumWrapper>
  );
});

export default RecommendAlbum;
