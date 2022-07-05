import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About } from "./pages/about";
import { Home } from "./pages/home";
import { Posts } from "./pages/posts";
import { PostList } from "./components/PostList";
import { Post } from "./components/Post";
import { Nav } from "./components/Nav";
import "./styles/index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      {/* Rest of the code remains same */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="posts" element={<Posts />}>
          <Route index element={<PostList />} />
          <Route path=":slug" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<App />);
