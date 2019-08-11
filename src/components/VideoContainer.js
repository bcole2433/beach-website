import React from "react";
import Title from "./Title";
import BitmovinPlayer from './BitmovinPlayer';

const VideoContainer = () => {
  return (
    <section className="video">
      <Title title="Experience Like Never Before" />
      <BitmovinPlayer />
    </section>
  );
};

export default VideoContainer;
