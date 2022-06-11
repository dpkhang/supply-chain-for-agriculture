import * as React from 'react'
import './timeline.component.scss'
import Timeline from '@mui/lab/Timeline'
import ItemComponent from './item/timeline-item.component'
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

