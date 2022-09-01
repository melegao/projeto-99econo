import React, { useEffect } from "react";

import styled from "styled-components";

const DivAds = styled.div`
    display: flex;
    justify-content: center;
`

const Ads320x50 = () => {

    const sourceId = "37644826";

    useEffect(() => {
        var iframe = document.createElement("iframe");
        iframe.src = `http://ad.lomadee.com/banner/view?sourceId=${sourceId}&dimension=7&width=320&height=50&method=0&advertisers=&tags=`;
        iframe.style = "width: 320px;height: 50px";
        iframe.frameBorder = 0;
        iframe.width = "0";
        iframe.height = "0";
        iframe.allowTransparency = true;
        iframe.scrolling = "no";
        iframe.marginheight = "0";
        iframe.marginwidth = "0";
        document.getElementById("ads320x50").innerHTML = iframe.outerHTML;
      }, []);
    
      return (
        <DivAds>
          <div id="ads320x50"></div>
        </DivAds>
      );

}

export default Ads320x50