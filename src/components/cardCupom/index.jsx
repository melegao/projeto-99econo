import styled from "styled-components";

//começa modal
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ModalCupomContent from "../modalCupom";


//MODAL
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    height: 250,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: "8px",
    boxShadow: 5,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const StyleModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    background-color: white;
    border: 1px solid #000;
    border-radius: 8px;
    box-shadow: 5px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
    @media (max-width: 768px){
        width: 60%;
    }

  `
//MODAL

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
    padding: 5px 0px 10px 0px;
    
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        height: auto;
        width: 70%;
        gap: 10px
    }
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

    & span{
        font-size: 13px;
    }
`
const DivButtonCoupon = styled.div`
    padding-right: 20px;
`


const ButtonCoupon = styled.button`
    cursor: pointer;
    width: 150px;
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

    // COMEÇA MODAL
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // TERMINA MODAL

    const {description, code, discount, link, vigency, store} = props.cupom

    return(
        <CardDiv>
            <ImgSellerDiv>
                <img src={store.image} alt={store.name}/>
            </ImgSellerDiv>
            <ContentCoupon>
                <h4>Cupom {store.name}</h4>
                <p>{description}</p>
                <span>Validade: {vigency}</span>
            </ContentCoupon>
            <DivButtonCoupon>
                <ButtonCoupon onClick={handleOpen}>PEGAR CUPOM</ButtonCoupon>                
            </DivButtonCoupon>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <StyleModal>
                    <ModalCupomContent handleClose={handleClose} cupom={props.cupom}/>
                </StyleModal>
            </Modal>
        </CardDiv>
    )
}

export default CardCupom