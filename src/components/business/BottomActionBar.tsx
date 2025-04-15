
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Navigation } from "lucide-react";

interface BottomActionBarProps {
  onActionClick: (action: string) => void;
}

export function BottomActionBar({ onActionClick }: BottomActionBarProps) {
  return (
    <div className="fixed bottom-16 left-0 right-0 p-4 bg-background border-t border-border">
      <div className="flex gap-2">
        <Button 
          className="flex-1" 
          onClick={() => onActionClick("call")}
        >
          <Phone className="w-4 h-4 mr-2" />
          Call Now
        </Button>
        
        <Button 
          className="flex-1" 
          variant="outline"
          onClick={() => onActionClick("directions")}
        >
          <Navigation className="w-4 h-4 mr-2" />
          Directions
        </Button>
      </div>
    </div>
  );
}
