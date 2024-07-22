import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";

const UserMenu = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="mr-5 rounded-md bg-white">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className=" cursor-pointer font-medium text-red-500 hover:text-red-600">
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserMenu;
