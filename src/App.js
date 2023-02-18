import './App.css'
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Header from "./components/header"
import Notifications from "./pages/notifications"
import Profile from "./pages/profile"
import Messages from "./pages/messages"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
