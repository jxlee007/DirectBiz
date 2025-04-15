
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, MapPin, User, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationItem {
  name: string;
  path: string;
  icon: React.ElementType;
}

export function BottomNavigation() {
  const location = useLocation();
  
  const navigationItems: NavigationItem[] = [
    {
      name: "Home",
      path: "/",
      icon: Home,
    },
    {
      name: "Categories",
      path: "/categories",
      icon: Search,
    },
    {
      name: "Map",
      path: "/map",
      icon: MapPin,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: User,
    },
    {
      name: "Community",
      path: "/community",
      icon: Users,
    },
  ];
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border h-16 flex justify-around items-center px-4">
      {navigationItems.map((item) => {
        const isActive = location.pathname === item.path;
        
        return (
          <Link
            key={item.name}
            to={item.path}
            className="flex flex-col items-center justify-center w-full h-full"
          >
            <div
              className={cn(
                "flex flex-col items-center justify-center transition-colors",
                isActive ? "text-accent" : "text-muted-foreground"
              )}
            >
              <item.icon className={cn("w-5 h-5 mb-1", isActive && "stroke-[2.5px]")} />
              <span className="text-xs">{item.name}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
