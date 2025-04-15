
import React from "react";
import { Link } from "react-router-dom";
import { Category } from "@/types";
import { ShoppingBag, Utensils, FlowerIcon, Dumbbell, Smartphone, Home, Car, Coffee, Film, Store } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryGridProps {
  categories: Category[];
  compact?: boolean;
}

export function CategoryGrid({ categories, compact = false }: CategoryGridProps) {
  // Map category icon names to Lucide icons
  const getCategoryIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      "shopping-bag": <ShoppingBag className="w-5 h-5" />,
      "utensils": <Utensils className="w-5 h-5" />,
      "spa": <FlowerIcon className="w-5 h-5" />,
      "dumbbell": <Dumbbell className="w-5 h-5" />,
      "mobile-alt": <Smartphone className="w-5 h-5" />,
      "home": <Home className="w-5 h-5" />,
      "car": <Car className="w-5 h-5" />,
      "coffee": <Coffee className="w-5 h-5" />,
      "film": <Film className="w-5 h-5" />,
      "store": <Store className="w-5 h-5" />,
    };
    
    return iconMap[iconName] || <Store className="w-5 h-5" />;
  };
  
  const gridClassName = compact 
    ? "grid grid-cols-5 gap-3"
    : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4";
  
  return (
    <div className={gridClassName}>
      {categories.map((category) => (
        <Link 
          key={category.id}
          to={`/categories/${category.id}`}
          className="group"
        >
          <div className={cn(
            "flex flex-col items-center bg-card hover:bg-card/80 rounded-lg p-4 transition-all text-center",
            compact ? "space-y-1" : "space-y-2"
          )}>
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors">
              {getCategoryIcon(category.icon)}
            </div>
            <div>
              <h3 className={cn(
                "font-medium text-primary",
                compact ? "text-xs" : "text-sm"
              )}>
                {category.name}
              </h3>
              {!compact && (
                <p className="text-xs text-muted-foreground mt-1">
                  {category.count} listings
                </p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
