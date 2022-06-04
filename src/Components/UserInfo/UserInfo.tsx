import { useGithubContext } from "../../context/github_context.js";
import { Container, UserInfoDiv, Image, Link } from "./UserInfo.style";
const UserInfo: React.FC = () => {
  const { state } = useGithubContext();
  const {
    avatar_url,
    html_url,
    login,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = state.githubUser;
  return (
    <>
      <Container>
        <Image src={avatar_url} alt="avatar" />
        <UserInfoDiv>
          <Link href={html_url} target="_blank" rel="noreferrer">
            {login}
          </Link>
          <p>Company: {company || "Company Not Found"}</p>
          <p>Location: {location || "Location Not Found"}</p>
          <p>Bio: {bio || "Bio Not Found"}</p>

          <p>
            Website:{" "}
            {(
              <a href={blog} target="_blank" rel="noreferrer">
                {blog}
              </a>
            ) || "Blog Not Found"}
          </p>
          <p>Twitter: {twitter_username || "Twitter Not Found"}</p>
        </UserInfoDiv>
      </Container>
    </>
  );
};

export default UserInfo;
