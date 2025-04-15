
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, Bell, MessageSquare, FileText, 
  Activity, Star, PenSquare, Calendar 
} from "lucide-react";

const Community = () => {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <header className="bg-background sticky top-0 z-10 p-4 border-b border-border">
        <h1 className="text-xl font-bold">Community</h1>
      </header>
      
      <main className="flex-1 p-4">
        <div className="space-y-4">
          {/* Community Announcements Banner */}
          <Card className="bg-accent/10 border-accent/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-accent" />
                <div>
                  <h2 className="font-semibold">Welcome to the Community!</h2>
                  <p className="text-sm text-muted-foreground">
                    Connect with local businesses and community members
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Upcoming Features */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Coming Soon</CardTitle>
              <CardDescription>Exciting new features on the way</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y divide-border">
                <FeatureItem 
                  icon={<PenSquare className="w-5 h-5" />} 
                  title="Community Posts" 
                  description="Share updates, news, and announcements"
                />
                <FeatureItem 
                  icon={<Calendar className="w-5 h-5" />} 
                  title="Local Events" 
                  description="Discover and promote community events"
                />
                <FeatureItem 
                  icon={<Activity className="w-5 h-5" />} 
                  title="Business Insights" 
                  description="See trending local businesses and statistics"
                />
              </ul>
            </CardContent>
          </Card>
          
          {/* Community Resources */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Community Resources</CardTitle>
              <CardDescription>Helpful links and information</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y divide-border">
                <MenuLink 
                  icon={<Bell className="w-5 h-5" />} 
                  text="Community Guidelines" 
                  path="/community/guidelines" 
                />
                <MenuLink 
                  icon={<MessageSquare className="w-5 h-5" />} 
                  text="Frequently Asked Questions" 
                  path="/community/faq" 
                />
                <MenuLink 
                  icon={<FileText className="w-5 h-5" />} 
                  text="Business Resources" 
                  path="/community/resources" 
                />
              </ul>
            </CardContent>
          </Card>
          
          {/* Update Information */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>App Updates</CardTitle>
              <CardDescription>Latest improvements and features</CardDescription>
            </CardHeader>
            <CardContent className="px-4 py-3">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">Version 1.0.0</span>
                  <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">Latest</span>
                </div>
                <span className="text-xs text-muted-foreground">April 15, 2025</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Initial release with business listings, categories, 
                map view, and user profiles. Search and filter functions added.
              </p>
            </CardContent>
          </Card>
          
          {/* Feedback Section */}
          <div className="bg-muted/30 rounded-lg p-4 text-center">
            <Star className="h-6 w-6 mx-auto mb-2 text-accent" />
            <h3 className="font-semibold mb-1">Your Feedback Matters</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Help us improve DirectBiz by sharing your thoughts
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Send Feedback
            </Button>
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

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => (
  <li className="flex items-center p-4 hover:bg-muted/50 transition-colors">
    <div className="text-accent mr-3">{icon}</div>
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </li>
);

export default Community;
