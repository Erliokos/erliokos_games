import React from 'react'
import * as Styled from './Style'

export function TopMenu() {
  return (
    <Styled.Top colorBg='#434342' justify='right'>
    <Styled.Button>главная</Styled.Button>
    <Styled.Button>рейтинг</Styled.Button>
    <Styled.Button>регистрация</Styled.Button>
    <Styled.Button>войти</Styled.Button>
    </Styled.Top>
  )
}
