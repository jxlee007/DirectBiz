
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AboutTabProps {
  hours: string;
  tags?: string[];
}

export function AboutTab({ hours, tags = [] }: AboutTabProps) {
  return (
    <div className="mt-4">
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">Business Hours</h3>
          <p className="text-muted-foreground mb-4">{hours}</p>
          
          <h3 className="font-semibold mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
