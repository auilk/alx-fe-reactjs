import { useState } from "react";
import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

const AddRecipeForm = () =>
{
    const { addRecipe } = useRecipeStore();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        const newRecipe = {
        id: Date.now().toString(),
        title,
        description,
        };
        addRecipe(newRecipe);
        setTitle("");
        setDescription("");
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit}>
        <h2>Add a New Recipe</h2>
        <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Recipe Title"
            required
        />
        <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Recipe Description"
            required
        />
        <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipeForm;
