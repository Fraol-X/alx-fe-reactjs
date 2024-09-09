import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!ingredients) newErrors.ingredients = "Ingredients are required";
    if (ingredients.split('\n').length < 2) newErrors.ingredients = "At least two ingredients are required";
    if (!steps) newErrors.steps = "Instructions are required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log({ title, ingredients, steps });
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Add a New Recipe
      </h2>
      <form onSubmit={handleSubmit} className="bg-gradient-to-r from-purple-300 via-red-300 to-green-100 shadow-xl rounded-lg p-6 lg:p-12">
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Ingredients
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="6"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
