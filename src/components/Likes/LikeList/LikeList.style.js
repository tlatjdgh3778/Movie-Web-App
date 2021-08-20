import styled from "styled-components";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import IconButton from "@material-ui/core/IconButton";

const CustomIconButton = styled(IconButton)`
    color: ${(props) => props.theme.color.fontColor};
    position: absolute;
    right: 0;
    bottom: 4rem;
`;

const CustomDeleteIcon = styled(DeleteOutlineIcon)`
    font-size: ${(props) => props.theme.fontSize.xxl};
`;

export { CustomIconButton, CustomDeleteIcon };
