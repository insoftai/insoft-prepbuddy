import Link from "next/link";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 border-t bg-white"
    >
      <div className="container mx-auto grid items-center justify-center gap-6 px-4 text-center md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Get Started with PrepBuddy
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl lg:text-base xl:text-xl">
            Sign up today and start your journey to your dream job.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-4">
          <form className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-lg flex-1"
            />
            <Button type="submit">Try PrepBuddy</Button>
          </form>
          <p className="text-xs text-gray-600">
            Sign up to get started. No credit card required.{" "}
            <Link
              href="#"
              className="underline underline-offset-2"
              prefetch={false}
            >
              Terms &amp; Conditions
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
