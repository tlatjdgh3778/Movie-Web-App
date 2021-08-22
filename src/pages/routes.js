import { Detail, Likes, Main, Results, Movie } from "pages";

export const routes = [
    {
        path: "/Detail",
        page: Detail,
        exact: false,
    },
    {
        path: "/Likes",
        page: Likes,
        exact: true,
    },
    {
        path: "/",
        page: Main,
        exact: true,
    },
    {
        path: "/Results",
        page: Results,
        exact: true,
    },
    {
        path: "/NowPlaying",
        page: Movie,
        exact: true,
    },
    {
        path: "/Popular",
        page: Movie,
        exact: true,
    },
    {
        path: "/TopRated",
        page: Movie,
        exact: true,
    },
];
