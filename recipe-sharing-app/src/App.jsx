import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import RecipeList from "./components/RecipeList.jsx";
import AddRecipeForm from "./components/AddRecipeForm.jsx";
import FavoritesList from "./components/FavoritesList.jsx";
import Recommendations from "./components/RecommendationsList.jsx";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=
          {
            <div>
              <RecipeList />
              <FavoritesList />
              <Recommendations />
              <AddRecipeForm />
            </div>
          }
        />
        <Route path="/recipes/:id" element={ <RecipeDetailsWrapper /> } />
        <Route path="/recipes/edit/:id" element={ <EditRecipeFormWrapper /> } />
      </Routes>
    </BrowserRouter>
  );
};

const RecipeDetailsWrapper = () =>
{
  const { id } = useParams();
  return <RecipeDetails recipeId={id} />;
};

const EditRecipeFormWrapper = () =>
{
  const { id } = useParams();
  return <EditRecipeForm recipeId={id} />;
};

export default App;