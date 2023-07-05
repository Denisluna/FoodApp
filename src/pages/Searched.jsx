import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { Grid, GridCard } from '../styled-components/styledComponents'

function Searched() {
    const params = useParams();
    const [searchedRecipes, setSearchedRecipes] = useState([]);

    useEffect(() => {
        getSearchedRecipes(params.search);
    }, [params.search])

    const getSearchedRecipes = searchQuery => {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchQuery}`)
            .then(response => response.json())
            .then(response => {
                setSearchedRecipes(response.results);
            })
    }

    return (
        searchedRecipes ? (
            <Grid>
                {
                    searchedRecipes.map((recipe) => (
                        <Link to={`/recipe/${recipe.id}`}>
                            <GridCard key={recipe.id}>
                                <img src={recipe.image} alt={recipe.title} />
                                <h4>{recipe.title}</h4>
                            </GridCard>
                        </Link>
                    ))
                }
            </Grid>
        ) : (
            <p>Loading...</p>
        )
    )
}

export default Searched