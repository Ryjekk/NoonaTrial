import styled from "styled-components";

export const LiWrap = styled('div')`
  display: flex;
  position: relative;
  
  button {
    position: absolute;
    right: 0;
  }
`;

export const LiElement = styled('li')`
  display: flex;
  border-bottom: 1px solid #bcbcbc;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  
  p {
    padding-left: 12px;
  }
  
  :hover {
    background-color: white;
    box-shadow: 0px 27px 60px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
  }
`;

export const UlElement = styled('ul')`
  padding-top: 24px;
`;
