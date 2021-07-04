import styled from 'styled-components';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@material-ui/core/IconButton';

const CustomIconButton = styled(IconButton)`
    color: ${(props) => props.theme.color.fontColor};
`;

const CustomDeleteIcon = styled(DeleteOutlineIcon)`

`;

export { CustomIconButton, CustomDeleteIcon };