import styled from "styled-components";

export const StyledContainer = styled.li`
  background: green;
  color: ${(props) => props.theme.listColor};
`;
