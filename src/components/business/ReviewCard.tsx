
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { StarRating } from "@/components/ui/star-rating";
import { ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReviewCardProps {
  review: {
    id: string;
    userName: string;
    rating: number;
    comment: string;
    date: string;
  };
}

export function ReviewCard({ review }: ReviewCardProps) {
  const { userName, rating, comment, date } = review;
  
  // Create initials from user name
  const initials = userName
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
  
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h4 className="font-medium">{userName}</h4>
              <span className="text-xs text-muted-foreground">{date}</span>
            </div>
            
            <div className="flex items-center mt-1">
              <StarRating rating={rating} size="sm" className="mr-2" />
              <span className="text-xs text-muted-foreground">
                {rating.toFixed(1)}
              </span>
            </div>
            
            <p className="mt-2 text-sm">{comment}</p>
            
            <div className="mt-3 flex items-center">
              <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                <ThumbsUp className="w-3 h-3 mr-1" /> Helpful
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
