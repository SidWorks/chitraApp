import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID tBXKMvTfl08fJ2fq9NlbmuowDZX6hr0uQ44ISFmWVp0",
  },
});
