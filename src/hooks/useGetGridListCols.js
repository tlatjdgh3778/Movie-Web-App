import { useMediaQuery } from '@material-ui/core';

export const useGetGridListCols = () => {

    const mobileMatches = useMediaQuery('(max-width:480px)');
    const tabletMatches = useMediaQuery('(min-width:481px) and (max-width:768px)');
    const laptopMatches = useMediaQuery('(min-width:769px) and (max-width:1024px)');
    const desktopMatches = useMediaQuery('(min-width:1025px)');

    if(mobileMatches){
        return 1;
    }
    if(tabletMatches){
        return 2;
    }
    if(laptopMatches){
        return 3;
    }
    if(desktopMatches){
        return 4;
    }
}