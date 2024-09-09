import React, { useState, useEffect } from "react";
import data from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
    console.log(data);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6" >Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-gradient-to-r from-purple-300 via-red-300 to-green-100 shadow-lg p-4 rounded-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 transform-gpu">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-t-lg border-4 border-white shadow-md" />
            <h2 className="text-xl font-semibold mt-4 text-black">{recipe.title}</h2>
            <p className="text-gray-600 mt-2">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
