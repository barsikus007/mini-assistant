import React, { useContext } from 'react';
import {
  Panel, PanelHeaderBack, Button, Banner, ActionSheetItem, ActionSheet, ActionSheetDefaultIosCloseItem,
} from '@vkontakte/vkui';
import {
  Icon24Add, Icon28EditOutline, Icon28ListPlayOutline, Icon28ShareOutline,
} from '@vkontakte/icons';
import './SpeakerView.css';
// import { Title, ZButton, MoreButton } from '../components/styled'
import { GlobalContext } from '../context';
import { CustomHeader } from '../components/styled';
import { applicationName } from '../consts';
import { MODAL_QUIZ, MODAL_VOTE, MODAL_WORDS } from '../components/modals';

function Slider({ id, setPopout, setActiveModal }) {
  const { go } = useContext(GlobalContext);
  const iconsTargetRef = React.useRef();
  const onClose = () => setPopout(null);
  const openIcons = () => setPopout(
    <ActionSheet
      onClose={onClose}
      iosCloseItem={<ActionSheetDefaultIosCloseItem />}
      toggleRef={iconsTargetRef}
    >
      <ActionSheetItem autoClose before={<Icon28EditOutline />} onClick={() => setActiveModal(MODAL_VOTE)}>
        {MODAL_VOTE}
      </ActionSheetItem>
      <ActionSheetItem autoClose before={<Icon28ListPlayOutline />} onClick={() => setActiveModal(MODAL_QUIZ)}>
        {MODAL_QUIZ}
      </ActionSheetItem>
      <ActionSheetItem autoClose before={<Icon28ShareOutline />} onClick={() => setActiveModal(MODAL_WORDS)}>
        {MODAL_WORDS}
      </ActionSheetItem>
    </ActionSheet>,
  );

  return (
    <Panel id={id}>
      <CustomHeader
        before={<PanelHeaderBack onClick={() => go('speaker')} />}
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
        <Button size="l" appearance="accent" mode="tertiary" before={<Icon24Add />} onClick={openIcons}>
          <span className="Button_text">Добавить интерактив</span>
        </Button>
      </div>

    </Panel>
  );
}

export default Slider;
