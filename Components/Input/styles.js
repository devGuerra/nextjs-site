import styled from 'styled-components';
import colors from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  /* height: 56px; */
  border-radius: 10px;
  width: 100%;
  margin: 10px 0;
  background-color: ${(props) => (props.bg ? props.bg : 'transparent')};
  border-color: ${(props) => (props.error ? colors.red : '#000')};
  border: 1px solid #ccc;
  /* justify-content: center; */
  /* align-items: center; */
`;

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  height: 50px;
  font-size: 16px;
  color: ${(props) => (props.error ? colors.red : colors.black)};
  background-color: transparent;
  border-color: transparent;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  width: 100%;
  font-size: 16px;
  color: ${(props) => (props.error ? colors.red : colors.black)};
  background-color: transparent;
  border-color: transparent;
`;

export const Text = styled.span`
  font-size: 14px;
  color: ${(props) => (props.error ? colors.red : '#000')};
  position: absolute;
  top: -10px;
  left: 10px;
  padding: 0 5px;
  background-color: ${(props) => (props.bg ? colors.chatBackground : '#fff')};
  z-index: 10;
`;
export const Error = styled.span`
  font-size: 18px;
  color: red;
  position: absolute;
  top: -10px;
  left: 10px;
  padding: 0 5px;
  font-size: 14px;
  background-color: ${(props) => (props.bg ? colors.chatBackground : '#fff')};
  z-index: 10;
`;
