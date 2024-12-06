import { VisionCard } from "@/app/components/atoms/VisionCard";
import { TargetCard } from "@/app/components/atoms/TargetCard";

const GrowthVision = () => {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Growth Vision</h2>

      <div className="flex gap-4">
        <TargetCard
          currentPosition="Junior Developer"
          goalPosition="Mid-level Developer"
        />
        <VisionCard label="completed objectives:" value={3} />
        <VisionCard label="completed actions:" value={5} />
        <VisionCard label="completed tasks:" value={10} />
      </div>
    </section>
  );
};

export default GrowthVision;
