import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem 2rem;
  --tw-text-opacity: 1;
  color: rgba(0, 0, 0, var(--tw-text-opacity));
  &:hover {
    background-color: #00a89a;
    border-color: #00a89a;
  }
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.75rem;
  --tw-bg-opacity: 1;
  background-color: rgba(0, 209, 193, var(--tw-bg-opacity));
  border-color: rgba(0, 209, 193, var(--tw-bg-opacity));
  border-width: 2px;
  border-radius: 0.75rem;
`;
