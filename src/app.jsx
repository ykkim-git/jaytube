import "./index.css";
import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log("useeffect");

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos/?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyACtU4lPRrpyklXCYqllRyc8mGBo8K_ywo",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []); // 마운트될때마다 호출되지 않도록 수정
  // }, [name, videos]);
  // name, video가 없데이트 될 때마다 호출
  return <VideoList videos={videos} />;
}

export default App;
