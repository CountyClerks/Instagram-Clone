import "./login.css"
import "./signup.css"
import "./header.css"
import "./feed.css"
import "./addPost.css"
import "./profile.css"
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import Notifications from "./pages/notifications"
import Profile from "./pages/profile"
import Messages from "./pages/messages"
import Signup from "./pages/signup"
import Feed from "./pages/feed"
import NewPost from "./pages/addPost"
import { AuthUserProvider } from "./services/auth"

function App() {
  return (
    <BrowserRouter>
      <AuthUserProvider>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/new-post" element={<NewPost />} />
        </Routes>
      </AuthUserProvider>
    </BrowserRouter>
  );
}

export default App;
