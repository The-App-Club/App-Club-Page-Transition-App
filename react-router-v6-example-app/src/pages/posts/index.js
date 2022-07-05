import { Outlet } from "react-router-dom";

const Posts = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Blog</h2>
      {/* render any matching child */}
      <Outlet />
    </div>
  );
}

export {Posts}