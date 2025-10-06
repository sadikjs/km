import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom"
function Layout() {
    return (
        <div className="w-screen h-screen flex flex-row block">
            <Sidebar 
            sideWidth="w-[calc(100%-75%)]"
            />
            <main className="w-[calc(100%-25%)] overflow-y-auto">
            <Outlet />
            </main>
        </div>
    );
}
export default Layout