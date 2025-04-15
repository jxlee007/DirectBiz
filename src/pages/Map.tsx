
import React, { useState } from "react";
import { SearchBar } from "@/components/ui/search-bar";
import { mockBusinesses } from "@/data/mockData";
import { MapPin } from "lucide-react";

const Map = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // For now, just show a placeholder since we're not integrating a real map yet
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <header className="bg-background sticky top-0 z-10 p-4 border-b border-border">
        <h1 className="text-xl font-bold mb-3">Map</h1>
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onClear={() => setSearchQuery("")}
          placeholder="Search locations..."
        />
      </header>
      
      <main className="flex-1 p-4">
        <div className="bg-muted/30 rounded-lg h-[calc(100vh-180px)] flex flex-col items-center justify-center">
          <div className="bg-background rounded-full p-4 shadow-md mb-4">
            <MapPin className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-lg font-medium mb-2">Map View</h3>
          <p className="text-sm text-muted-foreground text-center max-w-sm">
            This would display an interactive map with {mockBusinesses.length} business locations.
            <br /><br />
            We would integrate with Google Maps or an alternative map provider here.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Map;
