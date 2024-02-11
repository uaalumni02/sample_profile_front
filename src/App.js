import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/profile";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <BrowserRouter>
        <Routes>
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
