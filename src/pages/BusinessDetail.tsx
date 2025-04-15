
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  Phone, Mail, Globe, MapPin, Clock, 
  ArrowLeft, Share2, Bookmark, Star, 
  MessageSquare, Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/ui/star-rating";
import { mockBusinesses, mockReviews } from "@/data/mockData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BusinessDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const business = mockBusinesses.find(b => b.id === id);
  
  if (!business) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-4">
        <h1 className="text-xl font-bold mb-2">Business not found</h1>
        <p className="text-muted-foreground mb-4">The business you're looking for doesn't exist.</p>
        <Button onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </div>
    );
  }
  
  const businessReviews = mockReviews.filter(review => review.businessId === business.id);
  
  return (
    <div className="flex flex-col min-h-screen pb-20">
      {/* Header Images */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 flex">
          {business.images.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt={`${business.name} - ${index + 1}`}
              className="h-full w-full object-cover"
            />
          ))}
        </div>
        
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full bg-background/50 backdrop-blur-sm"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex gap-2">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full bg-background/50 backdrop-blur-sm"
            >
              <Share2 className="w-5 h-5" />
            </Button>
            
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full bg-background/50 backdrop-blur-sm"
            >
              <Bookmark className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <Badge variant={business.isOpen ? "default" : "outline"} className={business.isOpen ? "bg-green-500 hover:bg-green-600" : "bg-muted"}>
            {business.isOpen ? "Open Now" : "Closed"}
          </Badge>
        </div>
      </div>
      
      {/* Business Information */}
      <div className="p-4 bg-background -mt-4 rounded-t-xl relative">
        <div>
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">{business.name}</h1>
            <StarRating rating={business.rating} size="lg" />
          </div>
          
          <div className="flex items-center mt-1">
            <Badge variant="secondary" className="mr-2">
              {business.category}
            </Badge>
            <p className="text-sm text-muted-foreground">
              {business.reviewCount} reviews
            </p>
          </div>
        </div>
        
        <p className="mt-4 text-muted-foreground">
          {business.description}
        </p>
        
        {/* Contact Info */}
        <Card className="mt-6">
          <CardContent className="p-4">
            <h2 className="font-semibold mb-3">Contact Information</h2>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-muted-foreground mr-3" />
                <span>{business.address}</span>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-muted-foreground mr-3" />
                <a href={`tel:${business.phone}`} className="text-accent">
                  {business.phone}
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-muted-foreground mr-3" />
                <a href={`mailto:${business.email}`} className="text-accent">
                  {business.email}
                </a>
              </div>
              
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-muted-foreground mr-3" />
                <a href={business.website} target="_blank" rel="noopener noreferrer" className="text-accent">
                  {business.website.replace(/^https?:\/\//, '')}
                </a>
              </div>
              
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-muted-foreground mr-3" />
                <span>{business.hours}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Tabs for Reviews and Info */}
        <div className="mt-6">
          <Tabs defaultValue="reviews">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="reviews">
                <MessageSquare className="w-4 h-4 mr-2" />
                Reviews
              </TabsTrigger>
              <TabsTrigger value="about">
                <Info className="w-4 h-4 mr-2" />
                About
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="reviews" className="mt-4">
              <div className="space-y-4">
                {businessReviews.length > 0 ? (
                  businessReviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                  ))
                ) : (
                  <div className="text-center p-6">
                    <p className="text-muted-foreground">No reviews yet.</p>
                    <Button variant="outline" className="mt-2">
                      <Star className="w-4 h-4 mr-2" />
                      Write a Review
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="about" className="mt-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Business Hours</h3>
                  <p className="text-muted-foreground mb-4">{business.hours}</p>
                  
                  <h3 className="font-semibold mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {business.tags?.map(tag => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="fixed bottom-16 left-0 right-0 p-4 bg-background border-t border-border">
        <div className="flex gap-2">
          <Button className="flex-1" variant="default">
            <Phone className="w-4 h-4 mr-2" />
            Call
          </Button>
          
          <Button className="flex-1" variant="outline">
            <Heart className="w-4 h-4 mr-2" />
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

// Info icon component for the tabs
const Info = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

// Review card component
interface ReviewCardProps {
  review: {
    id: string;
    userName: string;
    rating: number;
    comment: string;
    date: string;
  };
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const { userName, rating, comment, date } = review;
  
  // Create initials from user name
  const initials = userName
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
  
  return (
    <Card>
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
            
            <StarRating rating={rating} size="sm" className="mt-1" />
            
            <p className="mt-2 text-sm">{comment}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusinessDetail;
