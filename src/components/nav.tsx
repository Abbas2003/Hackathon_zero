import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="border-b ">
        <div className="flex h-16 items-center px-5 container mx-auto">
          <Image
            src={"/logo.png"}
            alt={"logo"}
            height={40}
            width={40}
            className="text-gray-800"
          />
          <h2 className="text-3xl font-bold tracking-tight">PicToria</h2>
          <div className="ml-auto flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
