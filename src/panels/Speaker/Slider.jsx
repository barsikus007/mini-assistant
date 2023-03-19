import React, { useContext } from 'react';
import {
  Panel, PanelHeaderBack, Button, Banner, ActionSheetItem, ActionSheet, ActionSheetDefaultIosCloseItem, FixedLayout,
} from '@vkontakte/vkui';
import {
  Icon24Add, Icon28EditOutline, Icon28ListPlayOutline, Icon28ShareOutline,
  Icon32PlayCircle,
} from '@vkontakte/icons';
import { GlobalContext } from '../../context';
import { CustomHeader, AddSlide } from '../../components/styled';
import { MODAL_QUIZ, MODAL_VOTE, MODAL_WORDS } from '../../components/modals';

function Slider({ id, setPopout, setActiveModal }) {
  const { go } = useContext(GlobalContext);
  const iconsTargetRef = React.useRef();
  const onClose = () => setPopout(null);
  const presentationName = 'Забастовка 4'; // TODOBACK получение
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
        before={<PanelHeaderBack onClick={() => go('speakerview')} />}
      >
        {presentationName}
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
              cursor: 'pointer',
              pointerEvents: 'auto',
            }}
          />
        )}
        header={<div style={{ opacity: 0.0, height: 80 }} />}
        subheader={<div style={{ opacity: 0.0, height: 80 }} />}
        asideMode="dismiss"
        onClick={openIcons}
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
              transform: 'scaleX(-1)',
              cursor: 'pointer',
              pointerEvents: 'auto',
            }}
          />
        )}
        header={<div style={{ opacity: 0.0, height: 80 }} />}
        subheader={<div style={{ opacity: 0.0, height: 80 }} />}
        asideMode="dismiss"
        onClick={openIcons}
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
              cursor: 'pointer',
              transform: 'scale(-1, -1)',
              pointerEvents: 'auto',
            }}
          />
        )}
        header={<div style={{ opacity: 0.0, height: 80 }} />}
        subheader={<div style={{ opacity: 0.0, height: 80 }} />}
        asideMode="dismiss"
        onClick={openIcons}
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
              transform: 'scale(1, -1)',
              cursor: 'pointer',
              pointerEvents: 'auto',
            }}
          />
        )}
        header={<div style={{ opacity: 0.0, height: 80 }} />}
        subheader={<div style={{ opacity: 0.0, height: 80 }} />}
        asideMode="dismiss"
        onClick={openIcons}
      />

      <AddSlide>
        {/* TODO another button */}
        <Button size="l" appearance="accent" mode="tertiary" before={<Icon24Add />} onClick={openIcons}>
          <span className="Button_text">Добавить интерактив</span>
        </Button>
      </AddSlide>

      <FixedLayout vertical="bottom">
        <Icon32PlayCircle
          style={{
            margin: 16, border: '2px white solid', borderRadius: 32, float: 'right', cursor: 'pointer',
          }}
          color="#2688EB"
          onClick={() => go('speakershow')}
        />
      </FixedLayout>
    </Panel>
  );
}

export default Slider;
