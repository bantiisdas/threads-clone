"use client"

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const Bottombar = () => {

  const pathName = usePathname();

  return (
    <section className="bottombar">
      <div className="bottombar_container">
      {sidebarLinks.map((link) => {
          const isactive =
            (pathName.includes(link.route) && link.route.length > 1) ||
            pathName === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`bottombar_link ${isactive && "bg-purple-500"}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                height={24}
                width={24}
              />
              <p className="text-subtle-medium text-light-1 max-sm:hidden">{link.label.split(' ')[0]}</p>
            </Link>
          );
        })}
      </div>
    </section>
  )
}

export default Bottombar;