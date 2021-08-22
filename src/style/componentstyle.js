import styled, { css } from "styled-components";
import Slider from "react-slick";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const CustomSlider = styled(Slider)`
    .slick-slide {
        margin-top: 1rem;
    }
    .slick-track {
        width: 100000rem !important;
        margin-top: 1rem;
        opacity: 1;
        transform: translate3d(-3614px, 0px, 0px);
    }

    .slick-slide img {
        margin: 0 auto;
        &:hover {
            transform: scale(1.03);
            transition: all 0.3s ease-in-out;
        }
    }

    .slick-arrow {
        z-index: 1000;
    }
    .slick-next:before,
    .slick-prev:before {
        font-size: 30px;
        line-height: 1;
        opacity: 1.75;
        color: ${(props) => props.theme.color.fontColor};
    }
`;

const BackgroundImage = css`
    background-image: url(${({ backdropPath }) => backdropPath});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    /* transition: all 0.1s ease 0s; */
    position: relative;

    &::before {
        content: "";
        opacity: 0.5;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background-color: #000;
    }
`;

// 영화 리스트 재활용 가능..
const ListContainer = styled.div`
    background-color: ${(props) => props.theme.color.listBgColor};
    padding: 3rem 2rem;
    margin: 1rem;
`;
const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
`;

const ListTitle = styled.div`
    color: ${(props) => props.theme.color.fontColor};
    font-weight: 700;
    font-size: ${(props) => props.theme.fontSize.xl};

    ${(props) => props.theme.device.Tablet} {
        font-size: ${(props) => props.theme.fontSize.md};
    }
`;

const ViewAll = styled.div`
    cursor: pointer;
    color: ${(props) => props.theme.color.fontColor};
    font-weight: 700;

    &:hover {
        transition: all 0.2s ease;
        color: ${(props) => props.theme.color.fontHoverColor};
    }

    ${(props) => props.theme.device.Tablet} {
        font-size: ${(props) => props.theme.fontSize.sm};
    }
`;

const MovieContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

const ListMovieTitle = styled.div`
    text-align: center;
    font-weight: 700;
    padding: 1rem;
    font-size: 3rem;
    color: ${(props) => props.theme.color.fontColor};
`;

const ExceptionMsg = styled.div`
    padding: 1rem 0;
    text-align: center;
    color: ${(props) => props.theme.color.fontColor};
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: 700;
`;

const MainMoviesWrapper = styled.div`
    display: -webkit-box;
`;

const ListMoviesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 25rem));
    justify-content: space-evenly;
    align-content: space-between;
    align-items: start;
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

const ListMovieWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    border-radius: 0.8rem;
    position: relative;
`;

const ListMovieImg = styled.img`
    cursor: pointer;
    width: 100%;
    height: 38rem;
    object-fit: cover;
    border-radius: 0.8rem;
    box-shadow: rgb(0 0 0 / 50%) 0px 5px 3px 0px;

    ${({ theme }) => theme.device.Mobile} {
        height: 27rem;
    }
`;
const RatingBox = styled.div`
    cursor: pointer;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: opacity 0.3s ease-in-out 0s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover {
        opacity: 1;
    }
`;

const MovieWrapper = styled.div`
    flex-direction: column;
    border-radius: 0.8rem;
    position: relative;
`;

const MovieVideo = styled.img`
    cursor: pointer;
    width: 100%;
    height: 30rem;
    object-fit: contain;
    border-radius: 0.8rem;
    ${({ theme }) => theme.device.LapTop} {
        height: 23rem;
    }
    ${({ theme }) => theme.device.Tablet} {
        height: 20rem;
    }
    ${({ theme }) => theme.device.Mobile} {
        height: 27rem;
    }
`;

const MovieImg = styled.img`
    /* width: 100%; */
    height: 29rem;
    object-fit: cover;
    border-radius: 0.8rem;
    cursor: pointer;

    ${({ theme }) => theme.device.LapTop} {
        height: 23rem;
    }
    ${({ theme }) => theme.device.Tablet} {
        height: 20rem;
    }
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

const SubTitle = styled.div`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 400;
    color: ${({ theme }) => theme.color.fontColor};
    margin: 1rem 0;
    line-height: 1.4;
`;

const CustomStarBorderIcon = styled(StarBorderIcon)`
    color: rgba(255, 255, 255, 0.8);

    ${(props) => props.theme.device.Tablet} {
        color: ${(props) => props.theme.color.fontSubColor};
    }
`;

export {
    ListContainer,
    ListHeader,
    ListTitle,
    ViewAll,
    MovieContainer,
    BackgroundImage,
    ListMovieTitle,
    ExceptionMsg,
    MainMoviesWrapper,
    MovieWrapper,
    MovieImg,
    Title,
    SubTitle,
    MovieVideo,
    CustomSlider,
    CustomStarBorderIcon,
    ListMoviesWrapper,
    ListMovieWrapper,
    ListMovieImg,
    RatingBox,
};
