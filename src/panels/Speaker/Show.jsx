import { useContext } from 'react';
import {
  Banner, Button,
  Div,
  Panel, PanelHeaderBack,
} from '@vkontakte/vkui';

import { Icon16Link } from '@vkontakte/icons';

import { GlobalContext } from '../../context';
import { CustomHeader, ShowIdentif, ShowTitle } from '../../components/styled';

// import { MODAL_QUIZ, MODAL_VOTE, MODAL_WORDS } from '../../components/modals';

function Show({ id }) {
  const { go } = useContext(GlobalContext);
  const presentationName = 'Забастовка 4'; // TODOBACK получение
  return (
    <Panel id={id}>
      <CustomHeader
        before={<PanelHeaderBack onClick={() => go('speakerslider')} />}
      >
        {presentationName}
      </CustomHeader>
      <ShowIdentif>
        <ShowTitle> Итендификатор:  19129</ShowTitle>
        <Icon16Link style={{ marginTop: '3.5px' }} />
      </ShowIdentif>
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
              transform: 'scale(1, -1)',
              cursor: 'pointer',
              pointerEvents: 'auto',
            }}
          />
        )}
        header={<div style={{ opacity: 0.0, height: 80 }} />}
        subheader={<div style={{ opacity: 0.0, height: 80 }} />}
        asideMode="dismiss"
      />
      <Div style={{ justifyContent: 'space-around', display: 'flex', marginTop: '40px' }}>
        <Button onClick={() => go('listenerquiz')}>
          Присоединиться
        </Button>
        <Button onClick={() => go('listenerquiz')}>
          Присоединиться
        </Button>
      </Div>
    </Panel>
  );
}

export default Show;
