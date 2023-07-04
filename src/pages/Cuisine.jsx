import { styled } from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Grid, GridCard } from '../styled-components/styledComponents'

function Cuisine() {

    const params = useParams();
    const [cuisineRecipes, setCuisineRecipes] = useState([]);

    useEffect(() => {
        getCuisineRecipes(params.type);
    }, [params.type])

    const getCuisineRecipes = name => {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
            .then(response => response.json())
            .then(response => {
                setCuisineRecipes(response.results);
            });
    }

    return (
        cuisineRecipes ? (
            <Grid>
                {
                    cuisineRecipes.map((recipe) => (
                        <GridCard key={recipe.id}>
                            <img src={recipe.image} alt={recipe.title} />
                            <h4>{recipe.title}</h4>
                        </GridCard>
                    ))
                }
            </Grid>
        ) : (
            <p>Loading...</p>
        )
    )
}

export default Cuisine