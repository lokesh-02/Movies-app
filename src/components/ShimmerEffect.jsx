import React from 'react';

const ShimmerEffect = () => {
  return (
    <>
      <style>
        {`
          @keyframes shimmer {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }
        `}
      </style>
      <div className="flex flex-wrap gap-8 m-10">
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            key={index}
            className="h-[40vh] w-[200px] bg-gradient-to-r from-[#8c8e93] via-[#dfe1e4] to-[#4a5568] bg-[length:200%_100%] animate-shimmer rounded-lg"
            style={{
              background: 'linear-gradient(90deg, #8c8e93 25%, #dfe1e4 50%, #8c8e93 75%)',
              backgroundSize: '200% 100%',
              animationDuration: '0.1s', // Shorter duration for quicker shimmer appearance
              animationTimingFunction: 'ease-in-out', 
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ShimmerEffect;
