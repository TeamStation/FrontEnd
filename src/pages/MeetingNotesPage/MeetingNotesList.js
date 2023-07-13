import React from "react";
import MeetingNoteItem from "./MeetingNoteItem";

const MeetingNotesList = ({ notes }) => {
  return (
    <>
      {notes.map((note) => (
        <MeetingNoteItem
          key={note.id}
          title={note.title}
          date={note.date}
          tag={note.tag}
          completed={note.completed}
        ></MeetingNoteItem>
      ))}
    </>
  );
};

export default MeetingNotesList;
