"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { hideBodyScroll, showBodyScroll } from "@/utils/helper";
import Image from "next/image";
import classnames from "classnames";

let nav = [
  { link: "How it works", href: "#how-it-work" },
  { link: "Features", href: "#filled-with-feature" },
  { link: "Pricing", href: "#pricing-plan" },
];
export default function Navbar({ otherClasses }) {
  const navbarClasses = classnames(otherClasses, "px-6");

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen ? hideBodyScroll() : showBodyScroll();
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={navbarClasses} data-testid="navbar">
      <div className="fixed top-0 lg:top-8 left-0 right-0 z-50 bg-white shadow z-[1000] lg:max-w-1120 lg:rounded-full mx-auto px-8 py-6">
        <div className="flex justify-between items-center gap-x-6 w-full">
          <Image
            src="/png/site-logo.png"
            alt="Background Image"
            width={180}
            height={38}
            className="cursor-pointer"
          />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <div
            className={classnames(
              "fixed top-0 left-0 w-full h-full bg-black transition-transform duration-300 ease-in-out  lg:relative lg:translate-x-0 lg:flex lg:space-x-4 lg:bg-transparent lg:w-auto lg:h-auto",
              isOpen ? "translate-x-0" : "-translate-x-full",
            )}
          >
            <Image
              src="/png/site-logo-white.png"
              alt="Background Image"
              width={120}
              height={30}
              className="absolute top-6 md:top-5 left-8 text-white lg:hidden lg:w-auto h-auto w-36 h-7 sm:w-40 sm:h-8 cursor-pointer"
              onClick={closeMenu}
            />
            <button
              className="absolute top-6 right-8 text-white lg:hidden"
              onClick={closeMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col h-full justify-between items-center lg:flex-row px-6 py-12 lg:p-0">
              <div className="flex flex-col items-center justify-start h-full space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 pt-12 lg:pt-0">
                {nav.map(({ link, href }, index) => {
                  return (
                    <Link
                      key={index}
                      href={href}
                      className="text-white font-instrument-sans lg:text-black hover:text-primary duration-300"
                      onClick={closeMenu}
                    >
                      {link}
                    </Link>
                  );
                })}
              </div>
              <Link
                href=""
                className="lg:hidden text-white lg:block lg:text-black font-instrument-sans text-base font-normal"
                onClick={closeMenu}
              >
                Scan the Code to{" "}
                <span className="underline font-bold">Go Live!</span>
              </Link>
            </div>
          </div>
          <Link
            href=""
            className="group hidden lg:block text-black font-instrument-sans text-base font-normal"
          >
            Scan the Code to{" "}
            <span className="underline font-bold group-hover:text-primary duration-300">
              Go Live!
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
