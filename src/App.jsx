import React, { useState, useEffect, createContext, useContext } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import { GlobalContext, GetRoutes } from './context';

import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home';
import Gioconda from './panels/Gioconda';
import Mainpage from './panels/Mainpage';

const App = () => {
  const {path,appearance,Appearance} = useContext(GlobalContext)
  const [fetchedUser, User] = useState(null);

  const VKBridgeSubscribeHandler = ({ detail: { type, data }}) => {
    if (type === 'VKWebAppUpdateConfig') {
      console.log(data)
      Appearance(data.appearance)
    }
  }

  useEffect(() => {
    bridge.subscribe(VKBridgeSubscribeHandler);
    bridge.send('VKWebAppGetUserInfo').then(User)
    return () => bridge.unsubscribe(VKBridgeSubscribeHandler)
  }, []);

  return (
    <ConfigProvider appearance={appearance}>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout>
            <SplitCol>
              <GetRoutes index='home' fallback='404'>
                <View id="home" activePanel={path}>
                  <Home id='home' fetchedUser={fetchedUser} />
                  <Gioconda id='gioconda' />
                  <Mainpage id='mainpage' />
                  <Error id='404' />
                </View>
              </GetRoutes>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

export default App;
