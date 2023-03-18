import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, PanelHeaderBack, Text, CellButton, Group, Div, Button, IconButton, Banner, Image } from '@vkontakte/vkui';
import App from '../App';
import './Mainpage.css';

const Alert = () => {
    const [popout, setPopout] = React.useState(null);
    const [actionsLog, setActionsLog] = React.useState([]);

    const addActionLogItem = (value) => {
        setActionsLog([...actionsLog, value]);
    };

    const closePopout = () => {
        setPopout(null);
    };

    const openAction = () => {
        setPopout(
            <Alert
                actions={[
                    {
                        title: 'Лишить права',
                        mode: 'destructive',
                        autoClose: true,
                        action: () => addActionLogItem('Право на модерацию контента убрано.'),
                    },
                    {
                        title: 'Отмена',
                        autoClose: true,
                        mode: 'cancel',
                    },
                ]}
                actionsLayout="vertical"
                onClose={closePopout}
                header="Подтвердите действие"
                text="Вы уверены, что хотите лишить пользователя права на модерацию контента?"
            />,
        );
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
                        action: () => addActionLogItem('Документ удален.'),
                    },
                ]}
                actionsLayout="horizontal"
                onClose={closePopout}
                header="Удаление документа"
                text="Вы уверены, что хотите удалить этот документ?"
            />,
        );
    };

    React.useEffect(() => {
        openDeletion();
    }, []);

    return (
        <SplitLayout popout={popout}>
            <SplitCol>
                <View activePanel="alert">
                    <Panel id="alert">
                        <PanelHeader>Alert</PanelHeader>
                        <Group>
                            <CellButton onClick={openAction}>Лишить права</CellButton>
                            <CellButton onClick={openDeletion}>Удалить документ</CellButton>
                            {actionsLog.map((value, i) => (
                                <Div key={i}>{value}</Div>
                            ))}
                        </Group>
                    </Panel>
                </View>
            </SplitCol>
        </SplitLayout>
    );
};
<Alert />;

export default Alert;
