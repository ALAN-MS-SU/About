export function Button({
  Text,
  Type,
  Width,
  Click,
}: {
  Type: "button" | "submit" | "reset" | undefined;
  Text: string;
  Width: string;
  Click?: () => void;
}) {
  return (
    <button
      style={{ width: Width }}
      className=" transition-colors bg-transparent ease-out cursor-pointer text-[var(--Text)] rounded-md w- h-[40px] border-solid border-2 border-[var(--Text)] hover:text-[var(--Text-Hover)] hover:bg-[var(--Text)]"
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
      className=" cursor-pointer "
      onClick={Click ? Click : undefined}
      type={Type}
    >
      {children}
    </button>
  );
}
