import "./home.css"
import "./signup.css"
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Notifications from "./pages/notifications"
import Profile from "./pages/profile"
import Messages from "./pages/messages"
import Signup from "./pages/signup"
import { AuthUserProvider } from "./services/auth"

function App() {
  return (
    <AuthUserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </AuthUserProvider>
  );
}

export default App;
