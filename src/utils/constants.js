export const API_KEY = process.env.REACT_APP_API_KEY;

const backdropImg = "https://image.tmdb.org/t/p/original/";
const nullImg =
    "http://collaboparty1004.cafe24.com/xe/files/attach/images/139/483/d8c711f2e76e6be056d911b8fbed47fd.jpg";
const youtubeLink = "https://www.youtube.com/watch?v=";
const thumbnail = "https://i.ytimg.com/vi/";

const sliderSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 5,
    // initialSlide: 0,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

export { backdropImg, nullImg, youtubeLink, thumbnail, sliderSettings };
