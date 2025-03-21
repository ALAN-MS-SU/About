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
      className=" pt-20 pb-20 flex bg-slate-white flex-col justify-items-center w-full gap-y-20"
    >
      <h1 className="text-2xl font-bold text-[var(--Text)] text-center">
        {"Hello! "}
      </h1>
      <h2 className="text-2xl font-bold text-[var(--Text)] text-center">
        {"I\'m Alan"}
      </h2>
      <Slider SlidesJSON={JSON.stringify(Projects)} />
    </section>
  );
}
