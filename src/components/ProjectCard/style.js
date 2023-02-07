import styled from "styled-components";

export const ProjectCard_ = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #333333;
  color: #ffffff;
  padding: 1rem;
  width: 20rem;
  height: 30rem;
  border-radius: 10px;
  margin-bottom: 5rem;
  h4 {
    font-size: 1.5rem;
    font-family: var(--roboto);
  }

  #projectImage {
    width: 100%;
    height: 14rem;
  }
  p {
    font-family: var(--inter);
  }
  img {
    width: 3.125rem;
    height: 3.125rem;
  }

  button {
    width: 3.5rem;
    height: 3.5rem;
    background: linear-gradient(90deg, #d676de 0%, rgba(32, 32, 32, 0.8) 100%);
    border-radius: 100%;
    border: 0;
    margin-left: 1rem;
  }
  div {
    margin-top: 2rem;
    p {
      margin-bottom: 1rem;
    }
  }
`;
