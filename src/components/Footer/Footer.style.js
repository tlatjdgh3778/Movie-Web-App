import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';

const FooterContainer = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
`;

const CustomGithub = styled(GitHubIcon)`
    color: ${(props) => props.theme.color.fontColor};
    cursor: pointer;
    margin-left: 10px;

    &:hover {
        color: ${(props) => props.theme.color.fontHoverColor};
    }
`;

export { FooterContainer, CustomGithub };