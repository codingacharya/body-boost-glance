
import React from "react";
import { 
  Home, 
  History, 
  Award, 
  ChartLine,
  UserCircle,
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    name: "History",
    href: "/history",
    icon: History,
  },
  {
    name: "Records",
    href: "/records",
    icon: Award,
  },
  {
    name: "Progress",
    href: "/progress",
    icon: ChartLine,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: UserCircle,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <strong className="text-lg font-bold tracking-tight text-fitness-purple">FitTrack</strong>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex justify-center md:justify-start">
            <ul className="flex space-x-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink 
                    to={item.href}
                    className={({ isActive }) =>
                      cn(
                        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                        isActive
                          ? "bg-fitness-purple text-white shadow-sm hover:bg-fitness-dark-purple"
                          : "hover:bg-muted hover:text-accent-foreground"
                      )
                    }
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <span className="hidden sm:inline">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
