import { useState } from "react";
import { useGithubContext } from "../../context/github_context.js";
import Follow from "../Follow/Follow";
import { Select, Container } from "./Tabs.style";
const Tabs: React.FC = () => {
  const { state } = useGithubContext();
  const [tabToggle, setTabToggle] = useState<number>(1);

  const handleTabClick = (tab: number) => {
    setTabToggle(tab);
  };

  return (
    <>
      <div>
        <Select onChange={(e) => handleTabClick(Number(e.target.value))}>
          <option value={1}>Following</option>
          <option value={2}>Followers</option>
        </Select>
        <Container>
          {tabToggle === 1 ? (
            <Follow state={state.githubFollowing} />
          ) : (
            <Follow state={state.githubFollowers} />
          )}
        </Container>
      </div>
    </>
  );
};

export default Tabs;
