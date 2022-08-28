import styled from "styled-components";
import logo from '../../assets/images/99econo-logo.png'
import { useNavigate } from 'react-router-dom';

const HeaderSyle = styled.div`
    width: auto;
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    margin-bottom: 20px;
    padding-left: 100px;
    padding-right: 100px;
`
const NavBarImage = styled.div`
    cursor: pointer;
`
const NarBarLinks = styled.ul`
    display: flex;
    gap: 20px;

    & li{
        cursor: pointer;
        font-weight: 500;
        font-size: 17px;
    }

    & li:hover{
        color: #f95669;
    }
`
const NarBarDivButton = styled.div`
    
    & button {
        cursor: pointer;
        background-color: #fff;
        border: 1px solid #f95669;
        border-radius: 5px;
        color: #f95669;
        font-size: 15px;
        font-weight: 500;
        padding: 10px 15px;
    }
    & button:hover{
        background-color: #f95669;
        color: #fff
    }
`

const Header = () => {

    const navigate = useNavigate()

    return (
        <HeaderSyle>
            <NavBarImage onClick={() => navigate("/")}>
                <img src={logo} alt='99econo' height='70px'/>
            </NavBarImage>
            <div>
                <NarBarLinks>
                    <li onClick={() => navigate("/")}>CUPONS</li>
                    <li>OFERTAS</li>
                    <li onClick={() => navigate("/lojas")}>LOJAS</li>
                </NarBarLinks>
            </div>
            <NarBarDivButton>
                <button>Entrar</button>
            </NarBarDivButton>
        </HeaderSyle>
    )
}

export default Header