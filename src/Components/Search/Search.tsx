import React, { useState } from "react";
import { useGithubContext } from "../../context/github_context.js";
import { Button, Form, Input, FormContainer, Error } from "./Search.style";

const Search: React.FC = () => {
  const [user, setUser] = useState<string>("");

  const { state, searchGithubUser } = useGithubContext();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchGithubUser(user);
    setUser("");
  };
  return (
    <>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Search Github User"
          />
          <Button type="submit">Search</Button>
        </Form>
        {state.error.status && <Error>Please search a valid user</Error>}
        {state.request === 0 && (
          <Error>You are out of requests. Please try again in an Hour</Error>
        )}
      </FormContainer>
    </>
  );
};

export default Search;
