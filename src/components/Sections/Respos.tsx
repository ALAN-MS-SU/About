"use server";
import { Tag, Release, Project, App, Site } from "../../Models";
import { ReposBox } from "../";

export async function Respos() {
  const Repos = await Project.GetRepositories();
  return (
    <section
      id="repos"
      style={{
        backgroundImage: "linear-gradient(90deg,var(--First),var(--Secound))",
      }}
      className=" pt-20 pb-20 grid grid-cols-3 bg-slate-white justify-items-center w-full gap-y-20"
    >
      {Repos.map(async (repos, index) => {
        const Type: Tag = await Project.GetTag(repos.name);
        if (Type) {
          if (Type.name == "APK") {
            const Release: Release = await App.GetBuild(repos.name);
            const Item: App = new App(repos, Release);

            return <ReposBox key={index} Item={Item} />;
          }
          if (Type.name == "WEB-SITE") {
            const deploy: string = await Site.GetBuild(repos.name);
            const Item: Site = new Site(repos, deploy);
            return <ReposBox key={index} Item={Item} />;
          }
        }
      })}
    </section>
  );
}
