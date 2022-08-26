import styled from "styled-components";


//começa modal
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BasicModal from "../modal";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 300,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: "10px",
    boxShadow: 5,
    p: 4,
  };



//termina modal


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
                <p>Validade: {vigency}</p>
            </ContentCoupon>
            <div>
                <ButtonCoupon onClick={handleOpen}>PEGAR CUPOM</ButtonCoupon>                
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <div>
                        <p>Confira as intruções de uso:</p>
                        <p>X</p>
                    </div>
                    <div>
                        <span>{code}</span>
                        <button>Copiar</button>
                    </div>
                    <p>Copie o código acima e aplique no carrinho para obter o desconto.</p>
                    <button>Ir á loja</button>

                {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                    Confira as intruções de uso:
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
                <p>{code}</p> */}


                </Box>
            </Modal>
        </CardDiv>
    )
}

export default CardCupom