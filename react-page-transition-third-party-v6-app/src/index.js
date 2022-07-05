import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import {PageTransition} from '@steveeeie/react-page-transition';
import {useContext} from 'react';
import {
  PageTransitionContext,
  PageTransitionContextProvider,
} from './routers/PageTransitionContext';
import {HomePage} from './pages/home';
import {AboutPage} from './pages/about';
import randomItem from 'random-item';
import './index.scss';

const App = ({context}) => {
  const {enterAnimation, exitAnimation, presets} = useContext(
    PageTransitionContext
  );
  const location = useLocation();
  const choicedPreset = randomItem(presets);
  return (
    <>
      <PageTransition
        preset={choicedPreset}
        transitionKey={location.pathname}
        enterAnimation={enterAnimation}
        exitAnimation={exitAnimation}
      >
        <Routes location={location}>
          <Route
            exact
            path={'/about'}
            element={<AboutPage choicedPreset={choicedPreset} />}
          />
          <Route
            exact
            path="/"
            element={<HomePage choicedPreset={choicedPreset} />}
          />
        </Routes>
      </PageTransition>
    </>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <PageTransitionContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PageTransitionContextProvider>
);
