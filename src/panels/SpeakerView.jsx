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
      title: 'Забастовка 1',
      description: 'Front-end разработка',
      image: 'https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg',
    },
    {
      id: 2,
      title: 'Забастовка 2',
      description: 'Front-end разработка',
      image: 'https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg',
    },
    {
      id: 3,
      title: 'Забастовка 3',
      description: 'Front-end разработка',
      image: 'https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg',
    },
    {
      id: 4,
      title: 'Забастовка 4',
      description: 'Front-end разработка',
      image: 'https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg',
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
