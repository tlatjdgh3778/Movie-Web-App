import React, { useContext } from 'react';
import * as GS from 'style/componentstyle';
import { GridListTile, GridListTileBar, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { MovieContext } from 'contexts/movie';
import { nullImg, youtubeLink, thumbnail } from 'utils/constants';

const DetailVideo = () => {
    const { video } = useContext(MovieContext).state;

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

    const toYoutube = link => {
        const win = window.open(link, "_blank");
        win.focus();
    }  

    return(
        //  예고편  DetailVideo
        <GS.ListContainer>
        <GS.ListHeader>
            <GS.ListTitle>예고편</GS.ListTitle>
        </GS.ListHeader>
        {video.results.length === 0 ? <div>예고편이 없습니다..</div> 
        :
        <>
        <GS.MovieContainer>
            <GS.List cellHeight={'auto'} spacing={20} cols={getGridListCols()}>
                {video.results.map((video, i) => {
                    return (
                        <GridListTile key={i} onClick={() => {
                            toYoutube(youtubeLink + video.key)}
                        }>
                            <img src={video.key === null ? nullImg : (thumbnail + video.key + "/sddefault.jpg")}></img>
                            <GridListTileBar title={video.name}></GridListTileBar>
                        </GridListTile>
                    )
                })}
            </GS.List>
        </GS.MovieContainer>
        </>
        }
    </GS.ListContainer> 
    );
}

export default DetailVideo;