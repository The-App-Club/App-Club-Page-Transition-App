import {presets, animations} from './PageTransitionAsset';
import {createContext, useState} from 'react';

const PageTransitionContext = createContext();

const PageTransitionContextProvider = ({children}) => {
  const [preset, setPreset] = useState('roomToBottom');
  const [enterAnimation, setEnterAnimation] = useState('');
  const [exitAnimation, setExitAnimation] = useState('');

  return (
    <PageTransitionContext.Provider
      value={{
        preset,
        enterAnimation,
        exitAnimation,
        setPreset,
        setEnterAnimation,
        setExitAnimation,
        presets,
        animations,
      }}
    >
      {children}
    </PageTransitionContext.Provider>
  );
};

export {PageTransitionContext, PageTransitionContextProvider};
