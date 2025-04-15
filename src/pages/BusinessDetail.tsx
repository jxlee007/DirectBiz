
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { mockBusinesses, mockReviews } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { BusinessHeader } from "@/components/business/BusinessHeader";
import { BusinessImageGallery } from "@/components/business/BusinessImageGallery";
import { BusinessSummary } from "@/components/business/BusinessSummary";
import { ContactInfoCard } from "@/components/business/ContactInfoCard";
import { BusinessDetailTabs } from "@/components/business/BusinessDetailTabs";
import { BottomActionBar } from "@/components/business/BottomActionBar";

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
      <BusinessHeader 
        businessName={business.name}
        onActionClick={handleActionClick}
      />
      
      <BusinessImageGallery 
        images={business.images} 
        businessName={business.name}
        isOpen={business.isOpen}
      />
      
      <div className="p-4 bg-background relative">
        <BusinessSummary 
          business={business}
          handleActionClick={handleActionClick}
        />
        
        <ContactInfoCard 
          business={business}
          handleActionClick={handleActionClick}
        />
        
        <BusinessDetailTabs
          businessReviews={businessReviews}
          hours={business.hours}
          tags={business.tags}
          onActionClick={handleActionClick}
        />
      </div>
      
      <BottomActionBar onActionClick={handleActionClick} />
    </div>
  );
};

export default BusinessDetail;
