import { useContext } from 'react';
import {
  Panel, PanelHeaderBack, Button, Banner, Image,
} from '@vkontakte/vkui';
import { Icon28ArrowDownToSquareOutline } from '@vkontakte/icons';
import { MODAL_UPLOAD } from '../components/modals';
import { GlobalContext } from '../context';
import { CustomHeader, Presentation, BannerWrap } from '../components/styled';
import { applicationName } from '../consts';

function SpeakerView({ id, setActiveModal }) {
  const { go } = useContext(GlobalContext);

  const presentations = [
    {
      id: 1,
      title: 'Тема презентации 1',
      description: 'Front-end разработка',
      image: 'https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg',
    },
    {
      id: 2,
      title: 'Тема презентации 2',
      description: 'Front-end разработка',
      image: 'https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg',
    },
    {
      id: 3,
      title: 'Тема презентации 3',
      description: 'Front-end разработка',
      image: 'https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg',
    },
    {
      id: 4,
      title: 'Тема презентации 4',
      description: 'Front-end разработка',
      image: 'https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg',
    },
  ];

  return (
    <Panel id={id}>
      <CustomHeader
        before={<PanelHeaderBack onClick={() => go('start')} />}
      >
        {applicationName}
      </CustomHeader>
      <Presentation>
        <Button size="l" appearance="accent" mode="tertiary" before={<Icon28ArrowDownToSquareOutline />} onClick={() => setActiveModal(MODAL_UPLOAD)}>
          <span className="Button_text">Загрузить презентацию</span>
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
            actions={<Button onClick={() => go('slider')}>Подробнее</Button>}
          />
        ))}
      </BannerWrap>
    </Panel>
  );
}

export default SpeakerView;
