/* eslint-disable react/no-unstable-nested-components */
import { useState, useEffect, useContext } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
  View, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol, ModalRoot, ModalCard, ModalPage, File,
} from '@vkontakte/vkui';
import {
  Icon16Add, Icon56NotebookCheckOutline,
} from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';
import Error from './panels/Error';
import { GlobalContext, GetRoutes } from './context';
import Slider from './panels/Speaker/Slider';
import Show from './panels/Speaker/Show';
import Start from './panels/Start';
import SpeakerView from './panels/SpeakerView';
import {
  MODAL_QUIZ, MODAL_UPLOAD, MODAL_VOTE, MODAL_WORDS,
} from './components/modals';
import { Base, BaseHeader } from './components/interactives/speaker/Base';
import VoteQuiz from './components/interactives/speaker/VoteQuiz';
import ListenerView from './panels/ListenerView';
import ListenerQuiz from './panels/ListenerQuiz';
import NotGoodResults from './components/😖';
import GoodResults from './components/😘';
import VoteStatistic from './components/VoteStatistic';

function App() {
  const { path, appearance, Appearance } = useContext(GlobalContext);
  const [fetchedUser, User] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [popout, setPopout] = useState(null);

  const VKBridgeSubscribeHandler = ({ detail: { type, data } }) => {
    if (type === 'VKWebAppUpdateConfig') {
      console.log(data);
      Appearance(data.appearance);
    }
  };

  useEffect(() => {
    bridge.subscribe(VKBridgeSubscribeHandler);
    bridge.send('VKWebAppGetUserInfo').then(User);
    return () => bridge.unsubscribe(VKBridgeSubscribeHandler);
  }, []);

  const modal = (
    <ModalRoot activeModal={activeModal}>
      <ModalCard
        id={MODAL_UPLOAD}
        onClose={() => setActiveModal(null)}
        icon={<Icon56NotebookCheckOutline />}
        header="Импорт презентации"
        subheader="Загрузите PDF или PPTX файл, не превышающий 50 МВ и 100 слайдов"
        actions={(
          <File
            size="l"
            mode="primary"
            stretched
            before={<Icon16Add />}
            accept=".pdf,.pptx"
          >
            Загрузить файл
          </File>
        )}
      />
      <ModalPage
        id={MODAL_QUIZ}
        header={<BaseHeader title={MODAL_QUIZ} setActiveModal={setActiveModal} />}
      >
        <VoteQuiz isQuiz />
      </ModalPage>
      <ModalPage
        id={MODAL_VOTE}
        header={<BaseHeader title={MODAL_VOTE} setActiveModal={setActiveModal} />}
      >
        <VoteQuiz />
      </ModalPage>
      <ModalPage
        id={MODAL_WORDS}
        header={<BaseHeader title={MODAL_WORDS} setActiveModal={setActiveModal} />}
      >
        <Base>{MODAL_WORDS}</Base>
      </ModalPage>
    </ModalRoot>
  );

  return (
    <ConfigProvider appearance={appearance}>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout modal={modal} popout={popout}>
            <SplitCol>
              <GetRoutes index="start" fallback="404">
                <View id="start" activePanel={path}>
                  <Start id="start" fetchedUser={fetchedUser} />

                  <SpeakerView id="speakerview" setPopout={setPopout} setActiveModal={setActiveModal} />
                  <Slider id="speakerslider" setPopout={setPopout} setActiveModal={setActiveModal} />
                  <Show id="speakershow" />
                  <NotGoodResults id="notgoodresults" />
                  <VoteStatistic id="statistic" />
                  <GoodResults id="goodresults" />
                  <ListenerView id="listener" setActiveModal={setActiveModal} />
                  <ListenerQuiz id="listenerquiz" />
                  <Error id="404" />
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
