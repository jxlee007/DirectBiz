
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ContactItem } from "./ContactItem";
import { MapPin, Phone, Mail, Globe, Clock } from "lucide-react";

interface ContactInfoCardProps {
  business: {
    address: string;
    phone: string;
    email: string;
    website: string;
    hours: string;
  };
  handleActionClick: (action: string) => void;
}

export function ContactInfoCard({ business, handleActionClick }: ContactInfoCardProps) {
  const { address, phone, email, website, hours } = business;
  
  return (
    <Card className="mt-6">
      <CardContent className="p-4">
        <h2 className="font-semibold mb-3">Contact Information</h2>
        
        <div className="space-y-3">
          <ContactItem 
            icon={MapPin} 
            content={address} 
            action={() => handleActionClick("directions")}
            actionLabel="Get Directions"
          />
          
          <ContactItem 
            icon={Phone} 
            content={phone} 
            action={() => handleActionClick("call")}
            actionLabel="Call Now"
            isLink={`tel:${phone}`}
          />
          
          <ContactItem 
            icon={Mail} 
            content={email} 
            action={() => handleActionClick("email")}
            actionLabel="Send Email"
            isLink={`mailto:${email}`}
          />
          
          <ContactItem 
            icon={Globe} 
            content={website.replace(/^https?:\/\//, '')} 
            isLink={website}
            isExternal
          />
          
          <ContactItem 
            icon={Clock} 
            content={hours} 
          />
        </div>
      </CardContent>
    </Card>
  );
}
