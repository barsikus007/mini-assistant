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

export const Presentation = styled.div`
  align-items: center;
  margin: 0 auto;
  text-align: center;
  height: 15px;
  gap: 12px;
  margin-bottom: 25px;
`;

export const AddSlide = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const BannerWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
