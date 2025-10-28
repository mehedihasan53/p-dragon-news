import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-4 bg-base-200 p-4 mt-7">
      <p className="btn btn-secondary px-6 py-2">Latest</p>

      <Marquee
        className="flex gap-8"
        pauseOnHover={true}
        speed={80}
        gradient={false}
      >
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eaque.
        </p>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eaque.
        </p>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eaque.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
