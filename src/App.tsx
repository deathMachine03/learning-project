import {Routes, Route, Navigate} from "react-router-dom"
import "./App.css";
import { UsersPage } from "./features/user/pages/UsersPage";
import { PostsPage } from "./features/post/pages/PostsPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/users" replace/>} />
      <Route path="/users" element={<UsersPage/>} />
      <Route path="/posts" element={<PostsPage/>} />
    </Routes>
  )
}

export default App;