import {
  Button, Checkbox, FormItem, FormLayoutGroup, Input, Platform, Radio,
} from '@vkontakte/vkui';
import { Icon16Add } from '@vkontakte/icons';
import { useState } from 'react';
import { Base } from './Base';
import { FlexDiv } from '../../styled';

function Answer({ isQuiz }) {
  return (
    // <dev style={{ display: 'flex' }}>
    // TODO всрато но долго и не понятно переделывать
    <FormItem removable>
      <FlexDiv style={{ justifyContent: 'space-between' }}>
        {isQuiz && Platform.IOS && <Radio />}
        <Input placeholder="42" style={{ marginRight: 16, minWidth: Platform.IOS ? 'calc(100% - 16px - 22px)' : '100%' }} />
        {isQuiz && (!Platform.IOS) && <Radio />}
      </FlexDiv>
    </FormItem>
    // </dev>
  );
}

function VoteQuiz({ isQuiz }) {
  const answers = useState([]);

  return (
    <Base>
      <FormLayoutGroup top="Ваши ответы">
        {answers.map(answer => <Answer key={answer.text} isQuiz={isQuiz} />)}
      </FormLayoutGroup>
      <FlexDiv style={{ justifyContent: 'center', marginBlock: 8 }}><Button before={<Icon16Add />}>Добавить варианты</Button></FlexDiv>
      <FlexDiv style={{ justifyContent: 'start' }}><Checkbox>Множественный выбор</Checkbox></FlexDiv>
    </Base>
  );
}

export default VoteQuiz;
