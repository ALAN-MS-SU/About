"use server";
import { Tag, Release, Project, App, Site } from "../../Models";
import { AppBox, SiteBox } from "../";

export async function Respos() {
  const Repos = await Project.GetRepositories();
  const { MOBILE_TAG, WEB_SITE_TAG } = process.env;
  return (
    <section
      id="repos"
      style={{
        backgroundImage: "linear-gradient(90deg,var(--First),var(--Secound))",
      }}
      className=" pt-20 pb-20 grid grid-cols-2 bg-slate-white justify-items-center w-full gap-y-20"
    >
      {Repos.map(async (repos, index) => {
        const Type: Tag = await Project.GetTag(repos.name);
        if (Type) {
          if (Type.name == (MOBILE_TAG as string)) {
            const Release: Release = await App.GetBuild(repos.name);
            const Item: App = new App(repos, Release);

            return <AppBox key={index} App={Item} />;
          }
          if (Type.name == (WEB_SITE_TAG as string)) {
            const deploy: string = await Site.GetBuild(repos.name);
            const Item: Site = new Site(repos, deploy);
            return <SiteBox key={index} Site={Item} />;
          }
        }
      })}
    </section>
  );
}
