import { Timeline } from '@mui/lab'
import * as React from 'react'
import './timeline.component.scss'
import { TimelineProps } from './timeline.props'

function TimelineComponent({children}: TimelineProps) {
  return (
    <div className="timeline-wrapper">
      <Timeline>
        {children}
      </Timeline>
    </div>
  )
}

export default TimelineComponent

