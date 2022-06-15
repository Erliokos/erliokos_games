import React from 'react'
import * as Style from './Styled'

type TProps = {
  width: string
  height: string
}

export  function Canvas({width, height}: TProps) {
  return (
    <Style.MainCanvas width={640} height={480}/>
  )
}

