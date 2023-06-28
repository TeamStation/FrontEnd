import React from "react";
import { Route, Routes } from "react-router-dom";
import TeamPage from "./pages/TeamPage/TeamPage";

const App = () => {
  return (
    <Routes>
      <Route path="/teams" element={<TeamPage />} />
    </Routes>
  );
};

export default App;
