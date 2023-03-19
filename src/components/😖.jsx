import { useContext } from 'react';
import {
  Div, Image,
  Panel, PanelHeaderBack,
} from '@vkontakte/vkui';
import { GlobalContext } from '../context';
import { CustomHeader, ResultsText, AddSlide, ImageResults } from '../components/styled';
import { applicationName } from '../consts';
import Emojis from '../components/😁';

function NotGoodResults({ id }) {
  const { go } = useContext(GlobalContext);

  return (
    <Panel id={id}>
      <CustomHeader
        before={<PanelHeaderBack onClick={() => go('listenerquiz')} />}
      >
        {applicationName}
      </CustomHeader>
      <AddSlide>
        <ImageResults src='https://sun9-23.userapi.com/impg/Vv1Q908jGyW3yOLsgHUrv7xTJFduvsJfbNorlw/mojydCmeM2k.jpg?size=254x202&quality=95&sign=513bd706b8e1d2929eb975e3bc01e3fc&type=album' />
        <ResultsText>
          В следующий раз повезет!
        </ResultsText>
      </AddSlide>
      <Emojis />
    </Panel>
  );
}

export default NotGoodResults;
