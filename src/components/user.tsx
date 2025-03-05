"use server";
interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  type: string;
  site_admin: boolean;
}

interface License {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
}

interface GitHubRepository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: GitHubUser;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  license: License | null;
  visibility: string;
  default_branch: string;
  topics: string[];
}


export async function User() {
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
