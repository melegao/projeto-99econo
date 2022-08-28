import styled from "styled-components"
import Burguer from "./burguer"
import logo from '../../assets/images/99econo-logo.png'
import { useNavigate } from "react-router-dom"

const Nav = styled.nav`
    height: 80px;
    background-color: #fff;
    border-bottom: 2px solid #f1f1f1;
    padding: 0 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    
 
`

const NavBarImage = styled.div`
    cursor: pointer;
    @media (max-width: 768px){
        position: absolute;
        right: 45%;
    }
`


function NavBar () {

    const navigate = useNavigate()

    return(
      <Nav>
        <NavBarImage onClick={() => navigate("/")}>
            <img src={logo} alt='99econo' height='65px'/>
        </NavBarImage>
        <Burguer />
      </Nav>
    )
}

export default NavBar