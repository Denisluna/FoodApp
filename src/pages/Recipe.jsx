import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

function Recipe() {
    const params = useParams();
    const [recipeInfo, setRecipeInfo] = useState({});
    const [isInstructionsTab, setIsInstructionsTab] = useState(true);

    useEffect(() => {
        getRecipeInfo(params.recipeId);
    }, [params.recipeId]);

    const getRecipeInfo = (recipeId) => {
        fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(response => setRecipeInfo(response));
    }

    return (
        <DetailWrapper>
            <div>
                <h2>{recipeInfo.title}</h2>
                <img src={recipeInfo.image} alt={recipeInfo.title} />
            </div>
            <Info>
                <Button className={isInstructionsTab ? 'active' : ''} onClick={() => setIsInstructionsTab(true)}>Instructions</Button>
                <Button className={!isInstructionsTab ? 'active' : ''} onClick={() => setIsInstructionsTab(false)}>Ingredients</Button>
                {isInstructionsTab && (
                    <div>
                        <p dangerouslySetInnerHTML={{ __html: recipeInfo.summary }}></p>
                        <p dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }}></p>
                    </div>
                )}
                {!isInstructionsTab && (
                    <ul>
                        {
                            recipeInfo.extendedIngredients.map((ingredient) => (
                                <li key={ingredient.id}>{ingredient.original}</li>
                            ))
                        }
                    </ul>
                )}
            </Info>
        </DetailWrapper>

    )
}

const DetailWrapper = styled.div`
    min-height: 600px;
    margin-top: 6rem;
    margin-bottom: 10rem;
    display: flex;

    img {
        max-width: 550px;
    }

    h2 {
        letter-spacing: 5px;
        line-height: 5rem;
    }

    
`

const Button = styled.button`
    cursor: pointer;
    padding: 1rem 2rem;
    color: #313131;
    background-color: transparent;
    border: 2px solid #313131;
    margin-right: 1rem;
    font-weight: 600;

    &.active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
`

const Info = styled.div`
    margin-top: 5rem;
    margin-left: 2rem;

    ul {
        margin-top: 1rem;
        margin-left: 3rem;

        li {
            font-size: 1rem;
            line-height: 2.5rem;
        }
    }

    p {
        margin-top: 1rem;
        line-height: 1.5rem;
    }
`

export default Recipe