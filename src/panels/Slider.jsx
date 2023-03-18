import { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Panel, PanelHeader, PanelHeaderBack, Text, Button, Banner,
} from '@vkontakte/vkui';
import { Icon24Add } from '@vkontakte/icons';
import './Mainpage.css';
// import { Title, ZButton, MoreButton } from '../components/styled'
import { GlobalContext } from '../context';
import Mainpage from './Mainpage';

function Slider({ id }) {
  const { go } = useContext(GlobalContext);

  return (
    <Panel id={id}>
      <PanelHeader
        before={<PanelHeaderBack onClick={() => go('mainpage')} />}
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
        <Button size="l" appearance="accent" mode="tertiary" before={<Icon24Add />}>
          <span className="Button_text">Добавить слайд</span>
        </Button>
      </div>

    </Panel>
  );
}

Mainpage.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Slider;
