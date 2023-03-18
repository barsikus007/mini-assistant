import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, PanelHeaderBack, Text, CellButton, Group, Div, Button, IconButton, Banner, Image } from '@vkontakte/vkui';
import { Icon16Add, Icon24Add, Icon28ArrowDownToSquareOutline } from '@vkontakte/icons';
import './Mainpage.css';
import { Title, ZButton } from '../components/styled'
import Alert from './Alert';
import { GlobalContext } from '../context';
import Mainpage from './Mainpage';

const Slider = props => {
  const { go } = useContext(GlobalContext)

  return (
    <Panel id={props.id}>
      <PanelHeader
        before={<PanelHeaderBack onClick={() => go("mainpage")} />} >
        <Text className='Logo_name'>
          Живая Презентация
        </Text>
      </PanelHeader>
      <Banner
        before={
          <Image
            size={256}
            src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"
          />
        }
        actions={<Button>Подробнее</Button>}
      />
    </Panel>
  )
};

Mainpage.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Slider;
