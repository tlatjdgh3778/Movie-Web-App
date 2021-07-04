import React, { useContext } from 'react';
import * as GS from 'style/componentstyle';
import { GridListTile, GridListTileBar } from '@material-ui/core';
import { MovieContext } from 'contexts/movie';
import { backdropImg, nullImg } from 'utils/constants';

const DetailRecommendation = ({ getDetail, getGridListCols }) => {
    const { recommendation } = useContext(MovieContext).state;

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
                    <GS.List cellHeight={'auto'} spacing={20} cols={getGridListCols()}>
                    {recommendation.results.map((recommendation, i) => {
                        return (
                            <GridListTile id={recommendation.id} key={i} onClick={e=> {
                                getDetail(e.currentTarget.id)
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