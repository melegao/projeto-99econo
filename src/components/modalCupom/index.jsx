import styled from "styled-components"
import { FaRegCopy, FaCheckCircle } from 'react-icons/fa'
import { MdOpenInNew } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ModalStyleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    & h4 {
        font-size: 20px;
        font-weight: bold;
        color: #464646;
    }

    & p {
        cursor: pointer;
    }
`
const ModalDivCupom = styled.div`
    border: 1px dashed black;
    padding: 10px 10px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & span {
        font-weight: bold;
        color: #f95669;
    }

    & button {
        width: 40%;
        background-color: #F4F4F4;
        border: 1px solid #F4F4F4;
        padding: 10px 6px;
        font-weight: bold;
        cursor: pointer;
    }

    & button:hover {
        background-color: #b8b8b8;
        border: 1px solid #b8b8b8;
    }
`
const ModalDivInformation = styled.p`
    font-size: 13px;
    margin-top: 5px;
`
const ButtonUrlStore = styled.button`
    background-color: #f95669;
    border: 1px solid #f95669;
    border-radius: 10px;
    padding: 13px 0px;
    color: #fff;
    font-size: 15px;
    

    &:hover{
        cursor: pointer;
        background-color: #d3283c;
        border: 1px solid #d3283c;
    }
`
const AllCouponsStore = styled.p`
    cursor: pointer;
    font-size: 14px;
    &:hover{
        text-decoration: underline;
    }
    `

function ModalCupomContent (props) {

    const navigate = useNavigate()

    const {code, link, store} = props.cupom
    
    const handleClose = props.handleClose

    const [copyCoupon, setCopyCoupon] = useState('Copiar ')
    const [urlComponada, setUrlComponada] = useState(false)

    

    useEffect(() => {
        if (code === 'URL CUPONADA'){
            setUrlComponada(true)
        }
    },[])


    const handleCopyCoupon = (coupon) => {
        navigator.clipboard.writeText(coupon)
        setCopyCoupon('Copiado ')
    }

    const handleClickUrl = (url) => {
        window.open(url,'_blank')
    }

    const loja = store.name.toLowerCase().split(' ').join('-').normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    return (
        <>
        <ModalStyleDiv>
            <h4>Confira as intruções de uso:</h4>
            <p onClick={handleClose}>X</p>
        </ModalStyleDiv>
        <div>
            <ModalDivCupom>
                <span>{code}</span>
                {!urlComponada && (<button onClick={() => handleCopyCoupon(code)}>{copyCoupon}{copyCoupon === 'Copiar ' ? <FaRegCopy />: <FaCheckCircle /> }</button>)}                
            </ModalDivCupom>
            <ModalDivInformation>
                {urlComponada? 'Não necessita de cupom, para validar a promoção, acesse o site com o link abaixo' : 'Copie o código acima e aplique no carrinho para obter o desconto.'}
            </ModalDivInformation>
        </div>
        <ButtonUrlStore onClick={() => handleClickUrl(link)}>Ir á loja <MdOpenInNew /></ButtonUrlStore>
        <AllCouponsStore onClick={() => navigate(`/lojas/${loja}`)}>Ver mais ofertas de {store.name}</AllCouponsStore>
        </>
    )
}

export default ModalCupomContent