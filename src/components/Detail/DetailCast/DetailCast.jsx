import React from 'react';
import * as GS from 'style/componentstyle';
import { GridListTile, GridListTileBar } from '@material-ui/core';
import { backdropImg, nullImg } from 'utils/constants';
import { useSelector } from 'react-redux';
import { useGetGridListCols } from 'hooks/useGetGridListCols';

const DetailCast = () => {
    const cols = useGetGridListCols();
    const credit = useSelector(({ detail }) => detail.credit.results);

    return(
        // 출연진  DetailCast
        <>
        <GS.ListContainer>
            <GS.ListHeader>
                <GS.ListTitle>출연진</GS.ListTitle>
            </GS.ListHeader>
            <GS.MovieContainer>
                <GS.List cellHeight={'auto'} spacing={20} cols={cols}>
                {credit.cast.map((character, i)=> {
                    return (
                        <GridListTile key={i}>
                            <img alt={character.name} src={character.profile_path === null ? nullImg : (backdropImg + character.profile_path)}></img>
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