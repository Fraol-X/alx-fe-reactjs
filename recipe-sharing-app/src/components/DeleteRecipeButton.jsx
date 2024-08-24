import React from 'react'
import { useNavigate } from 'react-router-dom'
import useRecipeStore from './recipeStore'

function DeleteRecipeButton() {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe)
    const navigate = useNavigate()
    const handleClick = () => {
        deleteRecipe(recipeId);
        navigate('/')
    }
    return (
        <div>
            <button onClick ={handleClick}>Delete Recipe</button>
        </div>
    )
}

export default DeleteRecipeButton