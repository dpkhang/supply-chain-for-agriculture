import React, { useEffect, useRef } from 'react'
import './timeline-item.component.scss'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import GrassIcon from '@mui/icons-material/Grass'
import { TimelineItemProps } from './timeline-item.props'


function TimelineItemComponent({children}: TimelineItemProps) {

  const activityRef = useRef<any>()
  const timelineContentRef = useRef<any>()

  useEffect(()=> {
    (()=> {
      const height = activityRef.current?.clientHeight
      timelineContentRef.current.style.paddingBottom = `${height+ 45}px`
      activityRef.current.style.top = `1.5rem`
    })()
    
  })


  return (
    <TimelineItem className="timeline-item-wrapper">
          <TimelineOppositeContent
            sx={{ m: '.5rem 0', fontSize: '1.25rem', color: '#77ec62', fontWeight: 'bold' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            9:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            {/* <TimelineConnector sx={{backgroundColor: 'green'}}/> */}
            <TimelineDot sx={{backgroundColor: '#77ec62'}}>
              <GrassIcon sx={{color: '#757575'}}/>
            </TimelineDot>
            <TimelineConnector sx={{backgroundColor: '#77ec62'}}/>
          </TimelineSeparator>
          <TimelineContent ref={timelineContentRef} sx={{ px: 2}}>
            <div ref={activityRef} className="timeline-activity">
              {children}
            </div>
          </TimelineContent>
        </TimelineItem>
  )
}

export default TimelineItemComponent