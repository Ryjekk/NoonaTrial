import styled from "styled-components";

export const ModalStyle = styled('div')`
  background-color: #eee;
  width: 300px;
  min-height: 234px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  padding: 24px 36px;
  
  &:focus {
    outline: none;
  }
  
  form {
   display: flex;
   flex-direction: column;
  }
`;

export const ButtonBox = styled('div')`
  padding-top: 36px;
  display: flex;
  justify-content: space-between;
`;
