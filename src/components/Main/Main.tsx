import React from 'react'
import { Body } from '../Body/Body';
import { Header } from '../Header/Header';
import { TopMenu } from '../TopMenu/TopMenu';
import * as Styled from './Style';

export const Main = () => {
  return (
    <Styled.Main>
      <TopMenu/>
      <Body/>
    </Styled.Main>
  )
}

