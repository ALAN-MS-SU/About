import { GitHubRepository, Tag } from "../Github/Repository";

export abstract class Project {
  public Repository: GitHubRepository;
  public static USER: string = process.env.USER as string;
  public static NAME: string = process.env.PROJECT_NAME as string;
  constructor(Repository: GitHubRepository) {
    this.Repository = Repository;
  }
  public static async GetTag(Name: string): Promise<Tag> {
    const Tags: Tag[] = await fetch(
      `https://api.github.com/repos/${Project.USER}/${Name}/tags`
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
    const Response: GitHubRepository[] = await fetch(
      `https://api.github.com/users/${Project.USER}/repos`,
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
      if (Item.name != Item.owner.login && Item.name != Project.NAME)
        return Item;
    });
    return Repos;
  }
}
