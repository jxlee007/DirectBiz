
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, Settings, Bookmark, History, 
  Heart, Star, Bell, LogOut 
} from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  // Placeholder user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    savedBusinesses: 12,
    reviews: 8,
  };
  
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <header className="bg-background sticky top-0 z-10 p-4 border-b border-border">
        <h1 className="text-xl font-bold">Profile</h1>
      </header>
      
      <main className="flex-1 p-4">
        {/* User Card */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Avatar className="h-16 w-16 mr-4">
                <AvatarImage src="https://i.pravatar.cc/150?img=68" alt={user.name} />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-2 bg-muted/30 rounded-lg">
                <p className="text-2xl font-bold">{user.savedBusinesses}</p>
                <p className="text-sm text-muted-foreground">Saved</p>
              </div>
              <div className="text-center p-2 bg-muted/30 rounded-lg">
                <p className="text-2xl font-bold">{user.reviews}</p>
                <p className="text-sm text-muted-foreground">Reviews</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Profile Menu */}
        <Card>
          <CardHeader>
            <CardTitle>My Account</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ul className="divide-y divide-border">
              <MenuLink icon={<Bookmark className="w-5 h-5" />} text="Saved Businesses" path="/saved" />
              <MenuLink icon={<Heart className="w-5 h-5" />} text="Favorite Places" path="/favorites" />
              <MenuLink icon={<History className="w-5 h-5" />} text="Recently Viewed" path="/recent" />
              <MenuLink icon={<Star className="w-5 h-5" />} text="My Reviews" path="/reviews" />
              <MenuLink icon={<Bell className="w-5 h-5" />} text="Notifications" path="/notifications" />
              <MenuLink icon={<Settings className="w-5 h-5" />} text="Settings" path="/settings" />
              <li className="p-4">
                <Button variant="outline" className="w-full text-destructive border-destructive/20">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

interface MenuLinkProps {
  icon: React.ReactNode;
  text: string;
  path: string;
}

const MenuLink = ({ icon, text, path }: MenuLinkProps) => (
  <li>
    <Link to={path} className="flex items-center p-4 hover:bg-muted/50 transition-colors">
      <div className="text-muted-foreground mr-3">{icon}</div>
      <span>{text}</span>
    </Link>
  </li>
);

export default Profile;
