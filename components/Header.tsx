"use client";

import { TextAlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "motion/react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNav = () => setNavOpen(!navOpen);

  const navLink = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "",
      title: "Find a Lawyer",
    },
    {
      href: "",
      title: "Practice Areas",
    },
    {
      href: "",
      title: "Legal Forum",
    },
    {
      href: "",
      title: "Law Firms",
    },
    {
      href: "",
      title: "Insights",
    },
    {
      href: "",
      title: "About",
    },
    {
      href: "",
      title: "Contact",
    },
  ];

  return (
    <header className="py-6">
      {/* mobile nav */}
      <div className="container">
        <div className="flex justify-between gap-3 items-center">
          <Link href={"/"}>
            <Image src="/images/logo.webp" alt="" width={175} height={175} />
          </Link>
          {navOpen ? (
            <X className="text-teal-700" size={28} onClick={handleNav} />
          ) : (
            <TextAlignJustify
              className="text-teal-700"
              size={28}
              onClick={handleNav}
            />
          )}
        </div>

        {navOpen && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="mt-8"
            >
              <nav className="font-medium">
                <ul className="flex flex-col gap-4">
                  {navLink.map((item, key) => (
                    <li key={key}>
                      <Link href={item.href}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-6 grid grid-cols-1 gap-2">
                <Button className="w-full bg-teal-700" size="lg" asChild>
                  <Link href={""}>For Lawyers</Link>
                </Button>

                <Button
                  className="w-full border-teal-700 text-teal-700"
                  variant="outline"
                  size="lg"
                  asChild
                >
                  <Link href={""}>Login</Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </header>
  );
};

export default Header;
