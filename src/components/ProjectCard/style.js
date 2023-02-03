import styled from "styled-components";

export const ProjectCard_ = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #333333;
  color: #ffffff;
  padding: 1rem;
  width: 25rem;
  height: 36rem;
  border-radius: 10px;
  h4 {
    font-family: var(--roboto);
    margin-top: 1.5rem;
  }
  p {
    font-family: var(--inter);
  }
  button {
    background: linear-gradient(90deg, #d676de 0%, rgba(32, 32, 32, 0.8) 100%);
    border-radius: 100%;
    border: 0;
    margin-right: 1rem;
  }

  div {
    margin-top: 4.25rem;
    p {
      margin-bottom: 1rem;
    }
  }
`;
