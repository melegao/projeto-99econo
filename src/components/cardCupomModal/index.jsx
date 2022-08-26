

function CardCupomModal (props) {

    const {description, code, discount, link, vigency, store} = props.cupom

    return (
        <>
            <p>{store}</p>
            <p>{code}</p>
        </>
    )
}

export default CardCupomModal