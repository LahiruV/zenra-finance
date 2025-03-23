import * as React from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    50: '#D1D0FB',
                    100: '#B5B4F8',
                    200: '#8A88F1',
                    300: '#7070F2',
                    400: '#5A58F0',
                    500: '#4A49E0',
                    600: '#403FCA',
                    700: '#3532A4',
                    800: '#2A2680',
                    900: '#1E1B5A',
                },
            },
        },
    },
});

export interface BasicButtonProps {
    id?: string
    isDisabled?: boolean
    isLoading?: boolean
    label?: string
    className?: string
    colors?: 'primary' | 'neutral' | 'danger' | 'success' | 'warning'
    variant?: 'plain' | 'outlined' | 'soft' | 'solid'
    size?: 'sm' | 'md' | 'lg'
    type?: 'button' | 'submit' | 'reset'
    isFullWidth?: boolean
    onClick?: () => void
}

const BasicButton: React.FC<BasicButtonProps> = ({
    id,
    isDisabled,
    isLoading,
    label,
    className,
    colors,
    variant,
    size,
    type,
    isFullWidth,
    onClick,
}) => {
    return (
        <CssVarsProvider theme={theme}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                    id={id || ''}
                    className={className || ''}
                    type={type}
                    disabled={isDisabled}
                    loading={isLoading}
                    color={colors}
                    variant={variant}
                    size={size}
                    fullWidth={isFullWidth}
                    onClick={onClick}
                >
                    {
                        !isLoading ? (label || '') : ('')
                    }
                </Button>
            </Box>
        </CssVarsProvider >
    );
}

export default BasicButton;