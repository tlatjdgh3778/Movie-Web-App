import { Detail, Likes, Main, NowPlaying, Popular, Results, TopRated } from "pages";

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
        path: "/NowPlaying",
        page: NowPlaying,
        exact: true,
    },
    {
        path: "/Popular",
        page: Popular,
        exact: true,
    },
    {
        path: "/Results",
        page: Results,
        exact: true,
    },
    {
        path: "/TopRated",
        page: TopRated,
        exact: true,
    },
];
