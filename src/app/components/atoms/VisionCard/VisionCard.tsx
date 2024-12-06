import { Card } from "@/components/ui";
import React from "react";

export interface VisionCardProps {
  label: string;
  value: number;
}

export const VisionCard: React.FC<VisionCardProps> = ({ label, value }) => {
  return (
    <Card className="w-1/6 p-4 flex flex-col gap-2">
      <div className="space-y-8 m-auto text-center">
        <h3 className="text-sm font-medium uppercase text-muted-foreground">
          {label}
        </h3>
        <p className="text-4xl font-semibold">{value}</p>
      </div>
    </Card>
  );
};

export default VisionCard;

