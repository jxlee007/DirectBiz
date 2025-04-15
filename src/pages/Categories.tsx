
import React, { useState } from "react";
import { SearchBar } from "@/components/ui/search-bar";
import { CategoryGrid } from "@/components/category-grid";
import { mockCategories } from "@/data/mockData";

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredCategories = searchQuery 
    ? mockCategories.filter(category => 
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockCategories;
  
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <header className="bg-background sticky top-0 z-10 p-4 border-b border-border">
        <h1 className="text-xl font-bold mb-3">Categories</h1>
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onClear={() => setSearchQuery("")}
          placeholder="Search categories..."
        />
      </header>
      
      <main className="flex-1 p-4">
        {filteredCategories.length > 0 ? (
          <CategoryGrid categories={filteredCategories} />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <p className="text-lg text-muted-foreground mb-2">No categories found</p>
            <p className="text-sm text-muted-foreground">
              Try searching with different keywords
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Categories;
