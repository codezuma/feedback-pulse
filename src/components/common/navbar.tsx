import { cn } from "@/lib/utils";
import Logo from "./logo";
import Link from "next/link";
import { Button } from "../ui/button";

const navItems: any[] = [];

const Navbar = ({ className }: PropsWithClassName) => {
  return (
    <nav
      className={cn(
        "w-full z-20 absolute border-b flex justify-center   box-border",
        className
      )}
    >
      <div className="px-10   top-0 w-full py-5   container-main flex items-center justify-start">
        <Link href={'/'}>
        <Logo />
        </Link>

        <div className="ml-auto mx-10 space-x-5">
          {navItems.map((item) => (
            <Link href={item.href} key={item.name}>
              <Button className="text-md" variant={"link"}>
                {item.name}
              </Button>
            </Link>
          ))}
        </div>

        <div className="space-x-4">
          <Button variant={"outline"} className="text-md">
            Log In
          </Button>
          <Button variant={"secondary"} className="text-md">
            Sign up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
