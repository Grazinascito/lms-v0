import React from "react";
import { VisionCard } from "@/app/components/atoms/VisionCard";

const VisionCardGroup: React.FC = () => {
  return (
    <div className="flex gap-2">
      <VisionCard label="completed objectives:" value={3} />
      <VisionCard label="completed actions:" value={5} />
      <VisionCard label="completed tasks:" value={10} />
    </div>
  );
};

export default VisionCardGroup;
