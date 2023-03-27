import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TeamMember } from "../../pages/TeamMember/TeamMember";
import { Team } from "../../pages/Team/Team";
import { SignUp } from "../../pages/SignUp/SignUp";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignUp />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:id" element={<TeamMember />} />
        <Route path="/*" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
};
