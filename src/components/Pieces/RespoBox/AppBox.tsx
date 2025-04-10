"use client";
import { App } from "../../../Models";
import Image from "next/image";
import TS from "@/assets/images/Languages/TS.png";
import CS from "@/assets/images/Languages/CS.png";
import { Button, IconButton } from "../..";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
export function AppBox({ App }: { App: App }) {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(90deg,var(--Secound-Light),var(--First-Light))",
      }}
      className=" flex flex-col justify-between items-center p-4 w-[600px] h-[550px] border-solid border-[var(--Text)] border-2 rounded-lg"
    >
      <h2 className="text-lg text-[var(--Text)] text-center w-full border-0 border-b-2 border-solid">
        App Mobile
      </h2>
      <h3 className="text-lg text-[var(--Text)] text-center">
        Name: {App.Repository.name}
      </h3>
      <Image
        className=" max-h-[275px] border-solid border-[var(--Text)] border-6 rounded-lg"
        src={`${process.env.NEXT_PUBLIC_IMAGES}/${App.Repository.name}${process.env.NEXT_PUBLIC_DEFAULT_ETS}`}
        alt="App Icon"
        width={275}
        height={275}
      />
      <p className="text-md text-[var(--Text)] text-center h-[100px] w-full">
        Description: {App.Repository.description}
      </p>

      <Link
        className="flex flex-col items-center"
        href={App.Release.assets[0].browser_download_url}
      >
        <Button Text="Dowload APK" Type="button" Width="150px" />
      </Link>
      <div className="flex flex-row justify-between w-full items-center">
        <IconButton Type="button">
          <Link target="_black" href={App.Repository.html_url}>
            <BsGithub className="text-6xl transition-colors rounded-full text-[var(--Text)] hover:text-[var(--First)]" />
          </Link>
        </IconButton>
        {App.Repository.language == "TypeScript" ? (
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
