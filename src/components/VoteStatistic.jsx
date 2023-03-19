import { useContext } from 'react';
import {
  Panel, PanelHeaderBack,
} from '@vkontakte/vkui';
import { GlobalContext } from '../context';
import { CustomHeader, ResultsText, AddSlide, StatisticResults } from '../components/styled';
import { applicationName } from '../consts';
import Emojis from '../components/😁';

function VoteStatistic({ id }) {
  const { go } = useContext(GlobalContext);

  return (
    <Panel id={id}>
      <CustomHeader
        before={<PanelHeaderBack onClick={() => go('goodresults')} />}
      >
        {applicationName}
      </CustomHeader>
      <AddSlide>
        <StatisticResults src='https://raw.githubusercontent.com/d3/d3-array/master/img/histogram.png' />
        <ResultsText>
          Вот результаты
        </ResultsText>
      </AddSlide>
      <Emojis />
    </Panel>
  );
}

export default VoteStatistic;
