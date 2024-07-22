"use client";
import Logo from "@/components/common/logo";
import { Sidebar } from "@/components/common/sidebar";
import UserMenu from "@/components/common/user-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Camera, PlusCircle, ArrowUpCircle, Settings, MessageCircleQuestion } from "lucide-react"; // Assuming you're using lucide-react for icons
import { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative">
      <aside className="absolute z-10 left-2-0  border-r h-screen w-72">
        <Logo className="mx-auto  py-6  px-4" />
        <Sidebar
          links={[
            {
              title: "Snapshots",
              label: "",
              link: "/",
              icon: MessageCircleQuestion,
              variant: "default",
            },
            {
              title: "Create Snapshot",
              label: "",
              link: "/create-snapshot",
              icon: PlusCircle,
              variant: "ghost",
            },
            {
              title: "Raised Snapshot",
              label: "",
              link: "/review",
              icon: ArrowUpCircle,
              variant: "ghost",
            },
            {
              title: "Settings",
              label: "",
              icon: Settings,
              variant: "ghost",
            },
          ]}
        />
      </aside>
      <ScrollArea className="h-screen">
        <div className="hidden flex-col md:flex">
          <section className="ml-72 px-28 pt-12 flex justify-center">
            {children}
          </section>
        </div>
      </ScrollArea>
    </div>
  );
};

export default DashboardLayout;
