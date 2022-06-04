import styled from "styled-components";

export const Button = styled.button`
  background: black;
  color: white;
  border: none;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 1rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: white;
    color: black;
  }
`;

export const FormContainer = styled.div`
  width: 90%;
  margin: 20px;
`;
export const Form = styled.form`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  padding: 1rem;
  border-radius: 5px;
  background: #fafafa;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border: 1px solid #eaeaea;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  &:hover {
    border: 1px solid #eaeaea;
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 1rem;
  margin: 0;
  padding: 0;
  text-align: center;
  margin-top: 1rem;
`;
