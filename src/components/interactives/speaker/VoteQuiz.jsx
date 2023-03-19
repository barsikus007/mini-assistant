import {
  Button, FormItem, Input, Platform, Radio,
} from '@vkontakte/vkui';
import { Icon16Add } from '@vkontakte/icons';
import { Base } from './Base';
import { FlexDiv } from '../../../components/styled';

function Answer({ isQuiz }) {
  return (
    // <dev style={{ display: 'flex' }}>
    // TODO всрато но долго и не понятно переделывать
    <FormItem removable>
      <FlexDiv style={{ justifyContent: 'space-between' }}>
        {isQuiz && (!Platform.IOS) && <Radio />}
        <Input placeholder="42" style={{ marginRight: 16, minWidth: Platform.IOS ? 'calc(100% - 16px - 22px)' : '100%' }} />
        {isQuiz && Platform.IOS && <Radio />}
      </FlexDiv>
    </FormItem>
    // </dev>
  );
}

function VoteQuiz({ isQuiz }) {
  return (
    <Base>
      {/* <FormItem top="Ваши ответы"> */}
      <Answer isQuiz={isQuiz} />
      {/* </FormItem> */}
      <Button before={<Icon16Add />}>Добавить варианты</Button>
    </Base>
  );
}

export default VoteQuiz;
