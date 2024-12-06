import Image from "next/image";

const GrowthVision = () => {
  return (
    <section>
        <h2>Growth Vision</h2>
      <div>
        <Image
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTVIYJVSIJFEsbY9jDEM3nXRo0y80xajUWww&s"
          }
          alt={""}
        ></Image>
      </div>
      //atom
      <div> TargetStatus(atom)</div>
      <div>CardStats(atom) - label: string, value: number</div>
    </section>
  );
};

export default GrowthVision;
