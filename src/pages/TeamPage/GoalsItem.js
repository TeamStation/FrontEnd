import React from "react";

const GoalsItem = ({
  itemTitle,
  itemCompleted,
  itemDeadline,
  itemParticipants,
}) => {
  return (
    <div className="goals-item">
      {itemCompleted ? "true" : "false"}
      {itemTitle}
      {itemDeadline}
      {itemParticipants}
    </div>
  );
};

export default GoalsItem;
