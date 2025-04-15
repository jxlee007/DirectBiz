
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/ui/star-rating";
import { Phone, Mail, Globe, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Business } from "@/types";
import { Link } from "react-router-dom";

interface BusinessCardProps {
  business: Business;
  compact?: boolean;
}

export function BusinessCard({ business, compact = false }: BusinessCardProps) {
  const { 
    id, 
    name, 
    category, 
    description, 
    rating, 
    reviewCount, 
    address, 
    images, 
    isOpen,
    tags
  } = business;

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <div className="relative">
        <img 
          src={images[0]} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge variant={isOpen ? "default" : "outline"} className={isOpen ? "bg-green-500 hover:bg-green-600" : "bg-muted"}>
            {isOpen ? "Open" : "Closed"}
          </Badge>
        </div>
        <div className="absolute bottom-2 left-2">
          <Badge variant="secondary" className="bg-primary/80 text-primary-foreground">
            {category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="pt-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg line-clamp-1">{name}</h3>
          <StarRating rating={rating} size="sm" />
        </div>
        
        {!compact && (
          <>
            <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>
            
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
              <span className="truncate">{address}</span>
            </div>
            
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between pt-0">
        <div className="text-sm text-muted-foreground">
          {reviewCount} {reviewCount === 1 ? "review" : "reviews"}
        </div>
        <Link to={`/business/${id}`} className="flex items-center text-accent font-medium text-sm">
          Details
          <ArrowUpRight className="ml-1 w-3 h-3" />
        </Link>
      </CardFooter>
    </Card>
  );
}
