import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = ({ recipeId }) =>
{
    const recipe = useRecipeStore((state) => state.recipes.find((recipe) => recipe.id === recipeId));

    if (!recipe)
    {
        return <div>Recipe not found</div>;
    }

    return (
        <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>

        <Link to={`/recipes/edit/${recipe.id}`}> <button>Edit Recipe</button> </Link>

        <DeleteRecipeButton recipeId={recipe.id} />
        </div>
    );
};

export default RecipeDetails;
