import styled from "styled-components";

export default styled.input`
  padding: 10px;
  background-color: ${({ theme }) => theme.color.quarternary};
  border: 1px solid ${({ theme }) => theme.color.secondary};

  @media (max-width: 767px) {
    text-align: center;
  }
`;
