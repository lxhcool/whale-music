import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import AlbumItem from '@/components/album-item'
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
    <RecommendAlbumWrapper className="recommend-album">
      <h2 className="title">新碟上架</h2>
      <div className="album-list">
        {
          albums.map(item => {
            return <AlbumItem item={ item } key={item.id} />
          })
        }
      </div>
    </RecommendAlbumWrapper>
  );
});

export default RecommendAlbum;
