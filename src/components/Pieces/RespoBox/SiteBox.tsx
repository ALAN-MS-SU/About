"use client";
import { Site } from "../../../Models";
import Image from "next/image";
import TS from "@/assets/images/Languages/TS.png";
import CS from "@/assets/images/Languages/CS.png";
import { Button, IconButton } from "../../";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
export function SiteBox({ Site }: { Site: Site }) {
 // const { NEXT_PUBLIC_IMAGES } = process.env;
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(90deg,var(--Secound-Light),var(--First-Light))",
      }}
      className=" flex flex-col justify-between items-center p-4 w-[600px] h-[475px] border-solid border-[var(--Text)] border-2 rounded-lg"
    >
      <h2 className="text-lg text-[var(--Text)] w-full text-center border-0 border-b-2 border-solid">
        WebSite
      </h2>
      <h3 className="text-lg text-[var(--Text)] text-center w-full">
        Name: {Site.Repository.name}
      </h3>
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGES}/${Site.Repository.name}.png`}
        alt="View app"
        width={500}
        height={500}
      />
      <p className="text-md text-[var(--Text)] text-center h-[120px]">
        Description: {Site.Repository.description}
      </p>

      <Link
        className="flex flex-col items-center"
        target="_black"
        href={Site.Deploy}
      >
        <Button Text="Visit WebSite" Type="button" Width="150px" />
      </Link>
      <div className="flex flex-row justify-between w-full items-center">
        <IconButton Type="button">
          <Link target="_black" href={Site.Repository.html_url}>
            <BsGithub className="text-6xl transition-colors rounded-full text-[var(--Text)] hover:text-[var(--First)]" />
          </Link>
        </IconButton>
        {Site.Repository.language == "TypeScript" ? (
          <Image
            className="max-h-[50px] max-w-[50px]"
            src={TS}
            alt="TS icon"
            height={50}
            width={50}
          />
        ) : (
          <Image
            className="max-h-[50px] max-w-[50px]"
            src={CS}
            alt="C# icon"
            height={50}
            width={50}
          />
        )}
      </div>
    </div>
  );
}
