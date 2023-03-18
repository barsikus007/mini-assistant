import {
  useEffect, useContext, createContext, useState,
} from 'react';

const defaultData = {
  path: 'start',
  aviableRoutes: [],
  fallback: '404',
  appearance: 'light',
};

const GlobalContext = createContext(defaultData);

function GlobalProvider({ children }) {
  const [data, Data] = useState(defaultData);

  const go = path => {
    if (data.aviableRoutes.includes(path)) Data(e => ({ ...e, path }));
    else Data(e => ({ ...e, path: e.fallback }));
  };

  const Appearance = appearance => {
    Data(e => ({ ...e, appearance }));
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <GlobalContext.Provider value={{
      ...data, setGlobalData: Data, Appearance, go,
    }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

function GetRoutes({ children, fallback = '404', index = 'start' }) {
  const { setGlobalData } = useContext(GlobalContext);

  useEffect(() => {
    const rc = children.props?.children;
    console.log(rc);
    if (rc?.[0]) {
      setGlobalData(e => ({
        ...e,
        fallback,
        index,
        aviableRoutes: rc.map(ez => ez.props?.id),
      }));
    }
  }, []);

  return children;
}

export { GlobalContext, GlobalProvider, GetRoutes };
