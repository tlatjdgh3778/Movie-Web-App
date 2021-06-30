import React, { useContext } from 'react';
import * as GS from 'style/componentstyle';
import { GridListTile, GridListTileBar, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { MovieContext } from 'contexts/movie';
import { backdropImg, nullImg } from 'utils/constants';

const DetailRecommendation = () => {
    const { recommendation } = useContext(MovieContext).state;

    const theme = useTheme();
    const mobileMatches = useMediaQuery(theme.breakpoints.values.mobile);
    const tabletMatches = useMediaQuery(theme.breakpoints.values.tablet);
    const laptopMatches = useMediaQuery(theme.breakpoints.values.laptop);
    const desktopMatches = useMediaQuery(theme.breakpoints.values.desktop);

    const getGridListCols = () => {
        if(mobileMatches){
            return 2;
        }
        if(tabletMatches){
            return 3;
        }
        if(laptopMatches){
            return 4;
        }
        if(desktopMatches){
            return 5;
        }
    }

    return(
        // 추천 영화  DetailRecommendation
        <>
            <GS.ListContainer>
                <GS.ListHeader>
                    <GS.ListTitle>추천 영화</GS.ListTitle>
                </GS.ListHeader>
                {recommendation.total_results === 0 ? <div>추천 영화가 없습니다.</div> 
                :
                <>
                <GS.MovieContainer>
                    <GS.List cellHeight={'auto'} spacing={20} cols={getGridListCols()}>
                    {recommendation.results.map((recommendation, i) => {
                        return (
                            <GridListTile key={i}>
                                <img src={recommendation.poster_path === null ? nullImg : (backdropImg + recommendation.poster_path)}></img>
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