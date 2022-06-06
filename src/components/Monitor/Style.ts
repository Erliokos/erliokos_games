import styled from 'styled-components';

export const Monitor = styled.div`
  width: 200px;
  height: 200px;
  color: rgb(70, 70, 70);
  font-size: 0.6rem;
  letter-spacing: 2px;
  border-radius: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  background-color: lightsteelblue;
  margin: 20px;

`
