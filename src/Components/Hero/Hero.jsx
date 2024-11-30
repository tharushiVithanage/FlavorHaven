import React from 'react';
import Image1 from '../../assets/Hero/image1.png'
import Image2 from '../../assets/Hero/pizza.png';
import Image3 from '../../assets/Hero/image8.png';
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "A Taste of Happiness Awaits You ",
    description: "Savor the flavors of our expertly crafted dishes, where every bite tells a story of freshness and passion...",
  },
  {
    id: 2,
    img: Image2,
    title: "More Than a Meal: It's an Experience",
    description: "At FlavorHaven, we believe dining is about more than just satisfying your hunger – it's about creating moments...",
  },
  {
    id: 3,
    img: Image3,
    title: "Fresh Ingredients, Flawless Taste",
    description: "We believe that great food starts with the best ingredients...",
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autopalySpeed: 4000,
    cssEase: false,
    pasueOnFocus: true,

  };
  return (
    <div className='relative overflow-hidden min-h-[550px] size-min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
      {/*background pattern */}
      <div className='h-[700px] w-[700px] bg-primary/40 absolute -top -1/2 right-0 rounded-3xl rotate-45 -z-9'></div>
      {/*hero section */}
      <div className='container pb-8 sm:pb-0'>
        {/*Slider section */}
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className='grid grid-cols-1 sm:grid-cols-2'>
                {/*text contenet section */}
                <div
                  className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'
                >
                  <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                    {data.title}
                  </h1>

                  <p className='text-sm'>At FlavorHaven, dining is more than a meal; it's an unforgettable experience. Step into a world of culinary excellence where passion meets perfection in every dish. Whether you’re here for a quick bite, a family gathering, or a special celebration, we promise to make your moments extraordinary.</p>
                  <div>
                    <button
                      className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 tesxt-white py-2 px-4 rounded-full'
                    >
                      More Details
                    </button>
                  </div>
                </div>
                {/*image section */}
                <div className='order-1 sm:order-2'>
                  <div className='relative z-10'>
                    <img
                      src={data.img}
                      alt=""
                      className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto' />
                  </div>
                </div>
              </div>
            </div>
          ))}

        </Slider>

      </div>
    </div>

  );
};

export default Hero;
