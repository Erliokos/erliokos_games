import React from 'react'
import { Body } from '../Body/Body';
import { Header } from '../Header/Header';
import * as Styled from './Style';

export const Main = () => {
  return (
    <Styled.Main>
      <Header/>
      <Body/>
    </Styled.Main>
  )
}

