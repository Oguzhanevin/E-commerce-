import React from "react";
import PracticeCard from "./PracticeCard";

const PracticeSection = () => {
  return (
    <div>
      {/* Başlık ve açıklama */}
      <div className="p-4 md:p-0 mt-16 text-center font-sans text-[#252B42] md:text-center">
        <h3 className="text-sm font-semibold text-[#23A6F0]">
          Practice Advice
        </h3>
        <h2 className="my-4 p-4 md:p-0 mx-28 md:mx-0 text-3xl font-bold">
          Fashion Tips
        </h2>
      </div>

      <div className="md:flex md:justify-center md:items-center md:flex-wrap md:gap-1">
        <PracticeCard
          image="https://stylecaster.com/wp-content/uploads/2016/04/street-style-camo.jpg?w=712&h=400&crop=1"
          title="101 Fashion Tips & Tricks"
          description="Discover the essential fashion tips and tricks every girl should know."
          date="15 July 2024"
          comments="5"
          url="https://stylecaster.com/fashion/fashion-tips/164491/101-fashion-tips-tricks-every-girl-should-know/"
        />
        <PracticeCard
          image="https://www.boredpanda.com/blog/wp-content/uploads/2023/05/style-tips_3-645a14f3221f2__700.jpg"
          title="47 Style Tips To Look Your Best"
          description="Explore a wide range of style tips for a modern look."
          date="18 July 2024"
          comments="8"
          url="https://www.boredpanda.com/style-tips/"
        />
        <PracticeCard
          image="https://cdn.suitdirect.co.uk/upload/blog/bcc06-man_overdressed_with_suit.jpg"
          title="Top 10 Casual Fashion Tips"
          description="Check out the top casual fashion tips for men."
          date="22 July 2024"
          comments="12"
          url="https://www.suitdirect.co.uk/styleguide/features/top-10-casual-fashion-tips-for-men"
        />
      </div>
    </div>
  );
};

export default PracticeSection;
