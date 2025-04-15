
import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { ReviewCard } from "./ReviewCard";
import { Review } from "@/types";

interface ReviewsTabProps {
  reviews: Review[];
  onActionClick: (action: string) => void;
}

export function ReviewsTab({ reviews, onActionClick }: ReviewsTabProps) {
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">{reviews.length} Reviews</h3>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => onActionClick("review")}
        >
          <Star className="w-4 h-4 mr-2" />
          Write a Review
        </Button>
      </div>
      
      <div className="space-y-4">
        {reviews.length > 0 ? (
          reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))
        ) : (
          <div className="text-center p-6">
            <p className="text-muted-foreground">No reviews yet.</p>
            <Button 
              variant="outline" 
              className="mt-2"
              onClick={() => onActionClick("review")}
            >
              <Star className="w-4 h-4 mr-2" />
              Be the first to review
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
