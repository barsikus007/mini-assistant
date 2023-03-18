import { useContext } from 'react';
import {
  Panel, PanelHeader, PanelHeaderBack, Text, Div, Button, Banner, Image,
} from '@vkontakte/vkui';
import { Icon28ArrowDownToSquareOutline } from '@vkontakte/icons';
import './Mainpage.css';
import { MODAL_UPLOAD } from '../components/modals';
import { GlobalContext } from '../context';

function Mainpage({ id, setActiveModal }) {
  const { go } = useContext(GlobalContext);

  return (
    <Panel id={id}>
      <PanelHeader
        before={<PanelHeaderBack onClick={() => go('home')} />}
      >
        <Text className="Logo_name">
          Живая Презентация
        </Text>
      </PanelHeader>
      <Div className="Presentation_menu">
        <Button size="l" appearance="accent" mode="tertiary" before={<Icon28ArrowDownToSquareOutline />} onClick={() => setActiveModal(MODAL_UPLOAD)}>
          <span className="Button_text">Загрузить презентацию</span>
        </Button>
      </Div>
      <Div className="Banner_wrap">
        <Banner
          before={(
            <Image
              size={128}
              src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"
            />
          )}
          header="Тема презентации"
          subheader="Front-end разработка"
          asideMode="dismiss"
          actions={<Button>Подробнее</Button>}
        />
        <Banner
          before={(
            <Image
              size={128}
              src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"
            />
          )}
          header="Тема презентации"
          subheader="Front-end разработка"
          asideMode="dismiss"
          actions={<Button>Подробнее</Button>}
        />
        <Banner
          before={(
            <Image
              size={128}
              src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"
            />
          )}
          header="Тема презентации"
          subheader="Front-end разработка"
          asideMode="dismiss"
          actions={<Button>Подробнее</Button>}
        />
        <Banner
          before={(
            <Image
              size={128}
              src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"
            />
          )}
          header="Тема презентации"
          subheader="Front-end разработка"
          asideMode="dismiss"
          actions={<Button>Подробнее</Button>}
        />
      </Div>
    </Panel>
  );
}

export default Mainpage;
