import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import './index.css';

import {HomePage} from './pages/home';
import {AboutPage} from './pages/about';
import {ProfilePage} from './pages/profile';
import {Progress} from './components/Progress';

const App = ({context}) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  return (
    <>
      {/*
      Setting a key means that a new NProgress instance is created if
      the location is changing, giving us the UI behaviour we want. See:
      https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key.
      */}
      <Progress isAnimating={isLoading} key={location.key} />
      <Routes location={location}>
        <Route path="/" element={<HomePage setIsLoading={setIsLoading} />} />
        <Route
          path="/about"
          element={<AboutPage setIsLoading={setIsLoading} />}
        />
        <Route
          path="/profile"
          element={<ProfilePage setIsLoading={setIsLoading} />}
        />
        <Route element={<div>Not Found</div>} path="*" />
      </Routes>
    </>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

// https://github.com/tanem/react-nprogress/blob/master/examples/react-router-v6/src/index.tsx#L180-L190
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />} path="*" />
    </Routes>
  </BrowserRouter>
);
