import React from "react";

const MeetingNoteItem = ({ title, date, tag, completed }) => {
  return (
    <div className="meeting-note-item">
      <p className="title">{title}</p>
      <p className="date">{date}</p>
      <p className="tag">{tag}</p>
      <p className="completed">{completed ? "Completed" : "Uncompleted"}</p>
    </div>
  );
};

export default MeetingNoteItem;
