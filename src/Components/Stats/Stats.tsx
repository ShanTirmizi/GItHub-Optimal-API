import { useGithubContext } from "../../context/github_context.js";
import { Container, Info } from "./Stats.style";

const Stats: React.FC = () => {
  const { state } = useGithubContext();
  const { githubFollowers, githubFollowing, githubRepos } = state;

  return (
    <>
      <Container>
        <Info>
          <span>Followers</span>
          <span>{githubFollowers.length}</span>
        </Info>
        <Info>
          <span>Following</span>
          <span>{githubFollowing.length}</span>
        </Info>
        <Info>
          <span>Repos</span>
          <span>{githubRepos.length}</span>
        </Info>
      </Container>
    </>
  );
};

export default Stats;
