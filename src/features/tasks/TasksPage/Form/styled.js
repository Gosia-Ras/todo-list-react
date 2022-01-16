import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.secondary};
  padding: 10px;
  transition: background 1s, transform 1s;
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.button.primaryHover};
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 10px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 10px;
  background-color: ${({ theme }) => theme.color.quarternay};
  border: 1px solid rgb(220, 220, 220);
`;
