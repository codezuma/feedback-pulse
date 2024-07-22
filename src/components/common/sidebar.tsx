"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

interface SidebarProps {
  links: {
    title: string;
    label?: string;
    link?: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
  }[];
}

export function Sidebar({ links }: SidebarProps) {
  return (
    <div className="group flex flex-col gap-4  py-2 data-[collapsed=true]:py-2">
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.link??"#"}
            className={cn(
              buttonVariants({ variant: link.variant, size: "sm" }),
              link.variant === "default" &&
                "dark:bg-muted cursor-pointer  dark:text-white dark:hover:bg-muted dark:hover:text-white",
              "justify-start"
            )}
          >
            <link.icon className="mr-2 h-4 w-4" />
            {link.title}
            {link.label && (
              <span
                className={cn(
                  "ml-auto",
                  link.variant === "default" &&
                    "text-background dark:text-white"
                )}
              >
                {link.label}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}
