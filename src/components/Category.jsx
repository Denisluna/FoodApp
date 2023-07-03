import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'

function Category() {
    return (
        <NavList>
            <SLink to={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to={'/cuisine/American'}>
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to={'/cuisine/Thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </SLink>
            <SLink to={'/cuisine/Chinese'}>
                <GiChopsticks />
                <h4>Chinese</h4>
            </SLink>
        </NavList>
    )
}

const NavList = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    text-align: center;
`
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    text-decoration: none;
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
    background: linear-gradient(35deg, #34495e, #2c3e50);

    h4{
        color: white;
        font-size: 0.7rem;
        margin: 0.5rem;
    }

    svg{
        color: white;
        font-size: 1.5rem;
    }

    &.active{
        background: linear-gradient(to right, #f1c40f, #d35400);
    }
`

export default Category