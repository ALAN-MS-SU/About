import { GitHubRepository, Project, WebSite } from "..";

export class Site extends Project {
  public Deploy: string;
  constructor(Site: GitHubRepository, Deploy: string) {
    super(Site);
    this.Deploy = Deploy;
  }
  public static async GetBuild(Name: string): Promise<string> {
    const { USER } = process.env;
    const WebSite: WebSite = await fetch(
      `https://api.github.com/repos/${USER}/${Name}`,
      {
        method: "GET",
        headers: {
          Authorization: process.env.GIT_TOKEN as string,
        },
      }
    )
      .then(async (data) => {
        if (data.ok) return await data.json();
      })
      .catch((err) => {
        console.log(err);
      });

    return WebSite.homepage as string;
  }
}
