import styled from 'styled-components';

export const Pre = styled.pre`
  font-size: 1em;
  width: 100%;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
  padding: 10px
`;