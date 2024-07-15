import { BotIcon } from "lucide-react";

type MessageProps = {
  message: string;
  owner: "user" | "bot";
};
export const Message = ({ message, owner }: MessageProps) => {
  return (
    <div className="flex gap-x-2">
      {owner === "user" ? <></> : <BotIcon />}

      <p>{message}</p>
    </div>
  );
};
