"use server";
import { GitHubUser } from "@/models";
import JS from "@/assets/images/JS.png";
import CS from "@/assets/images/CS.png";
import Image from "next/image";
export async function User() {
  const { USER } = process.env;
  const User: GitHubUser = await fetch(`https://api.github.com/users/${USER}`, {
    method: "GET",
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .catch((err) => console.error(err));

  return (
    <header
      style={{
        backgroundImage: "linear-gradient(90deg,var(--Secound),var(--First))",
      }}
      className="flex flex-row items-center justify-between w-full gap-5 p-5 border-0 sticky top-0 border-b-2 border-solid border-[var(--Text)]"
    >
      <div className="flex flex-col items-center justify-center">
        <Image
          className=" rounded-full border-solid border-[var(--Text)] border-2"
          src={User.avatar_url}
          width={150}
          height={150}
          alt={"Foto"}
        />
        <h1 className="text-2xl font-bold text-[var(--Text)]">Alan Martins</h1>
      </div>
      <h1
        style={{
          backgroundImage: "linear-gradient(90deg,var(--First-Light),var(--Secound-Light))",
        }}
        className="p-4 border-solid border-[var(--Text)] rounded-lg text-4xl text-[var(--Text)]"
      >
        Back-End Developer
      </h1>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl text-[var(--Text)]">My languages</h1>
        <div className="flex flex-row items-center justify-center gap-5">
          <Image src={JS} alt="JS icon" height={100} width={100} />
          <Image src={CS} alt="C# icon" height={100} width={100} />
        </div>
      </div>
    </header>
  );
}
