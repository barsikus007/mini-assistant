import { useContext } from 'react';
import {
  Button,
  Panel, PanelHeaderBack,
} from '@vkontakte/vkui';
import { GlobalContext } from '../context';
import { CustomHeader, ResultsText, AddSlide, ImageResults } from '../components/styled';
import { applicationName } from '../consts';
import Emojis from '../components/😁';

function GoodResults({ id }) {
  const { go } = useContext(GlobalContext);

  return (
    <Panel id={id}>
      <CustomHeader
        before={<PanelHeaderBack onClick={() => go('listenerquiz')} />}
      >
        {applicationName}
      </CustomHeader>
      <AddSlide>
        <ImageResults src='https://sun9-63.userapi.com/impg/cXFPw5S1gMBPX9g9V2rIJh9s9c_H-eBiNCq1hQ/TWgZssv4wy8.jpg?size=254x202&quality=95&sign=bde917c42c687e5dddb03b106bb61ea1&type=album' />
        <ResultsText>
          Поздравляем!
        </ResultsText>
        <Button style={{ marginTop: '15px' }} size="l" appearance="accent" onClick={() => go('statistic')}>
          Перейти к результатам
        </Button>
      </AddSlide>
      <Emojis />
    </Panel>
  );
}

export default GoodResults;
