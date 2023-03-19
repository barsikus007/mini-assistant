import {
  Button, Checkbox, FormItem, FormLayoutGroup, Input, Platform, Radio, Div,
} from '@vkontakte/vkui';
import { Icon16Add } from '@vkontakte/icons';
import { useState } from 'react';
import { Base } from './Base';
import { FlexDiv } from '../../styled';

function Answers({ answers, isQuiz }) {
  console.log('answers: ', answers);
  const radios = isQuiz && (
    <Div style={{ justifyContent: 'space-between' }}>
      {answers.map(answer => <Radio key={answer} />)}
    </Div>
  );
  return (
    // TODO всрато но долго и не понятно переделывать
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {Platform.IOS && radios}
      <FormLayoutGroup>
        {answers.map(answer => (
          <FormItem removable key={answer.id}>
            <Input placeholder="42" />
          </FormItem>
        ))}
      </FormLayoutGroup>
      {(!Platform.IOS) && radios}
    </div>
  );
}

function VoteQuiz({ isQuiz }) {
  const [answers, setAnswers] = useState([
    { id: 1, text: '42' },
    { id: 2, text: '42' },
    { id: 4, text: '42' },
    { id: 3, text: '42' },
  ]);

  return (
    <Base>
      <FormItem top="Ваши ответы">
        <Answers answers={answers} isQuiz={isQuiz} />
      </FormItem>
      <FlexDiv style={{ justifyContent: 'center', marginBlock: 8 }}><Button before={<Icon16Add />}>Добавить варианты</Button></FlexDiv>
      <FlexDiv style={{ justifyContent: 'start' }}><Checkbox>Множественный выбор</Checkbox></FlexDiv>
    </Base>
  );
}

export default VoteQuiz;
