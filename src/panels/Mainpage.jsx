import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, PanelHeaderBack, Text, CellButton, Group, Div, Button, IconButton, Banner, Image } from '@vkontakte/vkui';
import { Icon16Add, Icon24Add, Icon28ArrowDownToSquareOutline } from '@vkontakte/icons';
import './Mainpage.css';
import Alert from './Alert';
const Mainpage = props => (

	<Panel id={props.id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={props.go} data-to="home" />} >
			<Text className='Logo_name'>
				Живая Презентация
			</Text>
		</PanelHeader>
		<Div className='Presentation_menu'>
			<Text className='Presentation_text'>
				Мои презентации
			</Text>
			<Button size="l" appearance="accent" mode="tertiary" before={<Icon28ArrowDownToSquareOutline />} onClick={() => changeActiveModal(MODAL_CARD_MONEY_SEND)}>
				Загрузить презентацию
			</Button>
		</Div>
		<Div className='Banner_wrap'>
			<Banner
				before={
					<Image
						size={128}
						src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"
					/>
				}
				header="Тема презентации"
				subheader="Front-end разработка"
				asideMode="dismiss"
				actions={<Button>Подробнее</Button>}
			/>
			<Banner
				before={
					<Image
						size={128}
						src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"
					/>
				}
				header="Тема презентации"
				subheader="Front-end разработка"
				asideMode="dismiss"
				actions={<Button>Подробнее</Button>}
			/>
			<Banner
				before={
					<Image
						size={128}
						src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"
					/>
				}
				header="Тема презентации"
				subheader="Front-end разработка"
				asideMode="dismiss"
				actions={<Button>Подробнее</Button>}
			/>
			<Banner
				before={
					<Image
						size={128}
						src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"
					/>
				}
				header="Тема презентации"
				subheader="Front-end разработка"
				asideMode="dismiss"
				actions={<Button>Подробнее</Button>}
			/>
		</Div>
	</Panel >


);

Mainpage.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Mainpage;
