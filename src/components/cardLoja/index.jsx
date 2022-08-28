import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CardStore = styled.div`
    background-color: #fff;
    width: 190px;
    height: 215px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #C4C4C4;
    border-radius: 5px;
    box-shadow: 2px 2px 5px #C4C4C4;

`
const ButtonCoupon = styled.button`
    cursor: pointer;
    
    background-color: #f95669;
    border: 1px solid #f95669;
    border-radius: 5px;
    padding: 5px 15px;
    color: #fff;
    font-weight: bold;
    &:hover{
        background-color: #d3283c;
        border: 1px solid #d3283c;
    }
`


function CardLoja (props) {

    const navigate = useNavigate()

    const {name, image, id} = props.store

    const handleClick = (name, id) => {

        const store = name.toLowerCase().split(' ').join('-')

        navigate(`/lojas/${store}/${id}`)
    }

    return (
        <CardStore>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <ButtonCoupon onClick={() => handleClick(name, id)}>Ver cupons</ButtonCoupon>
        </CardStore>
    )
}

export default CardLoja