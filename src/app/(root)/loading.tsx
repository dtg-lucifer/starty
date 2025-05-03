import React from "react";

const Loading = () => {
  return (
    <div className="section_container">
      <h2 className="mb-6 text-30-semibold">
        Fetching the latest and greatest startups for you...
      </h2>
      <div className="card_grid">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="group">
            <div
              className="bg-white px-5 py-6 border-[5px] border-black rounded-[22px] overflow-hidden"
              style={{ boxShadow: "2px 2px 0px 2px rgb(0, 0, 0)" }}
            >
              {/* Gradient animation overlay */}
              {
                /* <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_1.5s_infinite]"
                style={{ backgroundSize: "200% 100%" }}
              >
              </div> */
              }

              {/* Date pill */}
              <div className="bg-[#ffe8f0] px-4 py-2 rounded-full w-32 h-8">
              </div>

              {/* Author info */}
              <div className="flex items-center gap-2 mt-4">
                <div className="bg-gray-200 rounded-full w-10 h-10"></div>
                <div className="bg-gray-200 rounded-md w-24 h-5"></div>
              </div>

              {/* Title */}
              <div className="bg-gray-200 mt-3 rounded-md w-full h-7"></div>

              {/* Description - two lines to match line-clamp-2 */}
              <div className="space-y-1.5 my-3">
                <div className="bg-gray-200 rounded-md w-full h-4"></div>
                <div className="bg-gray-200 rounded-md w-4/5 h-4"></div>
              </div>

              {/* Image */}
              <div className="bg-gray-200 rounded-[10px] w-full h-[164px]">
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mt-4">
                <div className="bg-[#ffe8f0] px-4 py-2 rounded-full w-fit h-8">
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-gray-200 rounded-full w-6 h-6"></div>
                  <div className="bg-gray-200 rounded-md w-6 h-5"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
