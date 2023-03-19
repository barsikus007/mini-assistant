import React, { useContext } from 'react';
import {
  Panel, PanelHeaderBack, Banner, ActionSheetItem, ActionSheet, ActionSheetDefaultIosCloseItem, CellButton,
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

  // TODO https://vkcom.github.io/VKUI/#/Cell
  // TODO https://vkcom.github.io/VKUI/#/Card
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
              /* tp193-319-384-229-s30-audi-presentation-10 1 */
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
        <CellButton centered before={<Icon24Add />} onClick={openIcons}>
          Добавить интерактив
        </CellButton>
      </AddSlide>

      <Icon32PlayCircle
        style={{
          margin: 16, border: '2px white solid', borderRadius: 32, cursor: 'pointer', position: 'fixed', bottom: 0, right: 0,
        }}
        color="#2688EB"
        onClick={() => go('speakershow')}
      />
    </Panel>
  );
}

export default Slider;
