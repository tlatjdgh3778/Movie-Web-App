import React, { useContext } from 'react';
import * as GS from 'style/componentstyle';
import { GridListTile, GridListTileBar, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { MovieContext } from 'contexts/movie';
import { backdropImg, nullImg } from 'utils/constants';

const DetailCast = () => {
    const { credit } = useContext(MovieContext).state;

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