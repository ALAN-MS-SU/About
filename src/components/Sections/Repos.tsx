"use server";
import { App, Project, Site } from "../../Models";
import { Slider } from "../";
export async function Repos() {
  const Repositories = await Project.GetRepositories();
  const Projects: (App | Site)[] = await Project.GetProjects(Repositories).then(
    (data) => data
  );
  return (
    <section
      id="Repos"
      style={{
        backgroundImage: "linear-gradient(90deg,var(--First),var(--Secound))",
      }}
      className=" pt-20 pb-20 flex bg-slate-white flex-col justify-items-center w-full gap-y-10"
    >
      <h1 className="text-3xl text-[var(--Text)] text-center">
        {"My projects"}
      </h1>
      <Slider SlidesJSON={JSON.stringify(Projects)} />
    </section>
  );
}
