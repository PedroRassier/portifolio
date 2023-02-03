import styled from "styled-components";

export const Header_ = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--roboto);
  font-size: 36px;
  font-weight: bold;
  color: #ffffff;
  padding-top: 3.7rem;
  .link + .link {
    margin-left: 4.5rem;
  }
`;