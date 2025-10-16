import { X } from "lucide-react";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
const sidebars = [
  {
    id: 1,
    title: "Home",
    href: "/"
  },
  {
    id: 2,
    title: "About",
    href: "/about"
  },
  {
    id: 3,
    title: "Achievements",
    href: "/achievements"
  },
  {
    id: 4,
    title: "Research",
    href: "/research"
  },
  {
    id: 5,
    title: "Contact ",
    href: "/contact"
  }
]
export function MainNav() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  return (
    <>
      <div className="w-[cal(100%)] flex justify-center items-center bg-slate-900 z-30 py-4 gap-x-4">
        <nav className="flex flex-row justify-center items-center gap-x-4 font-roboto text-base text-white">
          {showMobileMenu && sidebars?.map((item, index) => (
            <Link
              key={index}
              to={item.disabled ? "#" : item.href}
              className={"flex items-center text-lg text-white font-medium transition-colors hover:text-foreground/80 sm:text-sm"}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <button
          className="flex items-center space-x-2 lg:hidden text-white pl-4 text-base"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <X /> : <Menu />}
        </button>
      </div>
    </>
  );
}
