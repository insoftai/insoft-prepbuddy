"use client";

import React, { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircleIcon, UserIcon } from "lucide-react";

export default function Page() {
  const [messages, setMessages] = useState<string[]>([]);
  return (
    <main className="flex flex-col items-center py-10">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get Ready&nbsp;
          <code className="font-mono font-bold">For your future Job :D</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Langflow Legends
          </a>
        </div>
      </div>
      <div className="mt-5">
        <div className="w-[60vw] h-[70vh] border rounded-md shadow-md">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel className="p-2 flex flex-col justify-between">
              <Button variant="outline">New Interview</Button>

              <div className="max-h-10">
                <Button className="w-full" variant="outline">
                  <UserIcon />
                  <span>Create Your Profile</span>
                </Button>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel className="flex flex-col justify-between p-2 gap-y-2">
              <div className="flex flex-col flex-grow justify-center items-center">
                <div className="border rounded-md p-4">
                  Please upload your resume or send job description here. Or you
                  can start from asking any question.
                </div>
              </div>

              <div className="flex w-full items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <PlusCircleIcon />
                </Button>
                <Input type="text" placeholder="Your question" />
                <Button type="submit">Ask</Button>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </main>
  );
}
