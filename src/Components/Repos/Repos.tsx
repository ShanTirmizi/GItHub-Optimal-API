import { useGithubContext } from "../../context/github_context.js";
import BarChart from "../Chart/BarChart";
import ColumnChart from "../Chart/ColumnChart";
import PieChart from "../Chart/PieChart";
import DonutChart from "../Chart/DonutChart";
import { Container } from "./Repos.style";

interface IRepo {
  stargazers_count: number;
  language: string;
  forks: number;
  stars: number;
  name: string;
}
const Repos: React.FC = () => {
  const { state } = useGithubContext();

  let languages = state.githubRepos.reduce((acc: any, repo: IRepo) => {
    const { language } = repo;
    if (!language) return acc;
    if (acc[language]) {
      acc[language] += 1;
    } else {
      acc[language] = 1;
    }
    return acc;
  }, {});

  let starsByLanguage = state.githubRepos.reduce((acc: any, repo: IRepo) => {
    const { stargazers_count, language } = repo;
    if (stargazers_count === 0 || !language) return acc;
    if (acc[language]) {
      acc[language] += stargazers_count;
    } else {
      acc[language] = stargazers_count;
    }
    return acc;
  }, {});

  let { stars, forks } = state.githubRepos.reduce(
    (acc: any, repo: IRepo) => {
      const { stargazers_count, name, forks } = repo;

      acc.stars[stargazers_count] = [name, stargazers_count];
      acc.forks[forks] = [name, forks];
      acc.stars = Object.values(acc.stars).splice(-5).reverse();
      acc.forks = Object.values(acc.forks).splice(-5).reverse();
      acc.stars.unshift(["Repo", "Stars"]);
      acc.forks.unshift(["Repo", "Froks"]);
      return acc;
    },
    {
      stars: {},
      forks: {},
    }
  );

  let chartPopularLanguage: any = [["Task", "Hours per Day"]];
  for (let [key, value] of Object.entries(languages)) {
    chartPopularLanguage.push([key, value]);
  }
  let chartStarsArr: any = [["Task", "Hours per Day"]];
  for (let [key, value] of Object.entries(starsByLanguage)) {
    chartStarsArr.push([key, value]);
  }
  return (
    <>
      <Container>
        <PieChart chartPopularLanguage={chartPopularLanguage} />
        <DonutChart chartStarsArr={chartStarsArr} />
        <ColumnChart stars={stars} />
        <BarChart forks={forks} />
      </Container>
    </>
  );
};

export default Repos;
