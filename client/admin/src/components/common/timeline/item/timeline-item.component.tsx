import React, { useEffect, useRef } from 'react'
import './timeline-item.component.scss'
import { TimelineItemProps } from './timeline-item.props'
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import { GrassOutlined } from '@mui/icons-material'


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
              <GrassOutlined sx={{color: '#757575'}}/>
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