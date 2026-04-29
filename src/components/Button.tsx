import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info';
    onClick?: () => void;
}

const colorClasses = {
    primary: 'bg-blue-500 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-700 text-white',
    danger: 'bg-red-500 hover:bg-red-700 text-white',
    success: 'bg-green-500 hover:bg-green-700 text-white',
    warning: 'bg-yellow-500 hover:bg-yellow-700 text-black',
    info: 'bg-cyan-500 hover:bg-cyan-700 text-white',
};

const Button = ({ children, onClick, color = "primary" }: Props) => {
    return (
        <button
            className={`px-4 py-2 rounded font-medium transition-colors ${colorClasses[color]}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;