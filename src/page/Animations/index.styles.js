import { Button } from "antd";
import styled, { keyframes } from "styled-components";

const rotation = keyframes`
    0% {
        transform: rotate(0);
    }
    50% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(0);
    }
`;

export const StyledItem = styled(Button)`
  animation: ${rotation} 1.5s ease-in-out infinite;
`;

export const StyledSecondItem = styled(StyledItem)({
  background: "green",
});

export const StyledText = styled.div`
  color: #444;
  ${StyledSecondItem}:hover {
    background: red;
  }
`;
