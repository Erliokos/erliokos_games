import styled from 'styled-components';

export const Button = styled.button`
  margin: 0.5em;
  padding: 0.5em 0;
  width: 132px;
  height: 40px;
  outline: none;
  border: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  font-size: 0.6rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: #434342;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  border-radius: 2px;
  color: #FFCD00;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    box-shadow: none;
  }
`;
