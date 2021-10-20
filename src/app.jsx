import styles from "./app.module.css";
import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";

import { Route } from "react-router-dom";
import { About } from "./pages/index";

function App({ youtube }) {
  const [videos, setVideos] = useState([]); // ( [] ) []는 상태의 초기값이다.
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    setSelectedVideo(null);
    youtube.search(query).then((videos) => {
      setVideos(videos);
    });
  };

  useEffect(() => {
    /*
     * useEffect: 페이지가 처음 렌더링되고 난 후 무조건 한번 실행된다.
     * 배열로 지정한 useState값이 변경되면 실행된다. (아래의 경우에는 [youtube])
     *
     * mostPopula에서 넘겨준 response.data.items을 받아서 setVideo에 넣어줌.
     */
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            {<VideoDetail video={selectedVideo} />}
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
        <div>
          <Route exact path="/about" component={About} />
        </div>
      </section>
    </div>
  );
}

export default App;
