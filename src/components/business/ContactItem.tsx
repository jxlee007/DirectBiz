
import React from "react";
import { Button } from "@/components/ui/button";

interface ContactItemProps {
  icon: React.ElementType;
  content: string;
  action?: () => void;
  actionLabel?: string;
  isLink?: string;
  isExternal?: boolean;
}

export function ContactItem({ 
  icon: Icon, 
  content, 
  action, 
  actionLabel,
  isLink,
  isExternal = false
}: ContactItemProps) {
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
}
