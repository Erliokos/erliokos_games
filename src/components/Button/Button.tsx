import * as Styled from './Style'
import settervalues from '../../store/setterValues'

type Props = {
  label: string;
  targetvalue: string;
}

export const Button = ({label, targetvalue}: Props) => {
  return (
    <Styled.Button onClick={()=>{settervalues.setValue(targetvalue)}}>
      {label}
    </Styled.Button>
  )
}
