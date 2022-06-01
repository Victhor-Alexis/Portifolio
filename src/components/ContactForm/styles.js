import styled from "styled-components";

export const Container = styled.form`
  width: 27rem;
  height: 27rem;
  border-radius: 3rem;
  background-color: rgba(32, 32, 32, 0.6);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin-top: 1.3rem;
  
  h2 {
    color: white;
    font-size: 21px;
    margin-top: 2.5rem;
    margin-bottom: 0.75rem;
    height: 2rem;
  }

  input {
    height: 2.5rem;
    outline: none;
    padding: 1rem;
    width: 70%;
    margin: 0.4rem 0;

    :last-of-type {
      background-color: #00CDFF;
      cursor: pointer;
      color: white;
      border: none;
      padding: 0;
      font-size: 21px;
      font-weight: bold;
      transition: 0.4s;

      :hover {
        background-color: #3B8698;
      }
    }
  }

  textarea {
    resize: none;
    outline: none;
    padding: 1rem;
    width: 70%;
    height: 7rem;
    margin: 0.4rem 0;
  }
`;