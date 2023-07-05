import { Link } from "react-router-dom"
import { styled } from "styled-components"
import { GiKnifeFork } from "react-icons/gi"

function Logo() {
    return (
        <Nav>
            <GiKnifeFork />
            <LogoLink to={'/'}>deliciousss</LogoLink>
        </Nav>
    )
}

const LogoLink = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-family: 'Satisfy', cursive;
`

const Nav = styled.nav`
    padding: 4rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    svg {
        font-size: 2rem;
        margin-right: 1rem;
    }
`

export default Logo