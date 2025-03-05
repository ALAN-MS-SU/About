import { GitHubRepository, Project, Release } from "..";

export class App extends Project {
  public Release: Release;
  constructor(App: GitHubRepository, Release: Release) {
    super(App);
    this.Release = Release;
  }
  public static async GetBuild(Name: string): Promise<Release> {
    const Releases: Release = (
      await fetch(
        `https://api.github.com/repos/${Project.USER}/${Name}/releases`,
        { method: "GET" }
      )
        .then(async (data) => {
          if (data.ok) return await data.json();
        })
        .catch((err) => {
          console.log(err);
        })
    )[0];
    return Releases;
  }
}
