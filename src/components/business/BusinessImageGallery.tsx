
import React from "react";
import { Badge } from "@/components/ui/badge";

interface BusinessImageGalleryProps {
  images: string[];
  businessName: string;
  isOpen: boolean;
}

export function BusinessImageGallery({ images, businessName, isOpen }: BusinessImageGalleryProps) {
  return (
    <div className="relative h-64 overflow-hidden">
      <div className="absolute inset-0 flex">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt={`${businessName} - ${index + 1}`}
            className="h-full w-full object-cover"
          />
        ))}
      </div>
      
      <div className="absolute bottom-4 left-4">
        <Badge 
          variant={isOpen ? "default" : "outline"} 
          className={isOpen ? "bg-green-500 hover:bg-green-600" : "bg-muted"}
        >
          {isOpen ? "Open Now" : "Closed"}
        </Badge>
      </div>
    </div>
  );
}
