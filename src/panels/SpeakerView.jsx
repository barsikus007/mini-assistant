import { useContext } from 'react';
import {
  Panel, PanelHeaderBack, Button, Banner, Image, Alert,
} from '@vkontakte/vkui';
import { Icon28ArrowDownToSquareOutline } from '@vkontakte/icons';
import { MODAL_UPLOAD } from '../components/modals';
import { GlobalContext } from '../context';
import { CustomHeader, Presentation, BannerWrap } from '../components/styled';
import { applicationName } from '../consts';

function SpeakerView({ id, setActiveModal, setPopout }) {
  const { go } = useContext(GlobalContext);

  const presentations = [ // TODOBACK получение
    {
      id: 1,
      title: 'Вконтакте',
      description: 'Не забудьте добавить описание',
      image: 'https://sun9-57.userapi.com/impg/2Ptna4psiEv5lCRV9GAZJq4985e_B9Y45Powmw/EMfsTg3eB9w.jpg?size=96x96&quality=96&sign=e8a8930587cc97af24a6637d5528ce5d&type=album',
    },
    {
      id: 2,
      title: 'Центр инвест',
      description: 'Не забудьте добавить описание',
      image: 'https://sun9-13.userapi.com/impg/IR02sfMzGJQLCFFsxKCBDCq05qrHdYVyN3ME0Q/ntj8MXG_7Fs.jpg?size=96x97&quality=96&sign=033bc72376279a1175e174c559225659&type=album',
    },
    {
      id: 3,
      title: 'Хакатон',
      description: 'Не забудьте добавить описание',
      image: 'https://sun9-4.userapi.com/impg/OOrGdXZ4lS9auqUpSJ8ZcdzyX15XTtvVO9ATsQ/xgq5NG-dBMQ.jpg?size=96x97&quality=96&sign=3db3940f6ebae056cb849a0f927b356c&type=album',
    },
    {
      id: 4,
      title: 'Забастовка',
      description: 'Не забудьте добавить описание',
      image: 'https://55.img.avito.st/avatar/social/96x96/11483806155.jpg',
    },
  ];
  const closePopout = () => {
    setPopout(null);
  };
  const openDeletion = () => {
    setPopout(
      <Alert
        actions={[
          {
            title: 'Отмена',
            autoClose: true,
            mode: 'cancel',
          },
          {
            title: 'Удалить',
            autoClose: true,
            mode: 'destructive',
            action: () => console.log('TODOBACK Удаление'),
          },
        ]}
        actionsLayout="horizontal"
        onClose={closePopout}
        header="Удаление документа"
        text="Вы уверены, что хотите удалить этот документ?"
      />,
    );
  };

  return (
    <Panel id={id}>
      <CustomHeader
        before={<PanelHeaderBack onClick={() => go('start')} />}
      >
        {applicationName}
      </CustomHeader>
      <Presentation>
        <Button size="l" mode="tertiary" before={<Icon28ArrowDownToSquareOutline />} onClick={() => setActiveModal(MODAL_UPLOAD)}>
          Загрузить презентацию
        </Button>
      </Presentation>
      <BannerWrap>
        {presentations.map(presentation => (
          <Banner
            key={presentation.id}
            before={(
              <Image
                size={128}
                src={presentation.image}
              />
            )}
            header={presentation.title}
            subheader={presentation.description}
            asideMode="dismiss"
            onDismiss={openDeletion}
            actions={<Button onClick={() => go('speakerslider')}>Подробнее</Button>}
          />
        ))}
      </BannerWrap>
    </Panel>
  );
}

export default SpeakerView;
