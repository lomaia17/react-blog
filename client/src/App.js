import React from "react";
import "./App.css";
import Home from "./pages/home";
import SinglePost from "./pages/singlePost";
import CreatePost from "./pages/createPost";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/post/:postId" element={<SinglePost />} />
          <Route path="/createPost/" element={<CreatePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
