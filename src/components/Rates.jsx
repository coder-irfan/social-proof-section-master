import React from "react";

function Rates() {
  const starsArray = Array(5).fill(0);

  const rates = [
    "Rated 5 Stars in Reviews",
    "Rated 5 Stars in Report Guru",
    "Rated 5 Stars in BestTech",
  ];

  return (
    <section className="w-[37.8125rem] lg:w-[27.8125rem] max-w-full lg:max-w-none mx-auto lg:mx-0 ">
      <div className="">
        {rates.map((text, i) => (
          <div key={i} className={`rate flex flex-col items-center space-y-2 rounded-md lg:flex-row lg:space-x-6 lg:space-y-0 
          bg-lightGrayishMagenta my-4 p-2 lg:px-8 lg:py-[0.875rem] ${i === 2 ? 'lg:-mb-3' : 0} ${i === 0 ? 'mt-0' : ''}
            ${ i === 1 ? 'lg:-translate-x-12' : i === 2 ? '' : 'lg:-translate-x-24'}`}
          >
            <div>
            {starsArray.map((_, idx) => (
              <img
                key={idx} 
                src="images/icon-star.svg" 
                alt="star"
                className="w-4 h-4 inline mx-1"
              />
            ))}
            </div>
            <p className="text-lg font-bold text-darkMagenta">{text}</p> 
          </div>
        ))}
      </div>
    </section>
  )
}

export default Rates;