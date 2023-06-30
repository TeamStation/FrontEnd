import React from "react";
import GoalsItem from "./GoalsItem";

const GoalsList = ({ category, goals }) => {
  const goalsList = goals.filter((goal) => goal.category === category);
  return (
    <>
      {goalsList.map((goal) => (
        <GoalsItem
          key={goal.id}
          itemTitle={goal.title}
          itemCompleted={goal.completed}
          itemDeadline={goal.deadline}
          itemParticipants={goal.participants}
        ></GoalsItem>
      ))}
    </>
  );
};

export default GoalsList;
