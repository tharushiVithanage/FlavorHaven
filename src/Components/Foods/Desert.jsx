import React from 'react';
import Image1 from '../../assets/Desert/chocolate-brownie-cake-piece-stack-plate-homemade-pastries.jpg';
import Image2 from '../../assets/Desert/front-view-delicious-chocolate-cake.jpg';
import Image3 from '../../assets/Desert/side-view-thai-ice-cream-roll-topped-with-colorful-sprinkles-cardboard-bowl-black-wall.jpg';
import Image4 from '../../assets/Desert/strawberry-cheesecake-isolated-white-background.jpg';
import Image5 from '../../assets/Desert/tasty-homemade-tiramisu-cake.jpg';
import Image6 from '../../assets/Desert/tasty-hot-chocolate-with-cream.jpg';



const DesertData = [
    {
        id: 1,
        img: Image1,
        title: "Fudge Brownie Sundae  ",
        description: "The Fudge Brownie Sundae is a decadent creation featuring warm, gooey brownies topped with creamy vanilla ice cream. Finished with a drizzle of rich chocolate fudge, whipped cream, and a cherry on top, it’s a dessert that combines the best of both worlds—warm and cold, soft and crunchy.",
    },
    {
        id: 2,
        img: Image2,
        title: "Chocolate Lava Cake  ",
        description: "Our Chocolate Lava Cake is a decadent dessert with a soft, moist exterior that gives way to a warm, gooey chocolate center. Baked to perfection and served with a scoop of vanilla ice cream or a dollop of whipped cream, it’s a heavenly treat for any chocolate lover. Perfectly indulgent and irresistibly satisfying.",
    },
    {
        id: 3,
        img: Image3,
        title: "Ice Cream ",
        description: "Our chocolate base Ice Cream is a timeless treat, made with real vanilla beans for a rich, creamy, and indulgent flavor. Each scoop is perfectly smooth, delightfully refreshing, and full of classic vanilla goodness, making it an ideal dessert on its own or a delightful pairing with your favorite desserts.",
    },
    {
        id: 4,
        img: Image4,
        title: "Cheesecake",
        description: "Our New York Cheesecake is a creamy and luxurious classic, made with rich cream cheese and a buttery graham cracker crust. Topped with a layer of sweetened sour cream or fresh fruit compote, it’s smooth, tangy, and utterly delicious. A timeless dessert that never fails to impress.",
    },
    {
        id: 5,
        img: Image5,
        title: "Tiramisu",
        description: "Our Tiramisu is a delightful Italian dessert featuring layers of coffee-soaked ladyfingers and a creamy mascarpone filling. Topped with a dusting of cocoa powder, it’s a perfect balance of bold coffee flavors and sweet creaminess. A sophisticated and satisfying way to end any meal.",
    },
    {
        id: 6,
        img: Image6,
        title: "Chocolate Lava Cake",
        description: "Our Chocolate Lava Cake is a decadent dessert with a soft, moist exterior that gives way to a warm, gooey chocolate center. Baked to perfection and served with a scoop of vanilla ice cream or a dollop of whipped cream, it’s a heavenly treat for any chocolate lover. Perfectly indulgent and irresistibly satisfying.",
    },


];
const Desert = () => {
    return (
        <div>
            <div className='container'>
                {/*Header section*/}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className='text-xl font-serif text-primary'>
                        Indulge in Sweet Delights with Our Dessert Menu!
                    </p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>
                        Desserts

                    </h1>
                </div>
                {/*Body section*/}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-8'>
                        {/* Card section */}
                        {DesertData.map((data) => (
                            <div
                                data-aos="fade-up"
                                key={data.id}
                                className='space-y-4 bg-gray-100 shadow-lg rounded-lg p-4 hover:bg-gray-200 transition-colors'
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

export default Desert
