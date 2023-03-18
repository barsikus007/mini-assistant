import { useContext } from 'react';
import {
  Panel, PanelHeader, PanelHeaderBack, Text, Button, Banner,
} from '@vkontakte/vkui';
import { Icon24Add } from '@vkontakte/icons';
import './SpeakerView.css';
// import { Title, ZButton, MoreButton } from '../components/styled'
import { GlobalContext } from '../context';
import { MODAL_INTERACTIVE } from '../components/modals';

function Slider({ id, setActiveModal }) {
  const { go } = useContext(GlobalContext);

  return (
    <Panel id={id}>
      <PanelHeader
        before={<PanelHeaderBack onClick={() => go('speaker')} />}
      >
        <Text className="Logo_name">
          Живая Презентация
        </Text>
      </PanelHeader>
      <Banner
        mode="image"
        size="l"
        background={(
          <div
            style={{
              backgroundColor: '#000',
              backgroundImage:
                'url(https://sun9-53.userapi.com/m-ygfKiLKLkEMAQVTToO2l9LyC6GgqWoGXpw8A/-zm6_XLECTU.jpg)',
              backgroundPosition: 'right bottom',
              backgroundSize: 340,
              maxwidth: 300,
              backgroundRepeat: 'no-repeat',
            }}
          />
        )}
        header={<div style={{ opacity: 0.0, height: 80 }} />}
        subheader={<div style={{ opacity: 0.0, height: 80 }} />}
        asideMode="dismiss"
      />
      <Banner
        mode="image"
        size="l"
        background={(
          <div
            style={{
              backgroundColor: '#000',
              backgroundImage:
                'url(https://sun9-53.userapi.com/m-ygfKiLKLkEMAQVTToO2l9LyC6GgqWoGXpw8A/-zm6_XLECTU.jpg)',
              backgroundPosition: 'right bottom',
              backgroundSize: 340,
              maxwidth: 300,
              backgroundRepeat: 'no-repeat',
            }}
          />
        )}
        header={<div style={{ opacity: 0.0, height: 80 }} />}
        subheader={<div style={{ opacity: 0.0, height: 80 }} />}
        asideMode="dismiss"
      />

      <div className="New_slide">
        <Button size="l" appearance="accent" mode="tertiary" before={<Icon24Add />} onClick={() => setActiveModal(MODAL_INTERACTIVE)}>
          <span className="Button_text">Добавить интерактив</span>
        </Button>
      </div>

    </Panel>
  );
}

export default Slider;
