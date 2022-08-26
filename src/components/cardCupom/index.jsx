import styled from "styled-components";


const CardDiv = styled.div`
    width: 80%;
    height: 150px;
    border: 1px solid #C4C4C4;
    border-radius: 5px;
    box-shadow: 2px 2px 5px #C4C4C4;
    background-color: #fff;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1rem;
    padding: 0px 5px;
`

const ImgSellerDiv = styled.div`
    width: 190px;
    height: 140px;
`

const ContentCoupon = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    & h4{
        color: #f95669;
        font-size: 20px;
        font-weight: bold;
    }
`

const ButtonCoupon = styled.button`
    cursor: pointer;
    background-color: #f95669;
    border: 1px solid #f95669;
    border-radius: 5px;
    padding: 10px 15px;
    color: #fff;
    font-weight: bold;
    &:hover{
        background-color: #d3283c;
        border: 1px solid #d3283c;
    }
`


const CardCupom = (props) => {

    
    

    const {description, code, discount, link, vigency, store} = props.cupom

    

    return(
        <CardDiv>
            <ImgSellerDiv>
                <img src={store.image} alt={store.name}/>
            </ImgSellerDiv>
            <ContentCoupon>
                <h4>Cupom {store.name}</h4>
                <p>{description}</p>
                <p>Validade: {vigency}</p>
            </ContentCoupon>
            <div>
                <ButtonCoupon>PEGAR CUPOM</ButtonCoupon>                
            </div>
        </CardDiv>
    )
}

export default CardCupom