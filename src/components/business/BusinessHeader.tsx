
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Share2, Bookmark } from "lucide-react";

interface BusinessHeaderProps {
  businessName: string;
  onActionClick: (action: string) => void;
}

export function BusinessHeader({ businessName, onActionClick }: BusinessHeaderProps) {
  const navigate = useNavigate();
  
  return (
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
          {businessName}
        </h1>
        
        <div className="flex gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full"
            onClick={() => onActionClick("share")}
          >
            <Share2 className="w-5 h-5" />
          </Button>
          
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full"
            onClick={() => onActionClick("save")}
          >
            <Bookmark className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
