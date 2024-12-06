"use client";

import { Card } from "@/components/ui";
import { Target } from "lucide-react";

export interface TargetCardProps {
  currentPosition: string;
  goalPosition: string;
}

export function TargetCard({
  currentPosition = "Junior Developer",
  goalPosition = "Mid-level Developer",
}: TargetCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <Card.Content className="p-6">
        <div className="flex items-center gap-8">
          <div className="relative flex-shrink-0">
          
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full shadow-lg">
              <Target />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-sm font-medium uppercase text-muted-foreground">
                current position:
              </h3>
              <p className="text-2xl font-semibold tracking-tight">
                {currentPosition}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium uppercase text-muted-foreground">
                goal position:
              </h3>
              <p className="text-2xl font-semibold tracking-tight text-primary">
                {goalPosition}
              </p>
            </div>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
}
export default TargetCard;
