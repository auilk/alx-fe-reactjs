import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import { useEffect } from 'react';
import SearchBar from "./SearchBar";

const RecipeList = () =>
{
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);
    const searchTerm = useRecipeStore(state => state.searchTerm);

    useEffect(() => { filterRecipes(); }, [searchTerm]);

    return (
        <div>
            <h2>Recipes</h2>
            <SearchBar />
            <ul>
                { 
                    filteredRecipes.length > 0 ? ( filteredRecipes.map(recipe => (
                        <li key={recipe.id}>
                            <h3>{recipe.title}</h3>
                            <p>{recipe.description}</p>
                            <Link to={`/recipes/${recipe.id}`}>View Details</Link>
                        </li>
                    )) ) : ( <p>No recipes found.</p> )
                }
            </ul>
        </div>
        );
};

export default RecipeList;
