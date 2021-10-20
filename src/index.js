import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./app.module.css";
import "./index.css";
import YoutubeFetch from "./service/youtube-fetch";
import { BrowserRouter } from "react-router-dom";
// import Youtube from "./service/youtube"

const youtube = new YoutubeFetch(process.env.REACT_APP_YOUTUBE_API_KEY);
// const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App youtube={youtube} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
