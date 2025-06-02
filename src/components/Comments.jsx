import React from "react";

const comment = [
  {
    id: 1,
    img: 'images/image-colton.jpg',
    name: 'Colton Smith',
    verification: 'Verified Buyer',
    text: '" We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! "',
  },

  {
    id: 2,
    img: 'images/image-irene.jpg',
    name: 'Irene Roberts',
    verification: 'Verified Buyer',
    text: '" Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery. "',
  },

  {
    id: 3,
    img: 'images/image-anne.jpg',
    name: 'Anne Wallace',
    verification: 'Verified Buyer',
    text: '" Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! "',
  }
]

function Comments() {
  return (
    <section className={`comments w-[37.8125rem] mx-auto max-w-full mt-8 lg:mt-[4.6875rem] lg:w-auto lg:mx-0`}>
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 xl:gap-[1.875rem]">
        {comment.map(({ id, img, name, verification, text }) => (
          <div key={id} className={`flex flex-col gap-6 bg-darkMagenta rounded-lg px-8 py-[2.375rem] ${ id === 2 ? 'lg:translate-y-4' : id === 3 ? 'lg:translate-y-8' : ''}`}>
            <div className="flex items-center gap-5">
              <img 
                src={img} 
                alt={name}
                className="w-10 h-10 rounded-full"
              />
  
              <div className="">
                <h4 className="text-[1.0625rem] text-white font-bold -mb-1">{name}</h4>
                <span className="text-[1.0625rem] text-softPink">{verification}</span>
              </div>
            </div>

            <p className="text-white text-[1.0185rem] font-medium leading-[1.375rem]">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Comments;