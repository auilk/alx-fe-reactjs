import { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";

const Recommendations = () =>
{
    const { recommendations, generateRecommendations } = useRecipeStore(state => ({ recommendations: state.recommendations, generateRecommendations: state.generateRecommendations }));

    useEffect(() => { generateRecommendations(); }, []);

    return (
        <div>
        <h2>Recommended Recipes</h2>
        <ul>
            {
                recommendations.length > 0 ? (recommendations.map(recipe => (
                    <li key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                    </li>
                ))
                ) : (<p>No recommendations available.</p>)
            }
        </ul>
        </div>
    );
};

export default Recommendations;
