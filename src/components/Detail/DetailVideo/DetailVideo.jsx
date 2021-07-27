import React from 'react';
import * as GS from 'style/componentstyle';
import { GridListTile, GridListTileBar } from '@material-ui/core';
import { nullImg, youtubeLink, thumbnail } from 'utils/constants';
import { useSelector } from 'react-redux';
import { useGetGridListCols } from 'hooks/useGetGridListCols';

const DetailVideo = () => {
    const cols = useGetGridListCols();
    const video = useSelector(({ detail }) => detail.video.results);

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
            <GS.List cellHeight={'auto'} spacing={20} cols={cols}>
                {video.results.map((video) => {
                    return (
                        <GridListTile key={video.id} onClick={() => {
                            toYoutube(youtubeLink + video.key)}
                        }>
                            <img alt={video.name} src={video.key === null ? nullImg : (thumbnail + video.key + "/sddefault.jpg")}></img>
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