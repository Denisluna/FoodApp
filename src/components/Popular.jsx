import { useEffect, useState } from "react";

function Popular() {

    const [popularRecipes, setPopularRecipes] = useState([]);

    useEffect(() => {
        getPopularRecipes();
    }, []);

    const getPopularRecipes = async () => {
        fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
            .then(response => response.json())
            .then(response => setPopularRecipes(response.recipes));
    }
    
    return (
        <div>
            {
                popularRecipes ? (
                    popularRecipes.map(recipe => (
                        <div key={recipe.id}>
                            <p>{recipe.title}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )
            }
        </div>
    )
}

export default Popular