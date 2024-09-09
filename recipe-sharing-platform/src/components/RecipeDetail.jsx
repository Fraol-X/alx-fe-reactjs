import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-xl text-gray-700">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        {recipe.title}
      </h1>
      
      <div className="bg-gradient-to-r from-purple-300 via-red-300 to-green-100 shadow-xl rounded-lg p-6 lg:p-12">
        <div className="flex justify-center mb-8">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 lg:h-96 object-cover rounded-lg border-4 border-white shadow-lg"
          />
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-gray-900">Ingredients</h2>
        <ul className="list-disc list-inside text-lg text-gray-800 space-y-2 pl-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2 className="text-3xl font-semibold mt-10 mb-4 text-gray-900">Instructions</h2>
        <ol className="list-decimal list-inside text-lg text-gray-800 space-y-4 pl-4">
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
