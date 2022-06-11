import React from 'react'
import './image.component.scss'
import { ImageProps } from './image.props'

function Image({src, style}: ImageProps) {
    return (
      <img className='common-image-tag' src={src} style={style} alt="" />  
    )
}

export default Image
