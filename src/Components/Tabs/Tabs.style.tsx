import styled from "styled-components";

export const Select = styled.select`
  background: black;
  color: white;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 1rem;
  cursor: pointer;
  width: 90%;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    background: white;
    color: black;
  }
`;
export const Container = styled.div`
  height: 500px;
  overflow: scroll;
`;
