import React, { useContext } from 'react';
import * as GS from 'style/componentstyle';
import { GridListTile, GridListTileBar } from '@material-ui/core';
import { MovieContext } from 'contexts/movie';
import { nullImg, youtubeLink, thumbnail } from 'utils/constants';

const DetailVideo = ({ getGridListCols }) => {
    const { video } = useContext(MovieContext).state;

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
        {video.results.length === 0 ? <GS.ExceptionMsg>예고편이 없습니다..</GS.ExceptionMsg> 
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