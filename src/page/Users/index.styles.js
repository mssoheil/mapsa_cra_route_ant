import styled, { css } from "styled-components";
import MyComponent from "./components";

export const StyledWrapper = styled.div`
  background: ${(props) => props.$myBackground};
`;

export const StyledList = styled(MyComponent)`
  color: red;
  margin-top: 20px;

  ${(props) =>
    props.isActive
      ? css`
          font-weight: bold;
          color: #fff;
        `
      : null};
`;
