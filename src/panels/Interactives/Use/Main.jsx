import { CustomHeader } from '../../../components/styled'
import React, { useContext } from 'react';
import {
  Panel, PanelHeaderBack, Button, Banner, ActionSheetItem, ActionSheet, ActionSheetDefaultIosCloseItem,
} from '@vkontakte/vkui';


function Main({ id }) {
  const { go } = useContext(GlobalContext);

  return (
    <Panel id={id}>
      <CustomHeader
        before={<PanelHeaderBack onClick={() => go('')} />}
      >
        {applicationName}
      </CustomHeader>
    </Panel>
  );
}

export default Main;
