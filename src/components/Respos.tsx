"use server";
import { GitHubRepository } from "../models";
export async function Respos() {
     const respos:GitHubRepository[] = await fetch("https://api.github.com/users/ALAN-MS-SU/repos", {
          method: "GET",
        })
          .then(async(data) => {
            if (data.ok) return await data.json();
            return console.log(data.status);
          })
          .catch((err) => {
            console.log(err);
          })

  return <div>{respos.map((respo: GitHubRepository) => {
   if(respo.name != respo.owner.login)
    return (
      <div key={respo.id}>
        <h3>Nome: {respo.name}</h3>
        
      </div>
    );
  }) }</div>;
}
