import React from "react";
import { Route, Routes } from "react-router-dom";
import TeamPage from "./pages/TeamPage/TeamPage";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import Auth from "./pages/Login/Auth";
import MyPage from "./pages/MyPage/MyPage";
const App = () => {
  return (
    <Routes>
      <Route path="/teams" element={<TeamPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
};

export default App;
