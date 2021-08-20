import React from "react";
import { backdropImg, nullImg } from "utils/constants";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetail } from "store/modules/detail";
import styled from "styled-components";

const MoviesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 25rem));
    justify-content: space-evenly;
    align-content: space-between;
    align-items: start;
    padding: 4rem 0;
    grid-gap: 5rem 3.5rem;
    padding: 2rem 5rem;

    ${({ theme }) => theme.device.Tablet} {
        grid-template-columns: repeat(auto-fit, minmax(10rem, 23rem));
        justify-content: space-around;
        grid-gap: 5rem 2.5rem;
    }

    ${({ theme }) => theme.device.Mobile} {
        grid-template-columns: repeat(auto-fit, minmax(10rem, 18rem));
        grid-gap: 5rem 1.5rem;
    }
`;

const MovieWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    background-color: transparent;
    border-radius: 0.8rem;
    position: relative;
`;

const MovieImg = styled.img`
    width: 100%;
    height: 38rem;
    object-fit: cover;
    border-radius: 0.8rem;
    ${({ theme }) => theme.device.Mobile} {
        height: 27rem;
    }
`;

const Title = styled.div`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 400;
    color: ${({ theme }) => theme.color.fontColor};
    margin: 1rem 0;
    line-height: 1.4;
`;

const TopRatedList = () => {
    const dispatch = useDispatch();
    const topRated = useSelector(({ movies }) => movies.topRated.results);
    const history = useHistory();

    const getDetail = (e) => {
        dispatch(fetchDetail(e.currentTarget.id));
        history.push(`/Detail/${e.currentTarget.id}`);
    };

    return (
        <>
            <MoviesWrapper>
                {topRated.results.map((movie) => (
                    <MovieWrapper onClick={getDetail} key={movie.id} id={movie.id}>
                        <MovieImg
                            alt={movie.title}
                            src={
                                movie.poster_path === null
                                    ? nullImg
                                    : backdropImg + movie.poster_path
                            }
                        />
                        <Title>{movie.title}</Title>
                    </MovieWrapper>
                ))}
            </MoviesWrapper>
        </>
    );
};

export default TopRatedList;
