import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

function Popular() {

    const [popularRecipes, setPopularRecipes] = useState([]);

    useEffect(() => {
        getPopularRecipes();
    }, []);

    const getPopularRecipes = async () => {

        const storedRecipes = localStorage.getItem('popularRecipes');

        if (storedRecipes) {
            setPopularRecipes(JSON.parse(storedRecipes));

            return;
        }

        fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
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
                        perPage: 4,
                        gap: "1rem",
                        padding: "2rem",
                        pagination: false
                    }}>
                        {
                            popularRecipes.map(recipe => (
                                <SplideSlide key={recipe.id}>
                                    <Card>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title} />
                                        <CardGradient />
                                    </Card>
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
const Wrapper = styled.div`
    margin: 4rem 0;
`
const Card = styled.div`
    margin: 0 1rem;
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    p{
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        font-size: 1rem;
        text-align: center;
        font-weight: 900;
        z-index: 10;
    }

    img {
        border-radius: 2rem;
        position: absolute;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`
const CardGradient = styled.div`
    z-index: 3;
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
`
export default Popular