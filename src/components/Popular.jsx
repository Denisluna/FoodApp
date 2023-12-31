import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Card, CardGradient, Wrapper } from "../styled-components/styledComponents";
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

function Popular() {

    const [popularRecipes, setPopularRecipes] = useState([]);

    useEffect(() => {
        getPopularRecipes();
    }, []);

    const getPopularRecipes = () => {

        const storedRecipes = localStorage.getItem('popularRecipes');

        if (storedRecipes) {
            setPopularRecipes(JSON.parse(storedRecipes));

            return;
        }

        fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`)
            .then(response => response.json())
            .then(response => {
                setPopularRecipes(response.recipes);
                localStorage.setItem('popularRecipes', JSON.stringify(response.recipes));
            });
    }

    return (
        <Wrapper>
            <h3>Popular Picks</h3>
            {
                popularRecipes ? (
                    <Splide options={{
                        type: 'loop',
                        perPage: 3,
                        gap: "1.10rem",
                        padding: "2rem",
                        start: -1,
                        pagination: false
                    }}>
                        {
                            popularRecipes.map(recipe => (
                                <SplideSlide key={recipe.id}>
                                    <Link to={`/recipe/${recipe.id}`}>
                                        <Card>
                                            <p>{recipe.title}</p>
                                            <img src={recipe.image} alt={recipe.title} />
                                            <CardGradient />
                                        </Card>
                                    </Link>
                                </SplideSlide>
                            ))
                        }
                    </Splide>
                ) : (
                    <p>Loading...</p>
                )
            }
        </Wrapper>
    )
}

export default Popular