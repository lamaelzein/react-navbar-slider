import { Button as MuiButton } from '@mui/material';
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    onClick?: () => void;
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
    return (
        <MuiButton variant="contained" color={color} onClick={onClick}>
            {children}
        </MuiButton>
    );
};
export default Button;