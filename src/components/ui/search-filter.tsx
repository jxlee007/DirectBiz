
import React from "react";
import { Check, Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type FilterOption = "top-rated" | "trending" | "open-24" | "best" | null;

interface SearchFilterProps {
  value: FilterOption;
  onChange: (value: FilterOption) => void;
}

export function SearchFilter({ value, onChange }: SearchFilterProps) {
  const options = [
    { id: "top-rated", label: "Top Rated" },
    { id: "trending", label: "Trending" },
    { id: "open-24", label: "Open 24/7" },
    { id: "best", label: "Best" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className={cn(
            "h-9 gap-1 pr-1", 
            value && "bg-accent/10 text-accent"
          )}
        >
          <span>{value ? options.find(opt => opt.id === value)?.label : "Filter"}</span>
          <Filter className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuGroup>
          {options.map((option) => (
            <DropdownMenuItem
              key={option.id}
              onClick={() => onChange(option.id as FilterOption)}
              className="cursor-pointer flex items-center justify-between"
            >
              {option.label}
              {value === option.id && <Check className="h-4 w-4" />}
            </DropdownMenuItem>
          ))}
          {value && (
            <DropdownMenuItem 
              onClick={() => onChange(null)} 
              className="cursor-pointer text-muted-foreground"
            >
              Clear Filter
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
