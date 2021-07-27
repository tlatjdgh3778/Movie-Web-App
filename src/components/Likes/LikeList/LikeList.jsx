import React, { useState } from 'react';
import { GridListTile, GridListTileBar } from '@material-ui/core';
import { backdropImg, nullImg } from 'utils/constants';
import { useHistory } from 'react-router-dom';
import * as GS from 'style/componentstyle';
import * as S from './LikeList.style';
import { useGetGridListCols } from 'hooks/useGetGridListCols';
import { useDispatch } from 'react-redux';
import { fetchDetail } from 'store/modules/detail';

const LikeList = () => {
    const cols = useGetGridListCols();
    const dispatch = useDispatch();
    const [del, setDel] = useState(true);
    const LikeMovies = Object.keys(localStorage);
    const history = useHistory();
    
    return(
        <>
        <GS.ListMovie cellHeight={'auto'} cols={cols} spacing={30}> 
                {LikeMovies.map((movie) => {
                    return(
                        <GridListTile onClick={e => {
                            dispatch(fetchDetail(e.currentTarget.id))
                            history.push(`/Detail/${e.currentTarget.id}`)
                        }} key={movie.id} id={JSON.parse(localStorage.getItem(movie)).id}>
                        <img alt={JSON.parse(localStorage.getItem(movie)).title} src={JSON.parse(localStorage.getItem(movie)).posterPath === null ? nullImg : (backdropImg + JSON.parse(localStorage.getItem(movie)).posterPath)}></img>
                        <GridListTileBar 
                            title={JSON.parse(localStorage.getItem(movie)).title}
                            actionIcon={
                                <S.CustomIconButton id={JSON.parse(localStorage.getItem(movie)).id} onClick={e => {
                                    e.stopPropagation()
                                    // 로컬리스트 삭제
                                    localStorage.removeItem(e.currentTarget.id)
                                    setDel(!del)
                                }}>
                                    <S.CustomDeleteIcon />
                                </S.CustomIconButton>
                            }></GridListTileBar>
                        </GridListTile>
                    )  
                })}
            </GS.ListMovie>
        </>
    );
}

export default LikeList;