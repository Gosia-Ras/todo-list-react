import styled from "styled-components";

export const Button = styled.button`
  background-color: teal;
  color: rgb(230, 230, 230);
  padding: 10px;
  transition: background 1s, transform 1s;
  border: none;

  &:hover {
    background-color: hsl(180, 100%, 30%);
    transform: scale(1.1);
    cursor: pointer
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
  background-color: white;
  border: 1px solid rgb(220, 220, 220);
`;
