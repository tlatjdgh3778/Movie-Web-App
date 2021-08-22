import styled from "styled-components";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import IconButton from "@material-ui/core/IconButton";

const CustomIconButton = styled(IconButton)`
    color: ${({ theme }) => theme.color.fontColor};
`;

const CustomDeleteIcon = styled(DeleteOutlineIcon)`
    font-size: ${({ theme }) => theme.fontSize.xxl};
`;

export { CustomIconButton, CustomDeleteIcon };
