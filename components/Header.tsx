import Link from "next/link";
import { JSX, SVGProps } from "react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 lg:px-6 h-16 flex items-center bg-white shadow-md">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <LaptopIcon className="h-8 w-8" />
        <span className="sr-only">PrepBuddy</span>
        <span className="font-bold ml-2 text-2xl">Prep</span>
        <span className="font-bold text-2xl text-sky-500">Buddy</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a
          href="#features"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Features
        </a>
        <a
          href="#contact"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

function LaptopIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  );
}
