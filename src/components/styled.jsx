import styled from 'styled-components';
import { Button, PanelHeader } from '@vkontakte/vkui';

export const CustomHeader = styled(PanelHeader)`
  & span {font-size: 16px !important}
  color: blue;
`;

export const ZButton = styled(Button)`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const CusHeader = styled.h1`
  width:20px;
  background-color:rgb(255, 255, 128,0.4);;
`;