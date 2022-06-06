import * as Styled from './Style'
import settervalues from '../../store/setterValues'
import { observer } from 'mobx-react-lite'

export const Monitor = observer (() => {
  

  return (
    <Styled.Monitor color={settervalues.value}>
      {settervalues.value}
    </Styled.Monitor>
  )
})
