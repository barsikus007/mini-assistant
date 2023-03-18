import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, PanelHeaderBack, Text, CellButton, Group, Div, Button, IconButton, Banner, Image } from '@vkontakte/vkui';
import { Icon16Add } from '@vkontakte/icons';
import './Mainpage.css';

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
			<IconButton>
				<Icon16Add />
			</IconButton>
		</Div>
		<Banner
			before={
				<Image
					size={96}
					src="https://sun9-63.userapi.com/yOEQYPHrNHjZEoanbqPb65HPl5iojmiLgLzfGA/W3geVMMt8TI.jpg"
				/>
			}
			header="Баста в Ледовом"
			subheader="Большой концерт"
			asideMode="dismiss"
			actions={<Button>Подробнее</Button>}
		/>
	</Panel >

);

Mainpage.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Mainpage;
