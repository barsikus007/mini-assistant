import { useContext } from 'react';
import {
  Banner,
  Button,
  Div,
  Panel, PanelHeaderBack, Text,
} from '@vkontakte/vkui';
import { GlobalContext } from '../context';
import { CustomHeader } from '../components/styled';
import { applicationName } from '../consts';

function ListenerQuiz({ id }) {
  const { go } = useContext(GlobalContext);
  return (
    <Panel id={id}>
      <CustomHeader
        before={<PanelHeaderBack onClick={() => go('start')} />}
      >
        {applicationName}
      </CustomHeader>
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
      <Text> Сколько человек на хакатоне? </Text>

      <Button style={{ marginTop: '15px' }} size="l" appearance="accent">
        700
      </Button>
      <Button style={{ marginTop: '15px' }} size="l" appearance="positive">
        400
      </Button>
      <Button style={{ marginTop: '15px' }} size="l" appearance="accent">
        300
      </Button>
      <Button style={{ marginTop: '15px' }} size="l" appearance="negative">
        1
      </Button>
    </Panel >
  );
}

export default ListenerQuiz;
