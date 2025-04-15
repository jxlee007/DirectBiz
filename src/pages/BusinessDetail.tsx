
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  Phone, Mail, Globe, MapPin, Clock, 
  ArrowLeft, Share2, Bookmark, Star, 
  MessageSquare, Heart, ChevronLeft,
  Navigation, ThumbsUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/ui/star-rating";
import { mockBusinesses, mockReviews } from "@/data/mockData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

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
  
  const handleActionClick = (action: string) => {
    switch (action) {
      case "call":
        window.location.href = `tel:${business.phone}`;
        break;
      case "email":
        window.location.href = `mailto:${business.email}`;
        break;
      case "directions":
        // In a real app, this would open maps
        toast.info("Opening directions in maps");
        break;
      case "save":
        toast.success("Business saved to favorites");
        break;
      case "share":
        // In a real app, this would open the share dialog
        toast.info("Sharing business information");
        break;
      case "review":
        toast.info("Opening review form");
        break;
      default:
        break;
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen pb-20">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between p-4">
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <h1 className="text-lg font-semibold truncate max-w-[60%]">
            {business.name}
          </h1>
          
          <div className="flex gap-2">
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full"
              onClick={() => handleActionClick("share")}
            >
              <Share2 className="w-5 h-5" />
            </Button>
            
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full"
              onClick={() => handleActionClick("save")}
            >
              <Bookmark className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Image Carousel */}
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
        
        <div className="absolute bottom-4 left-4">
          <Badge 
            variant={business.isOpen ? "default" : "outline"} 
            className={business.isOpen ? "bg-green-500 hover:bg-green-600" : "bg-muted"}
          >
            {business.isOpen ? "Open Now" : "Closed"}
          </Badge>
        </div>
      </div>
      
      {/* Business Summary */}
      <div className="p-4 bg-background relative">
        <div className="mb-2 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">{business.name}</h1>
            <div className="flex items-center mt-1">
              <Badge variant="secondary" className="mr-2">
                {business.category}
              </Badge>
              <p className="text-sm text-muted-foreground">
                {business.reviewCount} reviews
              </p>
            </div>
          </div>
          <StarRating rating={business.rating} size="lg" />
        </div>
        
        <p className="mt-3 text-muted-foreground">
          {business.description}
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
        
        {/* Contact Info Card */}
        <Card className="mt-6">
          <CardContent className="p-4">
            <h2 className="font-semibold mb-3">Contact Information</h2>
            
            <div className="space-y-3">
              <ContactItem 
                icon={MapPin} 
                content={business.address} 
                action={() => handleActionClick("directions")}
                actionLabel="Get Directions"
              />
              
              <ContactItem 
                icon={Phone} 
                content={business.phone} 
                action={() => handleActionClick("call")}
                actionLabel="Call Now"
                isLink={`tel:${business.phone}`}
              />
              
              <ContactItem 
                icon={Mail} 
                content={business.email} 
                action={() => handleActionClick("email")}
                actionLabel="Send Email"
                isLink={`mailto:${business.email}`}
              />
              
              <ContactItem 
                icon={Globe} 
                content={business.website.replace(/^https?:\/\//, '')} 
                isLink={business.website}
                isExternal
              />
              
              <ContactItem 
                icon={Clock} 
                content={business.hours} 
              />
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
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">{businessReviews.length} Reviews</h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleActionClick("review")}
                >
                  <Star className="w-4 h-4 mr-2" />
                  Write a Review
                </Button>
              </div>
              
              <div className="space-y-4">
                {businessReviews.length > 0 ? (
                  businessReviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                  ))
                ) : (
                  <div className="text-center p-6">
                    <p className="text-muted-foreground">No reviews yet.</p>
                    <Button 
                      variant="outline" 
                      className="mt-2"
                      onClick={() => handleActionClick("review")}
                    >
                      <Star className="w-4 h-4 mr-2" />
                      Be the first to review
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
      
      {/* Bottom Action Bar - Placed within thumb reach zone */}
      <div className="fixed bottom-16 left-0 right-0 p-4 bg-background border-t border-border">
        <div className="flex gap-2">
          <Button 
            className="flex-1" 
            onClick={() => handleActionClick("call")}
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
          
          <Button 
            className="flex-1" 
            variant="outline"
            onClick={() => handleActionClick("directions")}
          >
            <Navigation className="w-4 h-4 mr-2" />
            Directions
          </Button>
        </div>
      </div>
    </div>
  );
};

// Helper Components

// Quick Action Button Component for the main actions
const QuickActionButton = ({ 
  icon: Icon, 
  label, 
  onClick 
}: { 
  icon: React.ElementType; 
  label: string; 
  onClick: () => void;
}) => {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center justify-center p-2"
    >
      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-1">
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <span className="text-xs">{label}</span>
    </button>
  );
};

// Contact Item Component with optional action
const ContactItem = ({ 
  icon: Icon, 
  content, 
  action, 
  actionLabel,
  isLink,
  isExternal = false
}: { 
  icon: React.ElementType; 
  content: string;
  action?: () => void;
  actionLabel?: string;
  isLink?: string;
  isExternal?: boolean;
}) => {
  const contentElement = isLink ? (
    <a 
      href={isLink} 
      target={isExternal ? "_blank" : undefined} 
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="text-accent"
    >
      {content}
    </a>
  ) : (
    <span>{content}</span>
  );
  
  return (
    <div className="flex items-start">
      <Icon className="w-5 h-5 text-muted-foreground mr-3 mt-0.5 flex-shrink-0" />
      <div className="flex-1">
        {contentElement}
      </div>
      {action && actionLabel && (
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={action}
          className="text-xs text-accent"
        >
          {actionLabel}
        </Button>
      )}
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

// Enhanced Review card component
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
};

export default BusinessDetail;
