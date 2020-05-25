import styled from 'styled-components';

export const Container = styled.div`
  height: ${(props) => props.active && '150px'};
`;
