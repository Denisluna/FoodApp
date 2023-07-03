import { styled } from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

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
                        <Card key={recipe.id}>
                            <img src={recipe.image} alt={recipe.title} />
                            <h4>{recipe.title}</h4>
                        </Card>
                    ))
                }
            </Grid>
        ) : (
            <p>Loading...</p>
        )
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 1rem;
`
const Card = styled.div`
    text-align: center;
    
    img{
        width: 100%;
        border-radius: 2rem;
    }

    a{
        text-decoration: none;
    }
    
`

export default Cuisine