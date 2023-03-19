import {
  FormItem,
  Group,
  Input,
  ModalPage, ModalPageHeader, PanelHeaderClose, PanelHeaderSubmit, Switch, useAdaptivityConditionalRender,
} from '@vkontakte/vkui';
import { Icon24ClockOutline } from '@vkontakte/icons';

function Base({ title, children }) {
  const { sizeX } = useAdaptivityConditionalRender();
  const modalBack = () => {};
  const MODAL_PAGE_FILTERS = '123';
  return (
    <ModalPage
      id={MODAL_PAGE_FILTERS}
      onClose={modalBack}
      header={(
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
        )}
    >
      <Group>
        {children}
        <FormItem top="Таймер">
          <Icon24ClockOutline />
          {' '}
          Таймер
          {' '}
          <Input placeholder="20" />
          {' '}
          сек
          <Switch />
        </FormItem>
      </Group>
    </ModalPage>
  );
}

export default Base;
