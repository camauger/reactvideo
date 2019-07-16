import axios from "axios";

const KEY = "AIzaSyB_KPeE-MNI9H8_RqKY0vth-rdKVU-zi38";
// https://developers.google.com/youtube/v3/docs/search/list

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
