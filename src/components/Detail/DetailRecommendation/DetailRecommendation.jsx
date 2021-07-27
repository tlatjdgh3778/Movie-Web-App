import React from 'react';
import * as GS from 'style/componentstyle';
import { GridListTile, GridListTileBar } from '@material-ui/core';
import { backdropImg, nullImg } from 'utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetail } from 'store/modules/detail';
import { useHistory } from 'react-router';
import { useGetGridListCols } from 'hooks/useGetGridListCols';

const DetailRecommendation = () => {
    const cols = useGetGridListCols();
    const history = useHistory();
    const dispatch = useDispatch();
    const recommendation = useSelector(({ detail }) => detail.recommendation.results);
    
    return(
        // 추천 영화  DetailRecommendation
        <>
            <GS.ListContainer>
                <GS.ListHeader>
                    <GS.ListTitle>추천 영화</GS.ListTitle>
                </GS.ListHeader>
                {recommendation.total_results === 0 ? <GS.ExceptionMsg>추천 영화가 없습니다..</GS.ExceptionMsg> 
                :
                <>
                <GS.MovieContainer>
                    <GS.List cellHeight={'auto'} spacing={20} cols={cols}>
                    {recommendation.results.map((recommendation) => {
                        return (
                            <GridListTile id={recommendation.id} key={recommendation.id} onClick={e=> {
                                dispatch(fetchDetail(e.currentTarget.id))
                                history.push(`/Detail/${e.currentTarget.id}`)
                            }}>
                                <img alt={recommendation.title} src={recommendation.poster_path === null ? nullImg : (backdropImg + recommendation.poster_path)}></img>
                                <GridListTileBar title={recommendation.title}></GridListTileBar>
                            </GridListTile>
                        )
                    })}
                </GS.List>
                </GS.MovieContainer>
                </>
                }
            </GS.ListContainer>
        </>
    );
}

export default DetailRecommendation;