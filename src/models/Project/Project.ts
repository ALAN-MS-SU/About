import { App, Site } from "..";
import { GitHubRepository, Tag, Release } from "..";

export abstract class Project {
  public Repository: GitHubRepository;
  constructor(Repository: GitHubRepository) {
    this.Repository = Repository;
  }
  public static async GetTag(Name: string): Promise<Tag> {
    const { USER } = process.env;
    const Tags: Tag[] = await fetch(
      `https://api.github.com/repos/${USER}/${Name}/tags`
    )
      .then(async (data) => {
        if (data.ok) return await data.json();
      })
      .catch((err) => {
        console.log(err);
      });
    return Tags[0];
  }
  public static async GetRepositories(): Promise<GitHubRepository[]> {
    const { USER, PROJECT_NAME } = process.env;
    const Response: GitHubRepository[] = await fetch(
      `https://api.github.com/users/${USER}/repos`,
      {
        method: "GET",
      }
    )
      .then(async (data) => {
        if (data.ok) return await data.json();
      })
      .catch((err) => {
        console.log(err);
      });
    const Repos: GitHubRepository[] = Response.filter((Item) => {
      if (Item.name != Item.owner.login && Item.name != PROJECT_NAME)
        return Item;
    });
    return Repos;
  }
  public static async GetProjects(
    Repositories: GitHubRepository[]
  ): Promise<(App | Site)[]> {
    const { MOBILE_TAG, WEB_SITE_TAG } = process.env;
    const Projects: (App | Site)[] = [];
    await Promise.all(
      Repositories.map(async (repos) => {
        const Type: Tag = await Project.GetTag(repos.name);
        if (Type) {
          if (Type.name == MOBILE_TAG) {
            const Release: Release = await App.GetBuild(repos.name);
            const Item: App = new App(repos, Release);
            return Projects.push(Item);
          }
          if (Type.name == WEB_SITE_TAG) {
            const deploy: string = await Site.GetBuild(repos.name);
            const Item: Site = new Site(repos, deploy);
            return Projects.push(Item);
          }
        }
      })
    );
    return Projects;
  }
}
