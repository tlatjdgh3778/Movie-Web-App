import React, { useContext } from 'react';
import { MovieContext } from 'contexts/movie';

const Detail = () => {
    const { detail } = useContext(MovieContext).state;

    console.log(detail);
    return(
        <>
            <div>{detail.title}</div>
            <div>{detail.tagline}</div>
        </>
    );
}

export default Detail;