import Repos from "../Components/Repos/Repos";
import Search from "../Components/Search/Search";
import Stats from "../Components/Stats/Stats";
import User from "../Components/User/User";
import { Container, Loading } from "./Dashboard.style";
import { useGithubContext } from "../context/github_context";

const DashBoard = () => {
  const { state } = useGithubContext();
  return (
    <>
      {state.loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <Container>
          <div>
            <User />
          </div>
          <div>
            <Search />
            <Stats />
            <Repos />
          </div>
        </Container>
      )}
    </>
  );
};

export default DashBoard;
