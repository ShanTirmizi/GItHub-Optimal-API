import React from "react";
import { useGithubContext } from "../../context/github_context.js";
import { Button, Image, Container } from "./Follow.style";

interface IProps {
  state: {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
  }[];
}

const Follow: React.FC<IProps> = ({ state }) => {
  const { searchGithubUser } = useGithubContext();

  return (
    <>
      {state.length > 0 ? (
        state.map((follow) => {
          return (
            <Container key={follow.id}>
              <a href={follow.html_url} target="_black">
                <Image src={follow.avatar_url} alt="" />
              </a>
              <Button onClick={() => searchGithubUser(follow.login)}>
                {follow.login}
              </Button>
            </Container>
          );
        })
      ) : (
        <div>No Data Found</div>
      )}
    </>
  );
};

export default Follow;
