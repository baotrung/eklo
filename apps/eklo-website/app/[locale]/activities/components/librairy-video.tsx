"use client";

import { useRef } from "react";
import styles from "./library-section.module.scss";

export const LibrairyVideo = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);
  const handle = () => {
    console.log("loaded");
    console.log(videoRef.current?.firstChild);
  };

  return (
    <iframe
      height={600}
      ref={videoRef}
      src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FEkloCoaching%2Fvideos%2F422004493843889&width=500&show_text=false&height=281&appId"
      className={styles.video}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen={true}
      onLoad={handle}
    ></iframe>
  );
};
