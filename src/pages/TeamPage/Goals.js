import React, { useState } from "react";
import GoalsList from "./GoalsList";
import { ReactComponent as AddButton } from "../../images/add_button.svg";

const Goals = () => {
  const category = ["디자인", "개발"];
  const [selectedCategory, setSelectedCategory] = useState("디자인");
  const categoryList = category.map((category, index) => (
    <span className="goals-category" key={index}>
      {category}
    </span>
  ));

  const onClick = () => {
    console.log("category add button clicked");
  };

  // API 써서 선택한 카테고리의 아이템들 불러오기
  const goals = [
    {
      id: 1,
      title: "메인 페이지 마무리",
      category: "디자인",
      deadline: "2022-01-01",
      participants: ["유빈", "윤희"],
      completed: true,
    },
    {
      id: 2,
      title: "메인 페이지 디자인",
      category: "디자인",
      deadline: "2022-01-21",
      participants: ["효선", "하진", "민정"],
      completed: true,
    },
    {
      id: 3,
      title: "메인 페이지 디자인",
      category: "개발",
      deadline: "2022-01-21",
      participants: ["효선", "하진", "민정"],
      completed: true,
    },
  ];

  return (
    <div className="goals-container">
      <div className="goals-category-container">
        {categoryList}
        <div className="goals-category-add-btn" onClick={onClick}>
          <AddButton />
        </div>
      </div>
      <div className="goals-list-container">
        <GoalsList category={selectedCategory} goals={goals} />
      </div>
    </div>
  );
};

export default Goals;
