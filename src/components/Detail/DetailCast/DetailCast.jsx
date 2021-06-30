import React, { useContext } from 'react';
import * as GS from 'style/componentstyle';
import { GridListTile, GridListTileBar } from '@material-ui/core';
import { MovieContext } from 'contexts/movie';
import { backdropImg, nullImg } from 'utils/constants';

const DetailCast = ({ getGridListCols }) => {
    const { credit } = useContext(MovieContext).state;

    return(
        // 출연진  DetailCast
        <>
        <GS.ListContainer>
            <GS.ListHeader>
                <GS.ListTitle>출연진</GS.ListTitle>
            </GS.ListHeader>
            <GS.MovieContainer>
                <GS.List cellHeight={'auto'} spacing={20} cols={getGridListCols()}>
                {credit.cast.map((character, i)=> {
                    return (
                        <GridListTile key={i}>
                            <img src={character.profile_path === null ? nullImg : (backdropImg + character.profile_path)}></img>
                            <GridListTileBar title={character.name} subtitle={character.character + " 역"}></GridListTileBar>
                        </GridListTile>
                    )
                })}
                </GS.List>
            </GS.MovieContainer>
        </GS.ListContainer>
        </>
    );
}

export default DetailCast;