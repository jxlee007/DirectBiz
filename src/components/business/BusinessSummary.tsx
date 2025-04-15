
import React from "react";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/ui/star-rating";
import { QuickActionButton } from "./QuickActionButton";
import { Phone, Mail, Navigation, Heart } from "lucide-react";

interface BusinessSummaryProps {
  business: {
    name: string;
    category: string;
    description: string;
    rating: number;
    reviewCount: number;
  };
  handleActionClick: (action: string) => void;
}

export function BusinessSummary({ business, handleActionClick }: BusinessSummaryProps) {
  const { name, category, description, rating, reviewCount } = business;
  
  return (
    <div className="mb-2">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <div className="flex items-center mt-1">
            <Badge variant="secondary" className="mr-2">
              {category}
            </Badge>
            <p className="text-sm text-muted-foreground">
              {reviewCount} reviews
            </p>
          </div>
        </div>
        <StarRating rating={rating} size="lg" />
      </div>
      
      <p className="mt-3 text-muted-foreground">
        {description}
      </p>
      
      {/* Quick Actions Row */}
      <div className="mt-4 flex justify-between">
        <QuickActionButton 
          icon={Phone} 
          label="Call" 
          onClick={() => handleActionClick("call")} 
        />
        <QuickActionButton 
          icon={Mail} 
          label="Email" 
          onClick={() => handleActionClick("email")} 
        />
        <QuickActionButton 
          icon={Navigation} 
          label="Directions" 
          onClick={() => handleActionClick("directions")} 
        />
        <QuickActionButton 
          icon={Heart} 
          label="Save" 
          onClick={() => handleActionClick("save")} 
        />
      </div>
    </div>
  );
}
