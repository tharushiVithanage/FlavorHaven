import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter,  FaYoutube } from "react-icons/fa";
import Banner from "../../assets/Banner.jpg";

const Footer = () => {
    // State to hold the current year
    const [currentYear, setCurrentYear] = useState(null);

    // State to hold the active social media icon
    const [activeIcon, setActiveIcon] = useState(null);

    // Use effect to set the current year when the component mounts
    useEffect(() => {
        const year = new Date().getFullYear();
        setCurrentYear(year); // Update the current year in the state
    }, []);

    // JavaScript function to handle social media icon clicks
    const handleSocialMediaClick = (platform) => {
        // Update active icon to the clicked platform
        setActiveIcon(platform);

        let url = "";
        switch (platform) {
            case "Facebook":
                url = "";
                break;
            case "Instagram":
                url = "";
                break;
            case "Twitter":
                url = "";
                break;
            
            case "YouTube":
                url = "";
                break;
            default:
                break;
        }
        // Open the social media URL in a new tab
        window.open(url, "_blank");
    };

    return (
        <footer
            className="bg-cover bg-center text-gray-300 py-10 mt-8"
            style={{
                backgroundImage: `url(${Banner})`,
                backgroundAttachment: "fixed", // Keeps the background stable
            }}
        >
            <div className="container mx-auto px-4">
                {/* Small Paragraph */}
                <div className="text-center mb-6">
                    <p className="text-gray-400 text-sm md:text-base">
                        Welcome to FlavorHaven, your destination for diverse recipes that inspire culinary creativity. Explore quick meals, gourmet dishes, and step-by-step guides for all your cooking needs.
                    </p>
                </div>

                {/* Links Section */}
                <div className="flex justify-center gap-8 mb-6">
                    {["About", "Blog", "Jobs", "Press", "Accessibility", "Partners"].map(
                        (item, index) => (
                            <a
                                key={index}
                                href="#"
                                className="text-gray-400 hover:text-white transition duration-200 text-sm md:text-base"
                            >
                                {item}
                            </a>
                        )
                    )}
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-6 mb-6">
                    <a
                        href="#"
                        onClick={() => handleSocialMediaClick("Facebook")}
                        className={`p-3 rounded-full transition duration-200 ${activeIcon === "Facebook" ? "bg-blue-600" : "bg-gray-700"
                            } hover:bg-blue-500`}
                        aria-label="Facebook"
                    >
                        <FaFacebookF className="text-white" />
                    </a>
                    <a
                        href="#"
                        onClick={() => handleSocialMediaClick("Instagram")}
                        className={`p-3 rounded-full transition duration-200 ${activeIcon === "Instagram" ? "bg-pink-600" : "bg-gray-700"
                            } hover:bg-pink-500`}
                        aria-label="Instagram"
                    >
                        <FaInstagram className="text-white" />
                    </a>
                    <a
                        href="#"
                        onClick={() => handleSocialMediaClick("Twitter")}
                        className={`p-3 rounded-full transition duration-200 ${activeIcon === "Twitter" ? "bg-blue-400" : "bg-gray-700"
                            } hover:bg-blue-300`}
                        aria-label="Twitter"
                    >
                        <FaTwitter className="text-white" />
                    </a>
                  
                    <a
                        href="#"
                        onClick={() => handleSocialMediaClick("YouTube")}
                        className={`p-3 rounded-full transition duration-200 ${activeIcon === "YouTube" ? "bg-red-600" : "bg-gray-700"
                            } hover:bg-red-500`}
                        aria-label="YouTube"
                    >
                        <FaYoutube className="text-white" />
                    </a>
                </div>

                {/* Decorative Divider */}
                <div className="border-t border-gray-500 w-3/4 mx-auto my-6"></div>

                {/* Copyright Section */}
                <div className="text-center text-gray-500 mt-6">
                    © {currentYear ? currentYear : "2024"} Your Company, Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
