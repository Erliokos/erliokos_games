import React from 'react'
import { ArabicGame } from '../ArabicGame/ArabicGame'
import { Button } from '../Button/Button'
import { Canvas } from '../Canvas/Canvas'
import { ButtonGroup } from '../Header/Style'
import { Monitor } from '../Monitor/Monitor'
import { Pixi } from '../Pixi/Pixi'
import * as Styled from './Style'


export const Body = () => {
  
  return (
    <Styled.Body>
        <Button label={'Что то делать'}  targetvalue={'25px'}/>
        <Pixi/>
        <Button label={'Что то делать'}  targetvalue={'25px'}/>
    </Styled.Body>
  )
}
