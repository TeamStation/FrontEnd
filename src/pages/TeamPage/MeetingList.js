import React from "react";
import MeetingItem from "./MeetingItem";

const MeetingList = ({ meetings }) => {
  const meetingsList = meetings.filter(
    (meeting) => meeting.date === "2023-02-02"
  );
  return (
    <>
      {meetingsList.map((meeting) => (
        <MeetingItem
          key={meeting.id}
          date={meeting.date}
          time={meeting.time}
          sort={meeting.sort}
        ></MeetingItem>
      ))}
    </>
  );
};

export default MeetingList;
