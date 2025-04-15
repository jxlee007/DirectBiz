
import React from "react";
import { Search, X, Sliders } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  onFilter?: () => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({
  value,
  onChange,
  onClear,
  onFilter,
  placeholder = "Search businesses...",
  className,
}: SearchBarProps) {
  return (
    <div className={cn("relative flex items-center", className)}>
      <div className="absolute left-3 text-muted-foreground">
        <Search className="w-4 h-4" />
      </div>
      
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-9 pr-20 rounded-full h-11 border-muted bg-muted/30"
      />
      
      {value && (
        <div className="absolute right-14 cursor-pointer" onClick={onClear}>
          <X className="w-4 h-4 text-muted-foreground" />
        </div>
      )}
      
      {onFilter && (
        <Button 
          size="icon"
          variant="ghost" 
          className="absolute right-3 h-7 w-7 rounded-full"
          onClick={onFilter}
        >
          <Sliders className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}
