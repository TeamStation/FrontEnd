import React from "react";

const MeetingItem = ({ date, time, sort }) => {
  return (
    <div className="meeting-item">
      {date}
      {time}
      {sort}
    </div>
  );
};

export default MeetingItem;
