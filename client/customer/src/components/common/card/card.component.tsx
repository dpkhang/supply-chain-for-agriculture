import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'
import { CardProps } from './card.props'

export default function MultiActionAreaCard({children, image, width, sx}: CardProps) {
  return (
    <Card sx={
              { 
                ...sx,
                width: width ? width : 220,
                boxShadow: '0 .05rem .05rem .05rem #dedede '
              }
            }
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image= {image}
          alt="green iguana"
        />
        <CardContent>
          {children}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  )
}
