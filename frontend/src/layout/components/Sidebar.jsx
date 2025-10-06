import { useState } from "react";
import { NavLink } from "react-router-dom"
import { RxAvatar } from "react-icons/rx";

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
        href: "research"
    },
    {
        id: 5,
        title: "Contact",
        href: "contact"
    }
]

function Sidebar({ sideWidth}) {
    const[showNavbar, setShowNavbar] = useState(false);  
    return (
        <div style={{ boxShadow:"1px 0px #e5e7eb" }} className={`${sideWidth} flex flex-col h-screen justify-center items-center bg-[#f8f8f8]`}>
            <ul className={`flex flex-col justify-center items-center font-roboto text-xs text-[#4e443c] gap-y-2 border-b border-gray-300 pb-8`}>
                {sidebars.map((item) => (
                    <NavLink
                    key={item.id}
                        to={item.href}
                        className={({ isActive }) =>
                            `${isActive ? "text-[#ef4e32]": "text-gray hover:text-gray-800"
                            }`
                        }
                    >
                        {item.title}
                    </NavLink>
                ))}
            </ul>
            <div className="flex flex-row justify-center items-center">
                <NavLink to="/sign-in" className="font-roboto text-xs text-[#4e443c] italic">sign-in</NavLink>
            </div>
        </div>
    );
}
export default Sidebar;