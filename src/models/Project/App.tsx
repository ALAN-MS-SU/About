import { GitHubRepository, Project, Release } from "..";

export class App extends Project {
  public Release: Release;
  constructor(App: GitHubRepository, Release: Release) {
    super(App);
    this.Release = Release;
  }
  public static async GetBuild(Name: string): Promise<Release> {
    const { USER } = process.env;
    const Releases: Release = (
      await fetch(`https://api.github.com/repos/${USER}/${Name}/releases`, {
        method: "GET",
        headers: {
          Authorization: process.env.GIT_TOKEN as string,
        },
      })
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
