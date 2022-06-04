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
  height: 50%;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: white;
    color: black;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 50px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border: 1px solid #eaeaea;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
`;
