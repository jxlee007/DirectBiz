
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Info, HelpCircle, MessageSquare, Shield, 
  FileText, Settings, Star 
} from "lucide-react";

const More = () => {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <header className="bg-background sticky top-0 z-10 p-4 border-b border-border">
        <h1 className="text-xl font-bold">More</h1>
      </header>
      
      <main className="flex-1 p-4">
        <div className="grid gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Support</CardTitle>
              <CardDescription>Get help and learn more</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y divide-border">
                <MenuLink 
                  icon={<HelpCircle className="w-5 h-5" />} 
                  text="Help & FAQ" 
                  path="/help" 
                />
                <MenuLink 
                  icon={<MessageSquare className="w-5 h-5" />} 
                  text="Contact Us" 
                  path="/contact" 
                />
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Legal</CardTitle>
              <CardDescription>Policies and terms</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y divide-border">
                <MenuLink 
                  icon={<Shield className="w-5 h-5" />} 
                  text="Privacy Policy" 
                  path="/privacy" 
                />
                <MenuLink 
                  icon={<FileText className="w-5 h-5" />} 
                  text="Terms of Service" 
                  path="/terms" 
                />
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>About</CardTitle>
              <CardDescription>Learn more about DirectBiz</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y divide-border">
                <MenuLink 
                  icon={<Info className="w-5 h-5" />} 
                  text="About Us" 
                  path="/about" 
                />
                <MenuLink 
                  icon={<Star className="w-5 h-5" />} 
                  text="Rate the App" 
                  path="/rate" 
                />
              </ul>
            </CardContent>
          </Card>
          
          <div className="text-center text-sm text-muted-foreground mt-6">
            <p>DirectBiz App v1.0.0</p>
            <p className="mt-1">© 2025 DirectBiz, Inc. All rights reserved.</p>
          </div>
        </div>
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

export default More;
