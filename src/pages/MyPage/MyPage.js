import React from "react";
import "../../css/my-page.scss";
import ProjectStatus from "./ProjectStatus";
import User from "./User";
import Projects from "./Projects";

function MyPage() {
  return (
    <div class="my-page-container">
      <ProjectStatus />
      <User />
      <Projects />{" "}
    </div>
  );
}

export default MyPage;
