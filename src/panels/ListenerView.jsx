import { useContext } from 'react';
import {
  FormLayout,
  Div,
  FormItem,
  Button,
  Input,
  Panel, PanelHeaderBack,
} from '@vkontakte/vkui';
import { GlobalContext } from '../context';
import { CustomHeader } from '../components/styled';
import { applicationName } from '../consts';
import Emojis from '../components/😁';

function ListenerView({ id, formItemStatus }) {
  const { go } = useContext(GlobalContext);

  return (
    <Panel id={id}>
      <CustomHeader
        before={<PanelHeaderBack onClick={() => go('start')} />}
      >
        {applicationName}
      </CustomHeader>
      <FormLayout>
        <FormItem top="Поле для никнейма" status={formItemStatus}>
          <Input
            type="text"
            placeholder="Введите свой никнейм"
          />
        </FormItem>
      </FormLayout>
      <Div style={{ margin: '0 auto' }}>
        <Button onClick={() => go('listenerquiz')}>
          Присоединиться
        </Button>
      </Div>
      <Emojis />
    </Panel>
  );
}

export default ListenerView;
