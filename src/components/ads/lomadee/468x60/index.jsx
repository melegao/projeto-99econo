
import React, { useEffect } from "react";
import styled from "styled-components";

const DivAds = styled.div`
    display: flex;
    justify-content: center;
`

const Ads468x60 = () => {
  const sourceId = "37644826";

  //<script src="//ad.lomadee.com/banners/script.js?sourceId=37646612&dimension=2&height=60&width=468&method=0

  useEffect(() => {
    var iframe = document.createElement("iframe");
    iframe.src = `http://ad.lomadee.com/banner/view?sourceId=${sourceId}&dimension=2&width=468&height=60&method=0&advertisers=&tags=`;
    iframe.style = "width: 468px;height: 60px";
    iframe.frameBorder = 0;
    iframe.width = "0";
    iframe.height = "0";
    iframe.allowTransparency = true;
    iframe.scrolling = "no";
    iframe.marginheight = "0";
    iframe.marginwidth = "0";
    document.getElementById("ads468x60").innerHTML = iframe.outerHTML;
  }, []);

  return (
    <DivAds>
      <div id="ads468x60"></div>
    </DivAds>
  );
};

export default Ads468x60;
