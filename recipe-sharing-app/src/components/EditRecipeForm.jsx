import { useState } from "react";
import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

const EditRecipeForm = ({ recipeId }) =>
{
    const recipe = useRecipeStore((state) => state.recipes.find((recipe) => recipe.id === recipeId));

    const [updatedTitle, setUpdatedTitle] = useState(recipe.title);
    const [updatedDescription, setUpdatedDescription] = useState(recipe.description);

    const { updateRecipe } = useRecipeStore();
    const navigate = useNavigate();

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        const updatedRecipe = { ...recipe, title: updatedTitle, description: updatedDescription };
        updateRecipe(updatedRecipe);
        navigate(`/recipes/${recipeId}`);
    };

    return (
        <form onSubmit={handleSubmit}>
        <h2>Edit Recipe</h2>
        <input
            type="text"
            value={updatedTitle}
            onChange={(event) => setUpdatedTitle(event.target.value)}
            placeholder="Recipe Title"
            required
        />
        <textarea
            value={updatedDescription}
            onChange={(event) => setUpdatedDescription(event.target.value)}
            placeholder="Recipe Description"
            required
        />
        <button type="submit">Update Recipe</button>
        </form>
    );
};

export default EditRecipeForm;
