import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1rem;
  width: 90%;
  margin: 0 auto;
  margin-right: 1rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
  width: 10rem;
  color: #fff;
  background-color: #333;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
`;
