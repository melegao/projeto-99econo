
import React, { useEffect } from "react";
import styled from "styled-components";

const DivAds = styled.div`
    display: flex;
    justify-content: center;
`

const Ads970x90 = () => {
  const sourceId = "37644826";

  

  useEffect(() => {
    var iframe = document.createElement("iframe");
    iframe.src = `http://ad.lomadee.com/banner/view?sourceId=${sourceId}&dimension=27&width=970&height=90&method=0&advertisers=&tags=`;
    iframe.style = "width: 970px;height: 90px";
    iframe.frameBorder = 0;
    iframe.width = "0";
    iframe.height = "0";
    iframe.allowTransparency = true;
    iframe.scrolling = "no";
    iframe.marginheight = "0";
    iframe.marginwidth = "0";
    document.getElementById("ads970x90").innerHTML = iframe.outerHTML;
  }, []);

  return (
    <DivAds>
      <div id="ads970x90"></div>
    </DivAds>
  );
};

export default Ads970x90;
