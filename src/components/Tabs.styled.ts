import styled from "styled-components";

export const StyledTabBar = styled.div`
  background-color: #000;
`;

export const StyledTabButton = styled.div<{ active: boolean }>`
  ${({ active }) =>
    active
      ? `border-bottom: 4px solid white;`
      : `  &:hover {
    opacity: 0.5;
  }`}
  padding: 0.65rem 0;
  margin: auto 1rem;
  box-sizing: border-box;
  cursor: pointer;
  color: white;
`;
