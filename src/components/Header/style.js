import styled from "styled-components";

export const Header_ = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--roboto);
  font-size: 2.25rem;
  font-weight: bold;
  color: #ffffff;
  padding-top: 3.7rem;
  .link {
    transition: 0.3s;
  }
  .link:hover {
    color: #e39dee;
  }

  .link + .link {
    margin-left: 4.5rem;
  }
`;
