
import React from "react";
import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  showValue?: boolean;
}

export function StarRating({
  rating,
  size = "md",
  className,
  showValue = true,
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  const sizeMap = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };
  
  const starSize = sizeMap[size];
  
  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return (
              <Star
                key={i}
                className={cn(starSize, "fill-accent text-accent")}
              />
            );
          } else if (i === fullStars && hasHalfStar) {
            return (
              <StarHalf
                key={i}
                className={cn(starSize, "fill-accent text-accent")}
              />
            );
          } else {
            return (
              <Star
                key={i}
                className={cn(starSize, "text-muted-foreground")}
              />
            );
          }
        })}
      </div>
      {showValue && (
        <span className={cn("ml-1 text-muted-foreground", {
          "text-xs": size === "sm",
          "text-sm": size === "md",
          "text-base": size === "lg",
        })}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
