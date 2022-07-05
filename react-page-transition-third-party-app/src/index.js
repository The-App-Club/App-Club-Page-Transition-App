import {createRoot} from 'react-dom/client';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
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
  return (
    <>
      <Route exact path="/" render={() => <Redirect to="/" />} />
      <Route
        render={({location}) => {
          const choicedPreset = randomItem(presets);
          return (
            <PageTransition
              preset={choicedPreset}
              transitionKey={location.pathname}
              enterAnimation={enterAnimation}
              exitAnimation={exitAnimation}
            >
              <Switch location={location}>
                <Route
                  exact
                  path={'/about'}
                  render={() => {
                    return <AboutPage choicedPreset={choicedPreset} />;
                  }}
                />
                <Route
                  exact
                  path="/"
                  render={() => {
                    return <HomePage choicedPreset={choicedPreset} />;
                  }}
                />
              </Switch>
            </PageTransition>
          );
        }}
      />
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
