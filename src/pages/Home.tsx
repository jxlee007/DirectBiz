
import React, { useState, useEffect } from "react";
import { SearchBar } from "@/components/ui/search-bar";
import { SearchFilter, FilterOption } from "@/components/ui/search-filter";
import { BusinessCard } from "@/components/ui/business-card";
import { CategoryGrid } from "@/components/category-grid";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { mockBusinesses, mockCategories } from "@/data/mockData";
import { Link } from "react-router-dom";
import { Business } from "@/types";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterOption>(null);
  const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>([]);
  
  // Get the initial sets of businesses
  const featuredBusinesses = mockBusinesses.filter(business => business.isFeatured);
  const nearbyBusinesses = [...mockBusinesses].sort(() => Math.random() - 0.5).slice(0, 4);
  
  // Apply filters to the businesses
  useEffect(() => {
    let filtered = [...mockBusinesses];
    
    // Apply search query filter
    if (searchQuery) {
      filtered = filtered.filter(business => 
        business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply active filter
    if (activeFilter) {
      switch (activeFilter) {
        case 'top-rated':
          filtered = filtered.sort((a, b) => b.rating - a.rating);
          break;
        case 'trending':
          // For demo, we'll simulate trending with a mix of rating and review count
          filtered = filtered.sort((a, b) => 
            (b.rating * b.reviewCount) - (a.rating * a.reviewCount)
          );
          break;
        case 'open-24':
          filtered = filtered.filter(business => business.hours.includes("24/7") || business.isOpen);
          break;
        case 'best':
          // For demo, we'll just use highest rated with at least 3 reviews
          filtered = filtered.filter(business => business.reviewCount >= 3)
            .sort((a, b) => b.rating - a.rating);
          break;
      }
    }
    
    setFilteredBusinesses(filtered.slice(0, 8)); // Limit to 8 for display
  }, [searchQuery, activeFilter]);
  
  const clearSearch = () => {
    setSearchQuery("");
    setActiveFilter(null);
  };
  
  // Display filtered results or default content based on search/filter state
  const showFilteredResults = searchQuery || activeFilter;
  
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <header className="bg-background sticky top-0 z-10 p-4 border-b border-border">
        <div className="mb-3">
          <h1 className="text-2xl font-bold text-primary">DirectBiz</h1>
          <p className="text-sm text-muted-foreground">Find local businesses near you</p>
        </div>
        <div className="flex items-center gap-2">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onClear={clearSearch}
            className="flex-1"
          />
          <SearchFilter value={activeFilter} onChange={setActiveFilter} />
        </div>
      </header>
      
      <main className="flex-1 p-4">
        {showFilteredResults ? (
          // Filtered Results Section
          <section className="mb-8 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">
                {filteredBusinesses.length > 0 
                  ? `Found ${filteredBusinesses.length} businesses`
                  : "No results found"}
              </h2>
              {(searchQuery || activeFilter) && (
                <Button variant="ghost" size="sm" onClick={clearSearch} className="text-muted-foreground">
                  Clear All
                </Button>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredBusinesses.map((business, index) => (
                <div key={business.id} className="animate-slide-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                  <BusinessCard business={business} />
                </div>
              ))}
            </div>
          </section>
        ) : (
          // Default Home Content
          <>
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
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
