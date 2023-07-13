import React, { useState } from "react";
import "../../css/meeting-notes-page.scss";
import MeetingNotesList from "./MeetingNotesList";

const MeetingNotes = () => {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const notes = [
    {
      id: 1,
      title: "첫 회의",
      date: "2023-03-03",
      tag: ["#태그1", "#태그2"],
      completed: true,
    },
    {
      id: 2,
      title: "첫 회의",
      date: "2023-03-03",
      tag: ["#태그1"],
      completed: true,
    },
    {
      id: 3,
      title: "첫 회의",
      date: "2023-03-03",
      tag: [],
      completed: true,
    },
    {
      id: 4,
      title: "첫 회의",
      date: "2023-03-03",
      tag: ["#태그2"],
      completed: true,
    },
  ];

  return (
    <div className="meeting-note-container">
      <div>
        <form>
          {/* action="#" method="post" */}
          <input
            type="text"
            value={search}
            onChange={onChange}
            className="search-tab"
            placeholder="검색어를 입력하세요."
          />
        </form>
      </div>
      <div className="meeting-note-list-container">
        <MeetingNotesList notes={notes} />
      </div>
    </div>
  );
};

export default MeetingNotes;
