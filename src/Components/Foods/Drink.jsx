import React from 'react';
import Image1 from '../../assets/Drinks/mango-shake-fresh-tropical-fruit-smoothies.jpg';
import Image2 from '../../assets/Drinks/sangria-with-fruits-mint-white.jpg';
import Image3 from '../../assets/Drinks/tropical-juice-with-lemon-slice-top.jpg';
import Image4 from '../../assets/Drinks/coconut-cocktail-white-surface.jpg';
import Image5 from '../../assets/Drinks/lemon-ice-tea-table.jpg';
import Image6 from '../../assets/Drinks/honey-lemon-soda-beverage-photography.jpg';
import Image7 from '../../assets/Drinks/cold-coffee-frappe-with-cream.jpg';

const DrinktData = [
  {
    id: 1,
    img: Image1,
    title: "Tropical Mango Smoothie ",
    description: "The Tropical Mango Smoothie is a creamy blend of ripe, juicy mangoes and a touch of tropical goodness. Made with fresh ingredients, it’s rich in flavor and naturally sweet. This smoothie is like a mini-vacation in a glass, perfect for any mango lover.",
  },
  {
    id: 2,
    img: Image2,
    title: "Summer Fruit Punch ",
    description: "The Summer Fruit Punch is a vibrant fusion of tropical fruits, including strawberries, pineapples, and oranges. This colorful blend is naturally sweet and served chilled to capture the essence of sunny days. It’s a fruity escape that’s as refreshing as it is delicious.",
  },
  {
    id: 3,
    img: Image3,
    title: "Orange Sunset Mocktail ",
    description: "Our Orange Sunset Mocktail is a stunning mix of tangy orange juice, a hint of grenadine, and a touch of fizz. This drink not only tastes great but also looks like a summer sunset in a glass. A perfect choice for those who love citrusy flavors with a touch of elegance.",
  },
  {
    id: 4,
    img: Image4,
    title: "Coconut Cooler",
    description: "The Coconut Cooler is a creamy and smooth drink made from fresh coconut milk and served ice-cold. With its rich, tropical flavor, it’s a perfect way to refresh and indulge. A true tropical escape in every sip, ideal for hot days or any time you need a chill moment.",
  },
  {
    id: 5,
    img: Image5,
    title: "Iced Mint Green Tea",
    description: "Our Iced Mint Green Tea is a rejuvenating blend of smooth green tea and fresh mint leaves. Served over ice, it offers a crisp and refreshing flavor that’s perfect for cooling down. A drink that’s both soothing and invigorating, ideal for any tea enthusiast.",
  },
  {
    id: 6,
    img: Image6,
    title: "Classic Lemonade",
    description: "Our Classic Lemonade is a refreshing drink crafted with freshly squeezed lemons, lightly sweetened, and chilled to perfection. It delivers a perfect balance of tangy and sweet flavors, making it an ideal choice for any time of the day. Simple, timeless, and incredibly satisfying.",
  },
  {
    id: 7,
    img: Image7,
    title: "Chocolate Milkshake",
    description: "Our Chocolate Milkshake is a rich and creamy delight, crafted with velvety chocolate ice cream and blended to smooth perfection. Topped with a swirl of whipped cream , it’s a sweet indulgence that satisfies every chocolate lover’s cravings.  ",
  },

];

const Drink = () => {
  return (
    <div>
      <div className='container'>
        {/* Header section */}
        <div className='text-center mb-16 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-xl font-serif text-primary'>
            Discover Refreshing Drinks with Our Website!
          </p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>
            Drinks
          </h1>
        </div>
        {/* Body section */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4'>
            {/* Card section */}
            {DrinktData.map((data) => (
              <div
                data-aos="fade-up"
                key={data.id}
                className='space-y-4 bg-gray-100 shadow-lg rounded-lg p-6 mb-6 hover:bg-gray-200 transition-colors'
              >
                {/* Image */}
                <img
                  src={data.img}
                  alt={data.title}
                  className='h-[300px] w-[250px] object-cover rounded-lg'
                />
                {/* Text */}
                <div className="text-center">
                  <h3
                    data-aos="fade-up"
                    className='font-semibold text-lg'
                  >
                    {data.title}
                  </h3>

                  <p
                    className='text-sm text-gray-600 mt-2'
                  >
                    {data.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drink;
