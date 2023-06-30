import React from "react";
import Timeline, { TimelineHeaders, DateHeader } from "react-calendar-timeline";
//import "react-calendar-timeline/lib/Timeline.css";
import "../../css/react-calendar-custom.scss";
import moment from "moment";

const TimeLine = () => {
  // groups => 계획 (groups : item = 1 : 1)
  const groups = [
    { id: 1, title: "디자인 자료조사" },
    { id: 2, title: "개발 계획 수립" },
    { id: 3, title: "group 3" },
  ];

  // items => 계획
  const items = [
    {
      id: 1,
      group: 1,
      title: "디자인 자료조사",
      start_time: moment(),
      end_time: moment().add(6, "days"),
      // itemProps: {
      //   style: {
      //     background: "beige",
      //     color: "black",
      //     borderRadius: "10px",
      //   },
      // },
    },
    {
      id: 2,
      group: 2,
      title: "개발 계획 수립",
      start_time: moment().add(4, "days"),
      end_time: moment().add(10, "days"),
    },
    {
      id: 3,
      group: 3,
      title: "item 3",
      start_time: moment().add(2, "days"),
      end_time: moment().add(3, "days"),
    },
  ];

  return (
    <div className="timeline-container">
      <Timeline
        groups={groups}
        items={items}
        sidebarWidth={0}
        canMove={false}
        canResize={false}
        canChangeGroup={false}
        defaultTimeStart={moment().add(-5, "hours")}
        defaultTimeEnd={moment().add(7, "days")}
        lineHeight={50}
        itemHeightRatio={0.7}
      >
        <TimelineHeaders>
          <DateHeader unit="day" labelFormat="M/D" />
        </TimelineHeaders>
      </Timeline>
    </div>
  );
};

export default TimeLine;
