import React from 'react';
import Image1 from '../../assets/Top/burgerbun.jpg';
import Image2 from '../../assets/Top/fridrice.jpg';
import Image3 from '../../assets/Top/koththu.jpg';
import Image4 from '../../assets/Top/pasta.jpg';
import Image5 from '../../assets/Top/pizza2.jpg';
import Image6 from '../../assets/Top/seafood.jpg';

const BreakfastData = [
    {
        id: 1,
        img: Image1,
        title: "Chicken Burger",
        description: "Our Crispy Chicken is seasoned and fried to golden perfection, offering a crispy, tender bite with every crunch. Made with high-quality chicken and a special blend of spices, it’s perfect for pairing with sauces and sides. Whether as a snack or a meal, it’s sure to satisfy your cravings.",
    },
    {
        id: 2,
        img: Image2,
        title: "Crispy Chicken",
        description: "Our Crispy Chicken is perfectly seasoned and fried to golden perfection, offering a juicy. Made with premium cuts of chicken, coated in a special blend of spices, it’s a treat you won’t want to miss. Pair it with your favorite dips and sides for the ultimate experience!",
    },
    {
        id: 3,
        img: Image3,
        title: "Koththu",
        description: "Kottu, Sri Lanka's favorite street food, is a delicious mix of chopped flatbread stir-fried with your choice . Infused with aromatic spices and served piping hot, every bite bursts with flavor and texture. Perfect for a hearty and satisfying meal!",
    },
    {
        id: 4,
        img: Image4,
        title: "Cheese Pasta",
        description: "Indulge in our creamy Cheese Pasta, a delightful fusion of perfectly cooked pasta and rich, velvety cheese sauce. Topped with a sprinkle of herbs and a hint of garlic, it’s comfort food at its finest. Perfect for cheese lovers craving a hearty and satisfying meal!",
    },
    {
        id: 5,
        img: Image5,
        title: "Pizza",
        description: "Savor the flavors of our freshly baked pizzas, crafted with a crispy, golden crust and topped with the finest ingredients. Choose from classic Margherita, spicy Pepperoni, or our signature Veggie Supreme. Each pizza is loaded with melted cheese and bursting with bold flavors, making it a perfect treat for any occasion!",
    },
    {
        id: 6,
        img: Image6,
        title: "Seafood Platter",
        description: "Dive into our bountiful Seafood Platter, a luxurious feast featuring an assortment of the ocean's finest. Enjoy succulent prawns, crispy calamari, tender crab, and perfectly grilled fish, complemented by zesty dips and fresh lemon. A true delight for seafood lovers, perfect for sharing or indulging solo!",
    },
];

const TopItem = () => {
    return (
        <div className='mt-14 mb-12'>
            <div className='container'>
                {/* Header section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className='text-xl font-serif text-primary'>
                        Start Your Day Right, Delicious Breakfast Selections
                    </p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>
                        Top Selections
                    </h1>
                </div>
                {/* Body section */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-8'>
                        {/* Card section */}
                        {BreakfastData.map((data) => (
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
                                        className='text-sm text-gray-600'
                                    >
                                        {data.color}
                                    </p>
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
    );
};

export default TopItem;
