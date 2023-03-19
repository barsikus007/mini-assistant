import {
  FormItem,
  FormLayout,
  Group,
  Input,
  ModalPageHeader, PanelHeaderClose, PanelHeaderSubmit, Switch, useAdaptivityConditionalRender,
} from '@vkontakte/vkui';
import { Icon24ClockOutline } from '@vkontakte/icons';

export function BaseHeader({ title, setActiveModal }) {
  const { sizeX } = useAdaptivityConditionalRender();
  const modalBack = () => setActiveModal(null);
  return (
    <ModalPageHeader
      before={
              sizeX.compact && (
                <PanelHeaderClose className={sizeX.compact.className} onClick={modalBack} />
              )
            }
      after={<PanelHeaderSubmit onClick={modalBack} />}
    >
      {title}
    </ModalPageHeader>
  );
}

export function Base({ children }) {
  return (
    <Group>
      <FormLayout>
        <FormItem top="Ваш вопрос">
          <Input placeholder="Сколько мышат съел Сергей Кашатов?" />
        </FormItem>
        {children}
        <FormItem>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
          >
            <Icon24ClockOutline />
            {' '}
            Таймер
            {' '}
            <Input placeholder="20" />
            {' '}
            сек
            <Switch />
          </div>
        </FormItem>
      </FormLayout>
    </Group>
  );
}
