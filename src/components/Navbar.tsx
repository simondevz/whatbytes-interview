import Image from "next/image";
import logo from "@/assets/images/whatbytes_logo.png";
import profilePic from "@/assets/images/profile_pic.jpg";

export default function Navbar() {
  return (
    <nav className="flex min-w-screen w-full justify-between px-4 py-6 border-b border-text/15">
      <div className="flex my-auto">
        <Image src={logo} className="h-10 w-52 object-fit " alt="Whatbytes" />
      </div>
      <div className="flex gap-2 border-2 border-text/10 rounded-md p-1 my-auto">
        <Image
          src={profilePic}
          className="object-fit h-7 w-7 rounded-full my-auto"
          alt="Profile"
        />
        <span className="flex my-auto font-semibold text-[0.875rem] ">
          Obi Nnaemeka
        </span>
      </div>
    </nav>
  );
}
