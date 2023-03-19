import { useContext } from 'react';
import {
  Panel, PanelHeaderBack,
} from '@vkontakte/vkui';
import { GlobalContext } from '../context';
import { CustomHeader } from '../components/styled';
import { applicationName } from '../consts';

function ListenerView({ id }) {
  const { go } = useContext(GlobalContext);

  return (
    <Panel id={id}>
      <CustomHeader
        before={<PanelHeaderBack onClick={() => go('start')} />}
      >
        {applicationName}
      </CustomHeader>
      aboba
    </Panel>
  );
}

export default ListenerView;
