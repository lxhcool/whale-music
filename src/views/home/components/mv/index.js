import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { tranNumber } from "@/utils/utils"
import { getTopMvAction } from '../../store/actionCreators';

import {
  RecommendMvWrapper
} from './style';

const RecommendMv = memo(() => {

  // 获取数据
  const { mvs } = useSelector(state => ({
    mvs: state.getIn(["home", "mvs"])
  }), shallowEqual)


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopMvAction())
  }, [dispatch])

  return (
    <RecommendMvWrapper className="recommend-mv">
      <h2 className="title">MV推荐</h2>
      <div className="list">
        {
          mvs.map(item => {
            return (
              <div className="item" key={item.id}>
                <div className="cover">
                  <div className="cover-img">
                    <img src={ item.picUrl } alt={ item.name } />
                  </div>
                  <div className="count">
                    <i className="arrow"></i>
                    <span>{tranNumber(item.playCount)}</span>
                  </div>
                  <button title="播放" className="play flex-center">
                    <i className="niceicon niceOutlined_Play"></i>
                  </button>
                </div>
                <div className="info">
                  <h2 className="name ellipsis">{item.name}</h2>
                  <p>{item.artistName}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </RecommendMvWrapper>
  );
});

export default RecommendMv;