"use client";

import { Textarea } from "@/components/ui/textarea";
import { useState, type ChangeEvent } from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Dot } from "lucide-react";

const Hero = () => {
  const [message, setMessage] = useState("");
  const maxChars = 500;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxChars) {
      setMessage(e.target.value);
    }
  };

  return (
    <section className="container hero py-6 grid grid-cols-1 gap-6">
      <div>
        <h1 className="text-4xl leading-tight font-bold">
          <span className="block text-teal-100">
            Get Expert Legal Consultants,
          </span>
          <span className="text-teal-500">
            <span className="block">Anytime,</span>
            <span className="block">Anywhere</span>
          </span>
        </h1>

        <p className="mt-6 text-teal-50">
          Connect with lawyers or legal consultants through our platform and get
          the legal help you need within the United Arab Emirates.
        </p>
      </div>

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
    </section>
  );
};

export default Hero;
