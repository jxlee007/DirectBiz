
import React, { useState } from "react";
import { SearchBar } from "@/components/ui/search-bar";
import { BusinessCard } from "@/components/ui/business-card";
import { CategoryGrid } from "@/components/category-grid";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { mockBusinesses, mockCategories } from "@/data/mockData";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const featuredBusinesses = mockBusinesses.filter(business => business.isFeatured);
  const nearbyBusinesses = [...mockBusinesses].sort(() => Math.random() - 0.5).slice(0, 4);
  
  const clearSearch = () => setSearchQuery("");
  const handleFilter = () => console.log("Open filter dialog");
  
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <header className="bg-background sticky top-0 z-10 p-4 border-b border-border">
        <div className="mb-3">
          <h1 className="text-2xl font-bold text-primary">DirectBiz</h1>
          <p className="text-sm text-muted-foreground">Find local businesses near you</p>
        </div>
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onClear={clearSearch}
          onFilter={handleFilter}
        />
      </header>
      
      <main className="flex-1 p-4">
        {/* Featured Section */}
        <section className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Featured Businesses</h2>
            <Link to="/featured">
              <Button variant="ghost" size="sm" className="text-accent">
                See all <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredBusinesses.map((business, index) => (
              <div key={business.id} className="animate-slide-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                <BusinessCard business={business} />
              </div>
            ))}
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Browse Categories</h2>
            <Link to="/categories">
              <Button variant="ghost" size="sm" className="text-accent">
                See all <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          <CategoryGrid categories={mockCategories.slice(0, 5)} compact />
        </section>
        
        {/* Nearby Section */}
        <section className="mb-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Near You</h2>
            <Link to="/nearby">
              <Button variant="ghost" size="sm" className="text-accent">
                See all <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {nearbyBusinesses.map((business, index) => (
              <div key={business.id} className="animate-slide-up" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                <BusinessCard business={business} compact />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
