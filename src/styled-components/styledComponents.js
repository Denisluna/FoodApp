import { styled } from "styled-components";

export const Wrapper = styled.div`
margin: 4rem 0;
`

export const Card = styled.div`
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
export const CardGradient = styled.div`
    z-index: 3;
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 1rem;
`
export const GridCard = styled.div`
    text-align: center;
    
    img{
        width: 100%;
        border-radius: 2rem;
    }

    a{
        text-decoration: none;
    }
    
`
