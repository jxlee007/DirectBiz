
import React from "react";

interface QuickActionButtonProps {
  icon: React.ElementType;
  label: string;
  onClick: () => void;
}

export function QuickActionButton({ 
  icon: Icon, 
  label, 
  onClick 
}: QuickActionButtonProps) {
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
}
