import { SxProps, Theme } from "@mui/material"

interface SelectorProps {
  style?: SxProps<Theme>,
  size?: "small" | "medium" | undefined,
  items?: Array<any>,
  label?: string
}

export type {
  SelectorProps
}