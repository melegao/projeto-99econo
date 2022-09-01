import styled from "styled-components";
import Ads320x50 from "../lomadee/320x50";
import Ads468x60 from "../lomadee/468x60"
import Ads970x90 from "../lomadee/970x90"


function AdsHeader () {

    const AdsScreenMobile = styled.div`
        @media (min-width: 970px) {
            display: none;
        }
    `
    const AdsScreenDesktop = styled.div`
    @media (max-width: 969px) {
        display: none;
    }
`

    return (
        <>
        <AdsScreenMobile>
            <Ads320x50 />
        </AdsScreenMobile>
        <AdsScreenDesktop>
            <Ads970x90 />
        </AdsScreenDesktop>
        </>
    )
}

export default AdsHeader