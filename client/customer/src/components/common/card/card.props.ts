import { SxProps, Theme } from '@mui/material';

interface CardProps {
  children?: React.ReactNode,
  image?: string,
  width?: number,
  sx?: SxProps<Theme>
}

export type {
  CardProps
}