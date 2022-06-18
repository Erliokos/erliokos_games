import styled from "styled-components";


export const Top = styled.div<{
  colorBg?: string, 
  justify?: string,
  height?: string,
  align?: string,
  width?: string,
  textColor?: string,
}>`
  position: absolute;
  top: 5px;
  background-color: ${(props)=>props.colorBg ?? 'black'};
  display: flex;
  justify-content: ${(props)=>props.justify ?? 'space-around'};
  align-items: ${(props)=>props.align ?? 'center'};
  height: ${(props) => props.height ?? 30}px;
  width: ${(props) => props.width ?? 100}%;
  color: ${({textColor}) => textColor ?? 'red'};
`
export const Button = styled.div`
  display: flex;
  align-items: center;
  box-shadow: none;
  color: #FFCD00;
  height: 100%;
  padding: 0 10px;
  font-size: 0.5rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }

  &:active {
    color: white;
    font-size: 0.52rem;
  }
  
`
