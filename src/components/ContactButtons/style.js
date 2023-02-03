import styled from "styled-components";

export const ContactButtons_ = styled.div`
  display: flex;
  align-items: center;
  button {
    border: 0;
    font-family: var(--roboto);
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 13rem;
    height: 4.5rem;
    display: flex;
    align-items: center;
    border-radius: 10px;
  }
  #linkedinBtn {
    background-color: #d676de;
    color: #ffffff;
    transition: 0.4s;
  }
  #linkedinBtn:hover {
    background-color: #c440e5;
  }
  #githubBtn {
    margin-left: 1.3rem;
    background-color: #f8f8f8;
    color: #171717;
    transition: 0.4s;
    p {
      margin-left: 1rem;
    }
  }
  #githubBtn:hover {
    background-color: #b6b6b6;
  }
`;
