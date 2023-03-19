import { useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import {
  Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar,
} from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';

import { SkeletonAvatar, SkeletonText } from '../components/Skeleton';
import { GlobalContext } from '../context';
import { applicationName } from '../consts';

function Start({ id, fetchedUser }) {
  const { go } = useContext(GlobalContext);
  const d = useRef();

  useEffect(() => {
    if (fetchedUser) return () => { };
    const t = setTimeout(() => {
      ReactDOM.createRoot(d.current).render(
        <Group header={<Header mode="secondary">Ошибка</Header>}>
          <Cell
            disabled
            multiline
            subtitle={(
              <>
                Скорее всего Вы запустили проект за пределами VK, поэтому не удалось получить информацию о профиле. Если хотите проверить, как это работает, можете воспользоваться мостом:
                <a href="https://vk.com/app7900950">https://vk.com/app7900950</a>
              </>
            )}
          >
            Не удалось загрузить информацию о пользователе
          </Cell>
        </Group>,
      );
    }, 4000);
    return () => clearTimeout(t);
  }, [fetchedUser]);

  return (
    <Panel id={id}>
      <PanelHeader>{applicationName}</PanelHeader>
      <div />
      <div style={{
        maxWidth: 600, width: '100%', marginInline: 'auto', marginTop: 20,
      }}
      >
        <div ref={d}>
          <Group header={<Header mode="secondary">{fetchedUser ? 'Добро пожаловать!:' : 'Загружаем данные...'}</Header>}>

            {(user => {
              const userExists = !!user;
              if (userExists) {
                return (
                  <Cell
                    before={user.photo_200 ? <Avatar src={user.photo_200} /> : null}
                    subtitle={user.city?.title ? user.city.title : null}
                    onClick={() => window.open(`https://vk.com/id${user.id}`)}
                  >
                    {`${user?.first_name} ${user?.last_name}`}
                  </Cell>
                );
              }
              return (
                <Cell
                  disabled
                  before={<SkeletonAvatar />}
                  subtitle={<SkeletonText style={{ height: 20, width: 140 }} />}
                >
                  <SkeletonText style={{ height: 20, width: 60 }} />
                  <SkeletonText style={{ height: 20, width: 100 }} />
                </Cell>
              );
            })(fetchedUser)}

          </Group>
        </div>
        <Group header={<Header mode="secondary">ВЫБЕРИТЕ ДЕЙСТВИЕ</Header>}>
          <Div>
            {/* TODO disabled */}
            <Button
              stretched
              size="l"
              mode="primary"
              onClick={() => bridge.send('VKWebAppOpenCodeReader')
                .then(data => {
                  if (data.code_data) {
                    // Сканирование QR-кода прошло успешно
                    // TODO переход на страницу с кодом
                    console.log(data.code_data);
                  }
                })
                .catch(error => {
                  // Ошибка
                  console.log(error);
                })}
            >
              QR сканер
            </Button>
          </Div>
          <Div>
            <Button stretched size="l" mode="secondary" onClick={() => go('listener')}>
              Ввести код
            </Button>
          </Div>
          <Div>
            <Button stretched size="l" mode="outline" onClick={() => go('speaker')}>
              Создать свою презентацию
            </Button>
          </Div>
          <Div>
            <Button stretched size="l" mode="tertiary" onClick={() => go(Math.random())}>
              Этой страницы не существует
            </Button>
          </Div>
          <Div>
            <Button stretched size="l" mode="tertiary" onClick={() => go('test')}>
              Тест
            </Button>
          </Div>
        </Group>
      </div>
    </Panel>
  );
}

export default Start;
