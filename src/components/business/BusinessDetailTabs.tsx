
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare } from "lucide-react";
import { InfoIcon } from "./InfoIcon";
import { ReviewsTab } from "./ReviewsTab";
import { AboutTab } from "./AboutTab";
import { Review } from "@/types";

interface BusinessDetailTabsProps {
  businessReviews: Review[];
  hours: string;
  tags?: string[];
  onActionClick: (action: string) => void;
}

export function BusinessDetailTabs({ 
  businessReviews, 
  hours, 
  tags, 
  onActionClick 
}: BusinessDetailTabsProps) {
  return (
    <div className="mt-6">
      <Tabs defaultValue="reviews">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="reviews">
            <MessageSquare className="w-4 h-4 mr-2" />
            Reviews
          </TabsTrigger>
          <TabsTrigger value="about">
            <InfoIcon className="w-4 h-4 mr-2" />
            About
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="reviews">
          <ReviewsTab 
            reviews={businessReviews} 
            onActionClick={onActionClick} 
          />
        </TabsContent>
        
        <TabsContent value="about">
          <AboutTab hours={hours} tags={tags} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
