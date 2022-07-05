import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav style={{ margin: 10 }}>
      <Link to="/" style={{ padding: 5 }}>
        Home
      </Link>
      <Link to="/about" style={{ padding: 5 }}>
        About
      </Link>
      <Link to="/posts" style={{ padding: 5 }}>
        Posts
      </Link>
    </nav>
  );
};

export { Nav };
