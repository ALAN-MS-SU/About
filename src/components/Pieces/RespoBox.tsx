import { App, Site } from "../../Models";
import Image from "next/image";
import TS from "@/assets/images/TS.png";
import CS from "@/assets/images/CS.png";
import { IconButton } from "..";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
export function ReposBox({ Item }: { Item: App | Site }) {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(90deg,var(--Secound-Light),var(--First-Light))",
      }}
      className=" p-4 w-[370px] h-[220px] border-solid border-[var(--Text)] border-2 rounded-lg"
    >
      <h3 className="text-lg text-[var(--Text)] text-center">
        Nome: {Item.Repository.name}
      </h3>
      {Item.Repository.language == "TypeScript" ? (
        <Image src={TS} alt="TS icon" height={50} width={50} />
      ) : (
        <Image src={CS} alt="C# icon" height={50} width={50} />
      )}
      <p className="text-md text-[var(--Text)] text-center">
        {Item.Repository.description}
      </p>
      <IconButton Type="button">
        <Link target="_black" href={Item.Repository.html_url}>
          <AiFillGithub className="text-6xl  transition-colors rounded-full text-[var(--Text)] hover:text-[var(--First)]" />
        </Link>
      </IconButton>
    </div>
  );
}
