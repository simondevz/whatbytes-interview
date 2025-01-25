"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiBarChart2 } from "react-icons/fi";
import { FiAward } from "react-icons/fi";
import { IoNewspaperOutline } from "react-icons/io5";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex border-r border-text/15 py-12 max-md:hidden">
      <ul className="flex flex-col gap-2 pr-3">
        {[
          {
            icon: <FiBarChart2 />,
            href: "/",
            text: "Dashboard",
          },
          {
            icon: <FiAward />,
            href: "/skill_test",
            text: "Skill Test",
          },
          {
            icon: <IoNewspaperOutline />,
            href: "/internship",
            text: "Internship",
          },
        ].map((item) => (
          <li
            className={
              (pathname === item.href
                ? "text-secondary bg-text/5 "
                : "text-text ") + " rounded-r-full flex w-52"
            }
            key={item.href}
          >
            <Link className="flex gap-3 p-5" href={item.href}>
              <div
                className={
                  (pathname === item.href ? "text-secondary " : "text-black ") +
                  " my-auto"
                }
              >
                {item.icon}
              </div>
              <span className="font-semibold my-auto text-[0.875rem]">
                {item.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
