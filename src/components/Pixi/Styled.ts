import styled from "styled-components";

export const MainWindow = styled.div<{width: number, height: number}>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: darkgray;
  border-radius: 32px;
`
