import React from 'react'
import BasicInfoComponent from '../../components/basic-info/basic-info.component'
import TimelineItemComponent from '../../components/common/timeline/item/timeline-item.component'
import TimelineComponent from '../../components/common/timeline/timeline.component'
import { TimelineContentProps } from './props'
import './style.scss'

const contentTimelineStyle: React.CSSProperties = {
    fontWeight: 'bold',
    fontSize: '1.25rem'
}

function TimelineContent({ data }: TimelineContentProps) {
    return (
        <>
            <p >Tên giao dịch: <span style={contentTimelineStyle}>{data?.name_giaodich}</span></p>
            <p >Người mua: <span style={contentTimelineStyle}>{data?.name_nguoimua}</span></p>
            <p >Người bán: <span style={contentTimelineStyle}>{data?.name_nguoiban}</span></p>
            <p >Số lượng: <span style={contentTimelineStyle}>{data?.soluong}kg</span></p>
        </>
    )
}

const data = {
    name_giaodich: 'Giao dich dong xuan',
    name_nguoiban: 'Nguyen Van An',
    name_nguoimua: 'Nguyen Anh Hong',
    soluong: 3000
}

function Index() {
    return (
        <div className="procedure-detail-wrapper">
            <BasicInfoComponent></BasicInfoComponent>
            <div className="timeline">
                <TimelineComponent>
                    <TimelineItemComponent>
                        <TimelineContent data={data} />
                    </TimelineItemComponent>
                    <TimelineItemComponent>
                        <TimelineContent data={data} />
                    </TimelineItemComponent>
                    <TimelineItemComponent>
                        <TimelineContent data={data} />
                    </TimelineItemComponent>
                </TimelineComponent>
            </div>
        </div>
    )
}

export default Index