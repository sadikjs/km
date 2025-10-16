import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { MainNav } from "./components/mobile";
import { Outlet } from "react-router-dom"
function Layout({ sm }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    return (
        <div className={`min-h-screen bg-gray-100 flex flex-col lg:flex-row`}>
            <div className="lg:hidden">
                <MainNav
                    isMenuOpen={isMobileMenuOpen}
                    toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
            </div>
            <div className="hidden lg:block lg:w-64">
                <Sidebar
                />
            </div>
            <main className="w-full lg:flex-1 overflow-y-auto">
                <div className="lg:p-0 pt-16 lg:pt-0"> {/* Adjust pt-16 based on your MainNav's actual height */}
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
export default Layout