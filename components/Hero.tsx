import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";

export function Hero() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-6 md:py-12 lg:py-16 xl:py-24 bg-gradient-to-b from-white to-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                    Ace Your Next Interview with PrepBuddy
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Prepare for your dream job with our AI-powered interview
                    practice and personalized feedback.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/chat"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    prefetch={false}
                  >
                    Try PrepBuddy
                  </Link>
                </div>
              </div>
              <img
                src="/person_with_laptop.webp"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-200 px-4 py-2 text-sm">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Prepare for Your Dream Job with PrepBuddy
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl lg:text-base xl:text-xl">
                  Our AI-powered interview practice, personalized feedback, and
                  comprehensive practice sessions will help you ace your next
                  interview.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-6">
                <ul className="grid gap-8">
                  <li>
                    <div className="grid gap-2">
                      <h3 className="text-xl font-bold">
                        AI-Powered Questions
                      </h3>
                      <p className="text-gray-600">
                        Get access to a vast library of AI-generated interview
                        questions tailored to your role and experience.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-2">
                      <h3 className="text-xl font-bold">
                        Personalized Feedback
                      </h3>
                      <p className="text-gray-600">
                        Receive detailed feedback on your responses, including
                        areas for improvement and tips to enhance your
                        performance.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-2">
                      <h3 className="text-xl font-bold">Practice Sessions</h3>
                      <p className="text-gray-600">
                        Engage in realistic practice sessions to build your
                        confidence and hone your interview skills.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/person_practicing_interview.webp"
                width="550"
                height="310"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
