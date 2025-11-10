"use client";

import { Dot } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { type ChangeEvent, useState } from "react";

const MessageBox = () => {
  const [message, setMessage] = useState("");
  const maxChars = 500;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxChars) {
      setMessage(e.target.value);
    }
  };

  return (
    <div>
      <Textarea
        placeholder="Type your message here."
        className="bg-teal-50 focus-visible:ring-teal-700"
        value={message}
        onChange={handleChange}
      />
      <p
        className={`mt-2 text-right ${
          message.length >= maxChars ? "text-red-500" : "text-teal-50"
        }`}
      >
        {maxChars - message.length} characters remaining
      </p>

      <div className="mt-4">
        <Button className="bg-amber-600 w-full" size="lg">
          Get Free Advice
        </Button>
      </div>

      <div className="mt-6 flex space-x-3 items-center justify-center">
        <div className="flex items-center -space-x-2.5">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="object-cover"
            />
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="object-cover"
            />
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="object-cover"
            />
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="object-cover"
            />
          </Avatar>
        </div>

        <Button className="bg-teal-950 rounded-full" size="sm">
          7+ Lawyers Online
          <span>
            <Dot strokeWidth={11} className="text-teal-500 animate-pulse" />
          </span>
        </Button>
      </div>
      <p className="text-center text-teal-100 font-bold mt-4">
        <span className="text-teal-500 text-xl">4700+ </span>Cases Resolved
      </p>
    </div>
  );
};

export default MessageBox;
