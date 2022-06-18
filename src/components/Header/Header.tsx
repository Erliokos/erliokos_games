import React from 'react'
import {Button} from '../Button/Button'
import Logo from './Logo'
import * as Styled from './Style'


export const Header = () => {

  return (
    <Styled.Header>
        <Styled.ButtonGroup>
          <Button label={'RADIUS: 25px'}  targetvalue={'25px'}/>
          <Button label={'RADIUS: 50px'}  targetvalue={'50px'}/>
          <Logo/>
          <Button label={'RADIUS: 75px'}  targetvalue={'75px'}/>
          <Button label={'RADIUS: 100px'}  targetvalue={'100px'}/>
        </Styled.ButtonGroup>
    </Styled.Header>
  )
}

