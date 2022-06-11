import React, { useEffect, useRef } from 'react'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { SelectorProps } from './selector.props'
import $ from 'jquery'

function SelectorComponent({style, size, label} : SelectorProps) {

  const [age, setAge] = React.useState('')

  const selectRef = useRef(null)

  const handleChange = (event?: SelectChangeEvent) => {
    setAge(event?.target.value as string)
  }

  useEffect(()=> {
    window.onscroll = ()=> {
      $('#root').removeAttr("aria-hidden")
    }
  })

  return (
      <FormControl size={size} sx={{...style}}>
        <InputLabel id={label}>{label}</InputLabel>
        <Select 
          labelId={label}
          id={label}
          value={age}
          label={label}
          onChange={handleChange}
          MenuProps={{
            disableScrollLock: true,
            className: "menu-props-selector",
            sx: {
              position: 'absolute',
              zIndex: 1
            }
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
  )
}

export default SelectorComponent