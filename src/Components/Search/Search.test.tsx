import { render } from "@testing-library/react";
import Search from "./Search";
import { GithubProvider } from "../../context/github_context";
import "@testing-library/jest-dom/extend-expect";

it("Search input is empty when the component is rendered", () => {
  const { getByPlaceholderText } = render(
    <GithubProvider>
      <Search />
    </GithubProvider>
  );
  const searchInput = getByPlaceholderText("Search Github User");
  expect(searchInput).toHaveValue("");
});
