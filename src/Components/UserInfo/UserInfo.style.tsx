import styled from "styled-components";

export const Container = styled.div`
  border-radius: 50px;
  background: #fafafa;
  margin: 1rem 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const UserInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
  border-radius: 50px;
  background: #fafafa;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 25rem;
  object-position: center;
  border-radius: 50px;
  padding: 0.25rem;
  border: 1px solid #eaeaea;
  transition: all 0.3s ease-in-out;
`;

export const Link = styled.a`
  text-decoration: none;
  background-color: black;
  padding: 1rem;
  border-radius: 5px;
  width: 90%;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  &:hover {
    color: black;
    background: white;
  }
`;
