import React from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // Import icons for Moon (dark mode) and Sun (light mode)

const DarkModeToggle = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") || "light"
    );

    React.useEffect(() => {
        const htmlElement = document.documentElement; // Access the <html> element
        if (theme === "dark") {
            htmlElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            htmlElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    return (
        <div className="flex items-center justify-center p-4">
            <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="flex items-center px-4 py-2 text-white bg-blue-500 rounded-md dark:bg-yellow-500 dark:text-gray-900 transition-all duration-300"
            >
                {theme === "light" ? (
                    <>
                        <FaMoon className="mr-2" /> Dark Mode
                    </>
                ) : (
                    <>
                        <FaSun className="mr-2" /> Light Mode
                    </>
                )}
            </button>
        </div>
    );
};

export default DarkModeToggle;
