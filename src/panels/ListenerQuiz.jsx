import { useContext } from 'react';
import {
  Banner,
  Button,
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
      <Text style={{ paddingLeft: '12.5px' }}> Сколько человек на хакатоне? </Text>

      <Button style={{ margin: '15px 10px 0 10px' }} size="l" appearance="accent">
        700
      </Button>
      <Button style={{ margin: '15px 10px 0 10px' }} size="l" appearance="positive" onClick={() => go('goodresults')}>
        400
      </Button>
      <Button style={{ margin: '15px 10px 0 10px' }} size="l" appearance="accent">
        300
      </Button>
      <Button style={{ margin: '15px 10px 0 10px' }} size="l" appearance="negative" onClick={() => go('notgoodresults')}>
        1
      </Button>
    </Panel>
  );
}

export default ListenerQuiz;
