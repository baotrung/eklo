"use client";

import { MaxWidthContainer } from "@/components/MaxWidthContainer";

export const Embeded = () => {
  return (
    <>
      <div id="fb-root"></div>
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0"
      ></script>
      <MaxWidthContainer>
        <h1>Blog</h1>
        <div
          style={{
            paddingBottom: "56.25%",
            position: "relative",
            display: "block",
            width: "100%",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FEkloCoaching&tabs=timeline&width=500&height=auto&small_header=false&hide_cover=false&show_facepile=false&appId"
            style={{
              border: "none",
              overflow: "hidden",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            data-adapt-container-width
            allowFullScreen
            allow="fullscrren; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; data-adapt-container-width"
          ></iframe>
        </div>
      </MaxWidthContainer>
    </>
  );
};
