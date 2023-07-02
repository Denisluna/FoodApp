import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide"
import { Card, CardGradient, Wrapper } from "../styled-components/styledComponents";
import '@splidejs/react-splide/css';

function Veggie() {

  const [veggieRecipes, setVeggieRecipes] = useState([]);

  useEffect(() => {
    getVeggieRecipes();
  }, [])

  const getVeggieRecipes = () => {

    const storedRecipes = localStorage.getItem('veggieRecipes');

    if (storedRecipes) {
      setVeggieRecipes(JSON.parse(storedRecipes));

      return;
    }

    fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
      .then(response => response.json())
      .then(response => {
        setVeggieRecipes(response.recipes);
        localStorage.setItem('veggieRecipes', JSON.stringify(response.recipes));
      });

  }

  return (
    <Wrapper>
      <h3>Our Vegetarian Picks</h3>
      {
        veggieRecipes ? (
          <Splide options={{
            type: 'loop',
            perPage: 4,
            gap: "1.10rem",
            padding: "2rem",
            pagination: false
          }}>
            {
              veggieRecipes.map(recipe => (
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

export default Veggie