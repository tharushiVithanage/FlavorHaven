import React, { useEffect } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import backgroundImage from "../../assets/form_background.jpg"; // Adjust the path based on your folder structure

const AddRecepie = () => {
    useEffect(() => {
        // Initialize CKEditor
        ClassicEditor.create(document.querySelector("#content"))
            .then((editor) => {
                console.log("Editor initialized:", editor);
            })
            .catch((error) => {
                console.error("Editor initialization error:", error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
    };

    return (
        <div
            className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg relative bg-cover bg-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: "rgba(0, 0, 0, 0.8)", // Black background with transparency
                backgroundBlendMode: "overlay", // Blend the black and image
            }}
        >
            <h1 className="text-3xl font-bold text-orange-500 text-center mb-4">
                Add Recipe
            </h1>
            <p className="text-white text-center mb-8">
                Fill in the details below to create a new recipe. Add a title, detailed
                content, and an image to showcase your delicious creation!
            </p>
            <form onSubmit={handleSubmit}>
                {/* Title Input */}
                <div className="mb-6">
                    <label
                        htmlFor="title"
                        className="block text-lg font-bold text-white mb-1"
                    >
                        Recipe Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter the recipe title"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                        required
                    />
                </div>

                {/* Content Textarea */}
                <div className="mb-6">
                    <label
                        htmlFor="content"
                        className="block text-lg font-bold text-white mb-1"
                    >
                        Recipe Details
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-white text-black"
                        rows="6"
                        placeholder="Write the recipe details here..."
                        required
                    ></textarea>
                </div>

                {/* Image Upload */}
                <div className="mb-6">
                    <label
                        htmlFor="image"
                        className="block text-lg font-bold text-white mb-1"
                    >
                        Upload Recipe Image
                    </label>
                    <div className="relative">
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            className="hidden" // Hide the default file input
                        />
                        <label
                            htmlFor="image"
                            className="inline-block px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg cursor-pointer hover:bg-orange-600 focus:outline-none"
                        >
                            Choose File
                        </label>
                        <span className="ml-2 text-white">No file chosen</span> {/* Optional to show file status */}
                    </div>
                </div>


                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="px-8 py-2 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
                    >
                        Submit Recipe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddRecepie;

