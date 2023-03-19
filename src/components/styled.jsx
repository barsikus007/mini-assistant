import styled from 'styled-components';

import { PanelHeader } from '@vkontakte/vkui';

export const CustomHeader = styled(PanelHeader)`
  & span {font-size: 16px !important}
  color: blue;
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  min-width: 100%;
`;

export const CusHeader = styled.h1`
  width:20px;
  background-color:rgb(255, 255, 128, 0.4);
`;
