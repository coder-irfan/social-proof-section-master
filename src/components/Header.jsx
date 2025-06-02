import React from "react";

function Header() {
  return (
    <header className="header w-[37.5rem] max-w-full mx-auto lg:w-[20.625rem] xl:w-[26.625rem] lg:mx-0">
      <div className="container mb-11 lg:mb-0">
        <h1 className="headline text-[2.375rem] font-bold leading-8 text-darkMagenta mb-[1.525rem] lg:leading-[0.89] lg:mb-[1.625rem]
          md:text-[2.9rem] md:leading-10 xl:text-[3.4125rem]">10,000+ of our users love our products.</h1>
        <p className="text text-lg leading-6 text-darkMagenta">We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our services.</p>
      </div>
    </header>
  )
}

export default Header;