/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import styles from './video_detail.module.css';

const VideoDetail = ({ video, video: { snippet } }) => (
  <section className={styles.detail}>
    <iframe
      autoPlay="1"
      width="100%"
      height="500px"
      frameBorder="0"
      type="text/html"
      allowFullScreen
      className={styles.video}
      title="youtube video player"
      src={`https://www.youtube.com/embed/${video.id}`}
    ></iframe>
    <h2>{snippet.title}</h2>
    <h3>{snippet.channelTitle}</h3>
    <pre className={styles.description}> {snippet.description}</pre>
  </section>
);

export default VideoDetail;
