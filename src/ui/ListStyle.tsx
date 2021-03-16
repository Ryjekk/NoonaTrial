import styled from "styled-components";

export const LiElement = styled('li')`
  display: flex;
  border-bottom: 1px solid #bcbcbc;
  justify-content: space-between;
  cursor: pointer;
  
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
