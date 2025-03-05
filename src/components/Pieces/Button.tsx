import { IconType } from "react-icons";

export function Button({
  Text,
  Type,
  Click,
}: {
  Type: "button" | "submit" | "reset" | undefined;
  Text: string;
  Click?: () => void;
}) {
  return (
    <button
      className=" cursor-pointer w-[100px] h-[40px] border-solid border-2 border-[var(--Text)]"
      onClick={Click ? Click : undefined}
      type={Type}
    >
      {Text}
    </button>
  );
}
export function IconButton({
  children,
  Type,
  Click,
}: {
  children: React.ReactNode;
  Type: "button" | "submit" | "reset" | undefined;
  Click?: () => void;
}) {
  return (
    <button
      className=" cursor-pointer"
      onClick={Click ? Click : undefined}
      type={Type}
    >
      {children}
    </button>
  );
}
